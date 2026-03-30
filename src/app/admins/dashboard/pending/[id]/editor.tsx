"use client";

import Cookies from "js-cookie";
import React, { ReactElement, useRef, useState } from "react";
import RichtextEditor from "../../components/Editor/richtext-editor";
import { acceptPendingPost } from "@/services/post.service";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn, normalizeFile } from "@/lib/utils";
import { CalendarIcon, Check, PlusCircleIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
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
import { iscmCates, portalCatesEn, portalCatesVi, sdgs } from "@/constants";
import { useRouter } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";
import { PostType } from "@/schemaValidations/post.schema";
import Link from "next/link";

const Combobox = ({
  field,
  name,
  valueArr,
  defaultVal,
}: {
  field: string;
  name: string;
  defaultVal?: string;
  valueArr: { value: string; icon?: ReactElement }[];
}) => {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Select defaultValue={defaultVal} name={name}>
        <SelectTrigger className="w-full capitalize h-fit">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {valueArr.map((value) => (
            <SelectItem value={value.value} key={value.value}>
              <span className="capitalize cursor-pointer flex gap-2 items-center">
                {value.value} {value.icon}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

const DatePicker = ({
  field,
  date,
  setDate,
}: {
  field: string;
  date: Date | undefined;
  setDate: (val: Date) => void;
}) => {
  return (
    <div className="my-2">
      <Label className="text-md capitalize mb-2 block">{field}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
            title={date ? format(date, "PPP") : "No date picked"}
          >
            <CalendarIcon />
            <span className="line-clamp-1">
              {date ? format(date, "PPP") : "Pick a date"}
            </span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={(val) => {
              if (val) setDate(val);
            }}
            initialFocus
            disabled={(date) => date > new Date()}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const Checkbox = ({
  field,
  valueArr,
  disabled,
  state,
  setState,
}: {
  field: string;
  valueArr: { value: number; icon?: ReactElement }[];
  state: number[];
  setState: (val: number) => boolean;
  disabled: boolean;
}) => {
  return (
    <div className="my-2">
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
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
                    String(option.value)
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
                            : "opacity-50 [&_svg]:invisible"
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
  })
);

export default function Editor({
  data,
  locale,
  category,
}: {
  data: PostType;
  locale: string;
  category: number[];
}) {
  const router = useRouter();
  const metaForm = useRef(null);
  const sidebar = useSidebar();

  const [post, setPost] = useState<PostType>(data);

  async function handleAcceptPost() {
    try {
      if (!metaForm.current) throw new Error("Invalid metaForm");

      const metaDataForm = new FormData(metaForm.current);
      const cate = iscmCates[Number(metaDataForm.get("categories"))];
      console.log(cate);
      if (
        [
          "events",
          "news",
          "evolving_research",
          "iscm_in_the_media",
          "open_admission",
        ].includes(cate)
      ) {
        await acceptPendingPost(locale, post.metadata.id, cate, {
          headers: {
            authorization: Cookies.get("sessionToken"),
          },
        });

        toast({
          title: "Accept Portal Post Success",
          duration: 2500,
        });

        sidebar.setOpen(true);
        router.push("../");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <RichtextEditor
      content={post.content}
      categories={{ locale, slug: post.metadata.id, category: "news" }}
      onSubmit={handleAcceptPost}
      // readOnly={true}
    >
      <form
        ref={metaForm}
        className="w-full mb-4 space-y-3 text-base pt-6 pr-3 mt-[-8px]"
      >
        <div className="flex items-base">
          <p className="text-base capitalize font-medium mb-0 block">ID:</p>
          <p className="text-base">{post.metadata.id}</p>
        </div>

        <div className="flex flex-wrap items-base">
          <p className="text-base capitalize font-medium mb-0 block">Title:</p>
          <p className="text-base flex-1 ml-2">{post.metadata.title}</p>
        </div>

        <div className="flex items-base">
          <p className="text-base capitalize font-medium mb-0 block">Author:</p>
          <p className="text-base">{post.metadata.author}</p>
        </div>

        <Combobox
          field="draft"
          name="draft"
          defaultVal="false"
          valueArr={[{ value: "true" }, { value: "false" }]}
        />

        <div className="flex flex-wrap items-base">
          <p className="text-base capitalize font-medium mb-0 block">
            Public Date:
          </p>
          <p className="text-base ml-2">
            {format(post.metadata.publishDate, "PPP")}
          </p>
        </div>

        <div className="items-base">
          <p className="text-base capitalize font-medium mb-0 block">
            Thumbnail:
          </p>
          <Link
            href={data.metadata.thumbnail}
            target="_blank"
            className="w-full block overflow-hidden ml-1 pl-2 border-l border-black text-sm hover:underline"
          >
            {data.metadata.thumbnail}
          </Link>
        </div>

        <Checkbox
          field="SDGs"
          disabled={true}
          valueArr={sdgsVal}
          state={post.metadata.sdgs}
          setState={(val) => {
            const maxItems = 3;
            const state = post.metadata.sdgs;
            const isSelected = state.includes(val);

            console.log(val);

            if (isSelected) {
              const filter: number[] = post.metadata.sdgs.filter(
                (value) => value !== val
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

        <div className="flex items-base">
          <p className="text-base capitalize font-medium mb-0 block">
            Language:
          </p>
          <p className="text-base capitalize">{locale}</p>
        </div>

        <Combobox
          field="category"
          name="categories"
          valueArr={category.map((cate) => ({
            value: String(cate),
            icon: (
              <p className="text-sm">
                {locale === "vi" && portalCatesVi[cate].replaceAll("_", " ")}
                {locale === "en" && portalCatesEn[cate].replaceAll("_", " ")}
              </p>
            ),
          }))}
        />
      </form>
    </RichtextEditor>
  );
}
