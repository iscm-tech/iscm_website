"use client";

import React, { ReactElement, useRef, useState } from "react";
import RichtextEditor from "../../../components/Editor/richtext-editor";
import { EventPostType, UpdatePostBody } from "@/schemaValidations/post.schema";
import { uploadImageService } from "@/services/uploadImage.service";
import { createUpdatePostServices } from "@/services/post.service";
import { toast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn, normalizeFile } from "@/lib/utils";
import { Check, PlusCircleIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import Image from "next/image";
import { portalCatesVi, sdgs } from "@/constants";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { Checkbox } from "@/components/ui/checkbox";
import InputString from "../../../components/InputString";
import DatePicker from "../../../components/DatePicker";
import FilesInput from "../../../components/FilesInput";
import ComboBox from "../../../components/ComboBox";
import slugify from "slugify";

const CheckboxCustom = ({
  field,
  name,
  valueArr,
  state,
  setState,
}: {
  field: string;
  name: string;
  valueArr: { value: number; icon?: ReactElement }[];
  state: number[];
  setState: (val: number) => boolean;
}) => {
  return (
    <div className="my-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-full border-dashed justify-between"
          >
            <span className="flex items-center gap-1">
              <PlusCircleIcon />
              {field}
            </span>
            {state?.length > 0 && (
              <div className="hidden lg:inline-flex items-center justify-between gap-1">
                <Separator orientation="vertical" className="h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal"
                >
                  {state.length} selected
                </Badge>
              </div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <Command>
            <CommandInput placeholder={field + "..."} />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {valueArr.map((option) => {
                  const isSelected = String(state).includes(
                    String(option.value),
                  );
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => {
                        setState(option.value);
                      }}
                      className="cursor-pointer"
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible",
                        )}
                      >
                        <Check />
                      </div>
                      {option.icon}
                      <span>{option.value}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {state?.length > 0 && (
        <div className="mt-1">
          {/* <Separator orientation="vertical" className="mx-2 h-4" /> */}
          <Badge
            variant="secondary"
            className="rounded-sm px-1 font-normal lg:hidden"
          >
            {state.length} selected
          </Badge>
          <div className="hidden gap-1 lg:flex flex-wrap w-full">
            {valueArr
              .filter((option) => state.includes(option.value))
              .map((option) => (
                <Badge
                  variant="secondary"
                  key={option.value}
                  className="rounded-sm p-1 font-normal w-9 h-9 cursor-pointer"
                  title={String(option.value)}
                >
                  {option.icon}
                </Badge>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
}: {
  data: EventPostType;
  locale: string;
}) {
  const router = useRouter();
  const metaForm = useRef(null);
  const sidebar = useSidebar();

  const [post, setPost] = useState<EventPostType>(data);

  console.log(data, "fasdfalskdjfla;sdkjfl;kasdjfslkj");

  async function updatePost(
    imageUploads: File[],
    content: string,
    description: string,
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

      meta.sdgs = post.metadata.sdgs.map((sdg) => Number(sdg));
      meta.description = description;

      if (!meta.title) throw new Error("Required field is missing");

      if (thumb)
        meta.thumbnail = `/images/events/${post.metadata.slug}/${thumb.name}`;

      // if (portalCategories?.length) meta.categories = [Number(meta.categories)];

      const bodyParse = UpdatePostBody.safeParse({
        metadata: {
          id: post.metadata.id.toString(),
          eventTime: post.metadata.eventTime,
          ...meta,
        },
        content: content,
      });

      if (bodyParse.error) throw new Error(bodyParse.error.message);

      if (imageUploads)
        await uploadImageService("events", post.metadata.slug, imageUploads);

      await createUpdatePostServices.updatePost(
        "events",
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
      categories={{ locale, slug: post.metadata.slug, category: "events" }}
      onSubmit={updatePost}
    >
      <form
        ref={metaForm}
        className="w-full mb-4 space-y-3 text-base pr-3 mt-[-8px]"
      >
        <InputString
          field="ID"
          name="id"
          readonly={true}
          state={post.metadata.id}
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
          defaultVal={"false"}
          valueArr={[{ value: "true" }, { value: "false" }]}
        />
        <DatePicker
          field="eventTime"
          date={new Date(post.metadata.eventTime)}
          disabled={(date: Date) => date < new Date()}
          setDate={(val: Date) => {
            setPost((prev) => {
              if (val)
                return {
                  metadata: {
                    ...prev.metadata,
                    eventTime: val,
                  },
                  content: prev.content,
                };

              return prev;
            });
          }}
        />
        <FilesInput field="thumbnail" name="image" />
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

            // console.log(val);

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
        {/* {portalCategories && (
          <div>
            <div
              className="flex space-x-3 !mt-5"
              title="Post was posted to portal"
            >
              <Checkbox id="post-portal" disabled checked />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="post-portal"
                  className="cursor-pointer select-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Posted To Portal
                </label>
              </div>
            </div>
            <ComboBox
              field="Portal Categories"
              name="categories"
              defaultVal={String(portalCategories[0])}
              valueArr={Object.keys(portalCatesVi).map((val: string) => ({
                value: val,
                icon: (
                  <p className="text-sm">
                    {String(portalCatesVi[val]).replaceAll("_", " ")}
                  </p>
                ),
              }))}
            />
          </div>
        )} */}
      </form>
    </RichtextEditor>
  );
}
