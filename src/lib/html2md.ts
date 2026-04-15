import envConfig from "@/config";
import { Plugin } from "unified";
import { Parent } from "unist";
import { remark } from "remark";
import { Node } from "unist";
import html from "remark-html";

let visit: any;

(async function () {
  visit = (await import("unist-util-visit")).visit;
})();

interface ElementNodeType extends Node {
  tagName?: string;
  properties?: Record<string, any>;
  value?: string;
  children?: ElementNodeType[];
  [key: string]: any;
}

interface CustomPluginOptions {
  category: string;
  folderName: string;
}

const customPlugin: Plugin<[CustomPluginOptions?]> = (options) => {
  return (tree) => {
    visit(
      tree,
      "element",
      (node: any, index: number | null, _: Parent | null) => {
        if (node.tagName !== "img" || index === null) return;

        if (String(node.properties.src).startsWith("blob")) {
          node.properties.src = `/images/${options?.category}/${options?.folderName}/${node.properties.alt}`;
        } else if (
          String(node.properties.src).startsWith(envConfig.API_ENDPOINT)
        ) {
          node.properties.src = String(node.properties.src).substring(
            String(node.properties.src).lastIndexOf("/images"),
          );
        }
      },
    );
  };
};

export default async function processHTMLContent(
  htmlcontent: string,
  category: string,
  folderName: string,
): Promise<string> {
  const unified = (await import("unified")).unified;
  const rehypeParse = (await import("rehype-parse")).default;
  const rehypeStringify = (await import("rehype-stringify")).default;

  const converted = await unified()
    .use(rehypeParse, { fragment: true })
    .use(customPlugin, { category, folderName })
    .use(rehypeStringify)
    .process(htmlcontent);

  return converted.value.toString();
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

function stripClassStylePlugin<Tree>(): (tree: Tree) => void {
  return (tree: Tree) => {
    visit(
      tree,
      "element",
      (node: any, index: number | null, parent: any | null) => {
        const props = node.properties;
        if (!props) return;

        // Remove all variants
        delete props.class; // sometimes "class"
        delete props.className; // sometimes "className" (array/string)
        delete props.style; // style string/object
      },
    );
  };
}

function customImageDomainPlugin<Tree>(): (tree: Tree) => void {
  return (tree: Tree) => {
    visit(
      tree,
      "element",
      (node: any, index: number | null, parent: any | null) => {
        if (node.tagName !== "img" || !parent || index === null) return;

        // Normalize img source always have "/" at begin.
        const imageSrc: string = !String(node.properties.src).startsWith("/")
          ? `/${node.properties.src}`
          : node.properties.src;

        const imgNode: ElementNodeType = {
          type: "element",
          tagName: "img",
          properties: {
            src: `${envConfig.API_ENDPOINT}/public/static${
              imageSrc.startsWith("/") ? imageSrc : imageSrc + "/"
            }`,
            loading: "lazy",
            class: node.properties.class,
            id: node.properties.id,
          },
        };

        if (parent.tagName !== "figure") {
          const figureNode: ElementNodeType = {
            type: "element",
            tagName: "figure",
            properties: {
              class: "w-full",
              style:
                "display: flex; flex-direction: column; align-items: center; justify-content: center",
            },
            children: node.properties.alt ? [imgNode] : [imgNode],
          };
          parent.children[index] = figureNode;
        } else {
          parent.children[index] = imgNode;
        }
      },
    );
  };
}

export async function processPortalHTMLContent(htmlcontent: string) {
  const unified = (await import("unified")).unified;
  const rehypeParse = (await import("rehype-parse")).default;
  const rehypeStringify = (await import("rehype-stringify")).default;

  const converted = await unified()
    .use(rehypeParse, { fragment: true })
    .use(stripClassStylePlugin)
    .use(customImageDomainPlugin)
    .use(rehypeStringify)
    .process(htmlcontent);

  return converted.value.toString();
}
