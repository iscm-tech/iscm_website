"use client";

// Libs
import React, { ReactElement, useRef, useState } from "react";
import slugify from "slugify";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { format } from "date-fns";

// Schema
import {
  CreatePortalPostBody,
  CreatePostBody,
} from "@/schemaValidations/post.schema";

// Services
import { uploadImageService } from "@/services/uploadImage.service";
import { createUpdatePostServices } from "@/services/post.service";

// Utils
import { portalCatesVi, sdgs } from "@/constants";
import { processPortalHTMLContent } from "@/lib/html2md";
import { normalizeFile } from "@/lib/utils";

// Components
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import RichtextEditor from "../../../components/Editor/richtext-editor";
import { Checkbox } from "@/components/ui/checkbox";
import InputString from "../../../components/InputString";
import ComboBox from "../../../components/ComboBox";
import DatePicker from "../../../components/DatePicker";
import FilesInput from "../../../components/FilesInput";
import CheckboxList from "../../../components/CheckboxList";

const sdgsVal: { value: string; icon?: ReactElement }[] = sdgs.map(
  (_, sdg) => ({
    value: `SDG ${sdg + 1}`,
    icon: (
      <Image
        src={`/images/sdgs_icon/goal_${sdg + 1}.svg`}
        alt={`SDG ${sdg + 1}`}
        width={40}
        height={40}
      />
    ),
  })
);

export default function Editor({ locale }: { locale: string }) {
  const router = useRouter();
  const metaForm = useRef(null);
  const sidebar = useSidebar();

  const [portalCates, setPortalCates] = useState<string[]>([]);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [postSlug, setPostSlug] = useState<string>("");
  const [sdgsSelected, setSdgsSelected] = useState<string[]>([]);
  const [isPostPortal, setIsPostPortal] = useState<boolean>(false);

  async function updatePost(
    imageUploads: File[],
    content: string,
    description: string
  ) {
    try {
      if (!metaForm.current) throw new Error("Invalid metaForm");

      const metaDataForm = new FormData(metaForm.current);

      const meta: { [key: string]: any } = {};

      let thumb: File | undefined;

      for (const f of metaDataForm.keys()) {
        if (metaDataForm.get(f) instanceof File) {
          const file = normalizeFile(metaDataForm.get(f) as File);
          if (file.name) {
            thumb = file;
            imageUploads.push(thumb);
          }
        } else {
          meta[f] = metaDataForm.get(f);
        }
      }

      if (!(thumb && thumb?.name)) {
        toast({ title: "Please upload thumbnail!", variant: "destructive" });
        return;
      }

      meta.sdgs = sdgsSelected.map((sdg) => Number(sdg.split("SDG ")[1]));
      meta.description = description;

      if (!(meta.title && thumb)) throw new Error("Required field is missing");

      const folderName = postSlug;

      meta.thumbnail = `/images/evolving-research/${folderName}/${thumb.name}`;
      meta.publishDate = date;
      meta.slug = postSlug;

      // Handle Post to Database
      const bodyParse = CreatePostBody.safeParse({
        metadata: meta,
        content: content,
      });

      if (bodyParse.error) throw new Error(bodyParse.error.message);

      // Upload Images
      await uploadImageService("evolving-research", folderName, imageUploads);

      const {
        payload: { data },
      } = await createUpdatePostServices.createPost(
        "evolving-research",
        meta.id,
        meta.lang,
        bodyParse.data
      );

      // |--------------------- HANDLE POST TO PORTAL ------------------------|
      if (isPostPortal) {
        const portal = { ...JSON.parse(JSON.stringify(meta)), content };
        portal.shortDesc = portal.description;

        // Định dạng theo yêu cầu: "dd/MM/yyyy HH:mm:ss"
        const formattedDate = format(date ?? new Date(), "dd/MM/yyyy HH:mm:ss");

        portal.id = data.id;
        portal.publishDate = formattedDate;
        portal.categories = portalCates.map((cate) => Number(cate));
        portal.content = await processPortalHTMLContent(portal.content);
        portal.local_cate = "evolving_research";

        const parse = CreatePortalPostBody.safeParse(portal);

        if (!parse.success) {
          throw new Error(parse.error.message);
        }

        await createUpdatePostServices.createPostPortal(parse.data);
      }
      // |---------------------|-----------------------------|---------------|

      toast({
        title: "Create Post Success",
        duration: 2500,
      });

      sidebar.setOpen(true);
      router.push("./");
    } catch (error) {
      console.log(error);
      const _e: Error = error as Error;

      console.log(_e.message);

      toast({
        title: _e.message,
        duration: 1000,
      });
    }
  }

  return (
    <RichtextEditor
      categories={{
        locale,
        slug: postSlug,
        category: "evolving-research",
      }}
      onSubmit={updatePost}
    >
      <form
        ref={metaForm}
        className="w-full mb-4 space-y-3 text-base pr-3 mt-[-8px]"
      >
        <InputString field="title" name="title" />
        <div className="relative">
          <InputString
            field="slug"
            name="slug"
            state={postSlug}
            setState={(value) => setPostSlug(value)}
            onBlur={(value) =>
              setPostSlug(
                slugify(value, {
                  lower: true,
                  strict: true,
                  trim: true,
                  remove: /[*+~.()'"!:@]/g,
                  locale: "vi",
                })
              )
            }
          />
          <button
            title="auto-generate slug"
            className="absolute right-0 top-0 p-1 rounded-md duration-300 hover:shadow-md"
            onClick={(e) => {
              e.preventDefault();
              if (!metaForm.current) return;
              const title = new FormData(metaForm.current)
                .get("title")
                ?.toString();

              if (!title) {
                toast({
                  title: "Title haven't been filled!",
                  duration: 2000,
                  variant: "destructive",
                });
                return;
              }

              setPostSlug(
                slugify(title, {
                  lower: true,
                  strict: true,
                  trim: true,
                  remove: /[*+~.()'"!:@]/g,
                  locale: "vi",
                })
              );
            }}
          >
            <RefreshCcw size={15} />
          </button>
        </div>
        <ComboBox
          field="Hidden?"
          name="draft"
          defaultVal="false"
          valueArr={[{ value: "true" }, { value: "false" }]}
        />
        <DatePicker
          field="publishDate"
          date={date ?? new Date()}
          setDate={setDate}
        />
        <FilesInput field="thumbnail" name="image" />
        <CheckboxList
          field="SDGs"
          name="sdg"
          valueArr={sdgsVal}
          state={sdgsSelected}
          setState={setSdgsSelected}
          maxItems={3}
        />
        <ComboBox
          field="Language"
          name="lang"
          valueArr={[{ value: "en" }, { value: "vi" }]}
        />
        <div className="flex space-x-3 !mt-5">
          <Checkbox
            id="post-portal"
            onCheckedChange={(checked) =>
              setIsPostPortal(Boolean(checked.valueOf()))
            }
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="post-portal"
              className="cursor-pointer select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Post To Portal
            </label>
          </div>
        </div>

        {isPostPortal && (
          <CheckboxList
            field="Portal Categories"
            name="categories"
            valueArr={Object.keys(portalCatesVi).map((val: string) => ({
              value: val,
              icon: (
                <p className="text-sm">
                  {String(portalCatesVi[val]).replaceAll("_", " ")}
                </p>
              ),
            }))}
            state={portalCates}
            setState={setPortalCates}
          />
        )}
      </form>
    </RichtextEditor>
  );
}
