"use client";

import React, { ReactElement, useRef, useState } from "react";
import slugify from "slugify";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";

import { uploadImageService } from "@/services/uploadImage.service";
import { createUpdatePostServices } from "@/services/post.service";

import { PostType, UpdatePostBody } from "@/schemaValidations/post.schema";
import { toast } from "@/hooks/use-toast";
import { normalizeFile } from "@/lib/utils";
import { portalCatesVi, sdgs } from "@/constants";

import Image from "next/image";
import RichtextEditor from "../../../components/Editor/richtext-editor";
import { Checkbox } from "@/components/ui/checkbox";
import InputString from "../../../components/InputString";
import ComboBox from "../../../components/ComboBox";
import DatePicker from "../../../components/DatePicker";
import FilesInput from "../../../components/FilesInput";
import CheckboxCustom from "../../components/CheckboxCustom";
import CheckboxList from "../../../components/CheckboxList";

const sdgsVal: { value: number; icon?: ReactElement }[] = sdgs.map(
  (_, sdg) => ({
    value: sdg + 1,
    icon: (
      <Image
        src={`/images/sdgs_icon/goal_${sdg + 1}.svg`}
        alt={`SDG ${sdg + 1}`}
        width={40}
        height={40}
      />
    ),
  }),
);

export default function Editor({
  data,
  locale,
  posted_portal,
}: {
  data: PostType;
  locale: string;
  posted_portal?: {
    portalCategories: number[];
    thumbnail: string;
    background: string;
  };
}) {
  const router = useRouter();
  const metaForm = useRef(null);
  const sidebar = useSidebar();

  const [portalCates, setPortalCates] = useState<number[]>(
    posted_portal ? posted_portal.portalCategories : [],
  );
  const [post, setPost] = useState<PostType>(data);
  const [isPostPortal, setIsPostPortal] = useState(false);

  async function updatePost(
    imageUploads: File[],
    content: string,
    description: string,
  ) {
    try {
      if (!metaForm.current) throw new Error("Invalid metaForm");

      const metaDataForm = new FormData(metaForm.current);

      const meta: { [key: string]: any } = {};

      let thumb: File | undefined,
        portal_thumb: File | undefined,
        portal_background: File | undefined;

      for (const field of metaDataForm.keys()) {
        if (metaDataForm.get(field) instanceof File) {
          const file = normalizeFile(metaDataForm.get(field) as File);
          if (file.name) {
            if (field === "thumbnail") {
              thumb = file;
            } else if (field === "portal_thumbnail") {
              portal_thumb = file;
            } else if (field === "portal_background") {
              portal_background = file;
            }
            imageUploads.push(file);
          }
        } else {
          meta[field] = metaDataForm.get(field);
        }
      }

      meta.sdgs = post.metadata.sdgs.map((sdg) => Number(sdg));
      meta.description = description;

      if (!meta.title) throw new Error("Required field is missing");

      // Handle Images
      // Local thumbnail
      if (thumb)
        meta.thumbnail = `/images/news/${post.metadata.slug}/${thumb.name}`;

      if (portal_thumb) {
        meta.portal_thumb = `/images/news/${post.metadata.slug}/${portal_thumb.name}`;
      }

      if (portal_background) {
        meta.portal_background = `/images/news/${post.metadata.slug}/${portal_background.name}`;
      }

      meta.categories = portalCates;

      const bodyParse = UpdatePostBody.safeParse({
        metadata: {
          id: post.metadata.id.toString(),
          publishDate: new Date(post.metadata.publishDate),
          ...meta,
        },
        content: content,
      });

      if (bodyParse.error) throw new Error(bodyParse.error.message);

      console.log(bodyParse.data);

      if (imageUploads)
        await uploadImageService("news", post.metadata.slug, imageUploads);

      await createUpdatePostServices.updatePost(
        "news",
        post.metadata.id,
        locale,
        bodyParse.data,
      );

      toast({
        title: "Update Post Success",
        duration: 2500,
      });

      sidebar.setOpen(true);
      router.push("./");
    } catch (error) {
      const _e: Error = error as Error;

      console.log(_e);

      toast({
        title: _e.message,
        duration: 1000,
      });
    }
  }

  return (
    <RichtextEditor
      content={post.content}
      categories={{ locale, slug: post.metadata.slug, category: "news" }}
      onSubmit={updatePost}
    >
      <form
        ref={metaForm}
        className="w-full mb-4 space-y-3 text-base pr-3 mt-[-8px]"
      >
        <InputString
          field="ID"
          name="id"
          state={post.metadata.id}
          readonly={true}
        />
        <InputString
          field="title"
          name="title"
          state={post.metadata.title}
          setState={(val: string) => {
            setPost((prev) => ({
              metadata: {
                ...prev.metadata,
                title: val,
              },
              content: prev.content,
            }));
          }}
        />
        <InputString
          field="slug"
          name="slug"
          state={post.metadata.slug}
          setState={(val) => {
            setPost((prev) => ({
              metadata: {
                ...prev.metadata,
                slug: slugify(val, {
                  lower: true,
                  strict: true,
                  trim: true,
                  remove: /[*+~.()'"!:@]/g,
                  locale: "vi",
                }),
              },
              content: prev.content,
            }));
          }}
        />
        <ComboBox
          field="Hidden?"
          name="draft"
          defaultVal={String(post.metadata.draft)}
          valueArr={[{ value: "true" }, { value: "false" }]}
        />
        <DatePicker
          field="publishDate"
          date={new Date(post.metadata.publishDate)}
          setDate={(val: Date) => {
            setPost((prev) => {
              if (val)
                return {
                  metadata: {
                    ...prev.metadata,
                    publishDate: val,
                  },
                  content: prev.content,
                };

              return prev;
            });
          }}
        />
        <FilesInput field="thumbnail" name="Thumbnail" />
        <div className="w-full">
          <Image
            src={post.metadata.thumbnail}
            alt="thumbnail"
            className="w-full"
            width={200}
            height={200}
            quality={90}
          />
        </div>
        <CheckboxCustom
          field="SDGs"
          name="sdg"
          valueArr={sdgsVal}
          state={post.metadata.sdgs}
          setState={(val) => {
            const maxItems = 3;
            const state = post.metadata.sdgs;
            const isSelected = state.includes(val);

            if (isSelected) {
              const filter: number[] = post.metadata.sdgs.filter(
                (value) => value !== val,
              );

              setPost((prev) => ({
                metadata: {
                  ...prev.metadata,
                  sdgs: filter,
                },
                content: prev.content,
              }));
            } else {
              if (maxItems && state.length >= maxItems) {
                toast({
                  title: "Maximum number of items selected is " + maxItems,
                });
                return false;
              }

              setPost((prev) => ({
                metadata: {
                  ...prev.metadata,
                  sdgs: [...prev.metadata.sdgs, val],
                },
                content: prev.content,
              }));
            }

            return isSelected;
          }}
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
          <>
            <CheckboxList<number>
              field="Portal Categories"
              name="categories"
              valueArr={Object.keys(portalCatesVi).map((val: string) => ({
                value: Number(val),
                icon: (
                  <p className="text-sm">
                    {String(portalCatesVi[val]).replaceAll("_", " ")}
                  </p>
                ),
              }))}
              state={portalCates}
              setState={setPortalCates}
              castValType={(val) => Number(val)}
            />
            <FilesInput field="portal thumbnail" name="portal_thumbnail" />
            <FilesInput field="portal background" name="portal_background" />
          </>
        )}
      </form>
    </RichtextEditor>
  );
}
