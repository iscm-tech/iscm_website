"use client";

import { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";

// Tiptap Extenstions
import StarterKit from "@tiptap/starter-kit";
import { TableKit } from "@tiptap/extension-table";
import Heading from "@tiptap/extension-heading";
import Underline from "@tiptap/extension-underline";
import LinkExts from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import ImageExts from "@tiptap/extension-image";
import FontFamily from "@tiptap/extension-font-family";
import { Color, TextStyle } from "@tiptap/extension-text-style";
import Youtube from "@tiptap/extension-youtube";
import Dropcursor from "@tiptap/extension-dropcursor";
import Focus from "@tiptap/extension-focus";
import CharacterCount from "@tiptap/extension-character-count";

import Menubar from "./menubar";
import { Button } from "@/components/ui/button";
import { PanelRight, SaveIcon } from "lucide-react";

import "./editor_style.scss";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import { toast } from "@/hooks/use-toast";
import processHTMLContent from "@/lib/html2md";
import { normalizeFile } from "@/lib/utils";
import { Splitter } from "antd";

export default function RichtextEditor({
  children,
  content,
  categories,
  onSubmit,
  readOnly = false,
}: {
  readOnly?: boolean;
  children?: Readonly<React.ReactNode>;
  content?: string;
  categories: {
    locale: string;
    slug: string;
    category: string;
  };
  onSubmit: (
    imageUploads: File[],
    content: string,
    description: string,
  ) => Promise<void>;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TableKit.configure({
        table: { resizable: true },
      }),
      ImageExts.extend({
        group: "inline",
        inline: true,
        renderHTML({ HTMLAttributes }) {
          return [
            "figure",
            {
              class: "w-full",
              style:
                "display: flex; flex-direction: column; align-items: center; justify-content: center;",
            },
            [
              "img",
              {
                ...HTMLAttributes,
                class: (HTMLAttributes.class ?? "") + " w-[80%]",
              },
            ],
          ];
        },
      }),
      Dropcursor,
      Placeholder.configure({
        placeholder: "Write your content here...",
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],
      }),
      Underline,
      CharacterCount,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      LinkExts.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            // disallowed protocols
            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme,
            );

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            // all checks have passed
            return true;
          } catch (error) {
            console.log(error);
            return false;
          }
        },
      }),
      Focus.configure({
        className: "has-focus",
        mode: "all",
      }),
      Youtube.configure({
        controls: true,
        nocookie: true,
        HTMLAttributes: {
          style: "width: 100%",
        },
      }),
      TextStyle,
      FontFamily,
      Color,
    ],
    immediatelyRender: false,
    injectCSS: true,
    editable: !readOnly,
    editorProps: {
      attributes: {
        class: "w-full h-full cursor-text px-8 py-5",
      },
      handleDrop(view, event, _, moved) {
        if (
          !moved &&
          event.dataTransfer &&
          event.dataTransfer.files &&
          event.dataTransfer.files[0]
        ) {
          event.preventDefault();
          const files: FileList = event.dataTransfer.files;
          for (let i = 0; i < files.length; i++) {
            const file: File = normalizeFile(files[i]);
            if (/^image\/(jpeg|png|gif|webp?)$/.test(file.type)) {
              setImageUploads((prev) => [...prev, file]);

              const _URL = window.URL;
              const url = _URL.createObjectURL(file);

              const { schema } = view.state;
              const coordinates = view.posAtCoords({
                left: event.clientX,
                top: event.clientY,
              });
              const node = schema.nodes.image.create({
                src: url,
                alt: file.name,
                title: file.name,
              });
              const transaction = view.state.tr.insert(
                coordinates?.pos || 0,
                node,
              );

              view.dispatch(transaction);
            } else {
              alert("The file uploaded is not valid");
              return false;
            }
          }
          return true;
        }
      },
      handlePaste(view, event) {
        event.preventDefault();
        const pasteFiles = event.clipboardData?.files;
        if (pasteFiles) {
          for (let i = 0; i < pasteFiles.length; i++) {
            const file: File = normalizeFile(pasteFiles[i]);

            if (/^image\/(jpeg|png|gif|webp?)$/.test(file.type)) {
              setImageUploads((prev) => [...prev, file]);

              const _URL = window.URL;
              const url = _URL.createObjectURL(file);

              const { schema } = view.state;
              const coordinates = view.state.selection.$anchor.pos;

              const node = schema.nodes.image.create({
                src: url,
                alt: file.name,
                title: file.name,
              });
              const transaction = view.state.tr.insert(coordinates, node);

              view.dispatch(transaction);
            } else {
              alert("The file uploaded is not valid");
              return false;
            }
          }
        }
      },
    },
    content: content,
  });

  const mainSidebar = useSidebar();
  const [imageUploads, setImageUploads] = useState<File[]>([]);

  async function handlePublish() {
    try {
      if (editor) {
        const html = editor.getHTML();
        const description = new DOMParser().parseFromString(html, "text/html")
          .body.firstElementChild;
        if (!description) throw new Error("Content must not empty");

        const content = await processHTMLContent(
          html,
          categories.category,
          categories.slug,
        );

        // console.log(content);

        await onSubmit(imageUploads, content, description.innerHTML);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      toast({
        title: "Error" + error,
        duration: 2500,
      });
      console.log(error);
    }
  }

  useEffect(() => {
    mainSidebar.setOpen(false);

    return () => {
      mainSidebar.setOpen(true);
    };
  }, []);

  return (
    <TooltipProvider>
      <div className="h-full overflow-hidden flex flex-row">
        <div className="py-2 flex flex-col justify-between mr-2">
          {mainSidebar && (
            <Button
              className="w-fit"
              variant="ghost"
              onClick={() => mainSidebar.setOpen(!mainSidebar.open)}
            >
              <PanelRight />
            </Button>
          )}
          <div className="flex flex-col">
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  className="text-md"
                  type="submit"
                  onClick={handlePublish}
                >
                  <SaveIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p className="text-base italic">Publish</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <Splitter className="gap-3 py-3">
          <Splitter.Panel
            className="rounded-lg"
            defaultSize="20%"
            min="10%"
            max="40%"
            collapsible
            style={{ boxShadow: "0 0 10px rgba(61, 37, 20, 0.2)" }}
          >
            <div className="w-full h-full overflow-auto editor__sidebar !px-3">
              {children}
            </div>
          </Splitter.Panel>
          <Splitter.Panel className="h-full overflow-hidden">
            {/* Editor */}
            <div
              className="editor h-full flex-1 flex flex-col border-2 border-gray-400 rounded-lg overflow-hidden"
              style={{
                opacity: readOnly ? 0.6 : 1,
              }}
            >
              {editor && !readOnly && (
                <Menubar editor={editor} setImageUploads={setImageUploads} />
              )}
              <section className="content-body overflow-auto h-full">
                <EditorContent
                  editor={editor}
                  className="tiptap__wrapper flex-1 h-full"
                  style={{ cursor: readOnly ? "not-allowed" : "text" }}
                />
              </section>
            </div>
          </Splitter.Panel>
        </Splitter>
      </div>
    </TooltipProvider>
  );
}
