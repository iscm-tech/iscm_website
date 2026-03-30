"use client";

import { ReactElement, useRef, useState } from "react";
import $ from "jquery";
import { useSidebar } from "@/components/ui/sidebar";
import {
  MemberType,
  UpdateMemberBody,
  UpdateMemberBodyType,
} from "@/schemaValidations/member.schema";
import RichtextEditor from "../../../components/Editor/richtext-editor";
import { toast } from "@/hooks/use-toast";
import { normalizeFile } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Interest from "./view/interest";
import ShortBio from "./view/shortBio";
import { uploadImageService } from "@/services/uploadImage.service";
import { createUpdateMemberServices } from "@/services/member.service";

const Combobox = ({
  field,
  name,
  valueArr,
  defaultVal,
}: {
  field: string;
  name: string;
  valueArr: { value: string; icon?: ReactElement }[];
  defaultVal?: string;
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

const InputString = ({
  field,
  name,
  state,
  setState,
  disabled = false,
}: {
  field: string;
  name: string;
  state?: string;
  setState?: (val: string) => void;
  disabled?: boolean;
}) => {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Input
        id={name}
        className="w-full placeholder:italic placeholder:capitalize"
        placeholder={`Enter ${field}...`}
        value={state || undefined}
        onChange={(e) => setState && setState(e.target.value)}
        name={name}
        disabled={disabled}
      />
    </div>
  );
};

const FilesInput = ({
  field,
  name,
  required = false,
}: {
  field: string;
  name: string;
  required?: boolean;
}) => {
  return (
    <div className="my-2">
      <Label htmlFor={name} className="text-md capitalize mb-2 block">
        {field}
      </Label>
      <Input
        type="file"
        id={name}
        name={name}
        required={required}
        accept="image/*"
        className="cursor-pointer"
      />
    </div>
  );
};

export default function Editor({
  data,
  locale,
}: {
  data: MemberType;
  locale: string;
}) {
  const router = useRouter();
  const metaForm = useRef(null);
  const sidebar = useSidebar();

  const [post, setPost] = useState<MemberType>(data);

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

      if (thumb)
        meta.image = `/images/team/members/${post.metadata.id}/${thumb.name}`;

      const shortBio = $("#shortBio").html();
      const interest = $("#interest")
        .find("li")
        .map(function () {
          return $(this).text();
        })
        .get();

      const body: any = { metadata: { ...meta } };

      if (shortBio) body.metadata.bio = shortBio;
      if (interest.length > 0) body.metadata.interest = interest;

      body.metadata.draft = !(meta.draft === "false");
      body.detail = content;

      const bodyParse = UpdateMemberBody.safeParse(body);

      if (bodyParse.error) throw new Error(bodyParse.error.message);

      await createUpdateMemberServices.updateMember(
        data.metadata.id,
        locale,
        bodyParse.data
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
      content={post.detail}
      categories={{ locale, slug: post.metadata.id, category: "members" }}
      onSubmit={updatePost}
    >
      <form
        ref={metaForm}
        className="w-full mb-4 space-y-3 text-base pr-3 mt-[-8px]"
      >
        <InputString
          field="id"
          name="id"
          state={post.metadata.id}
          setState={(val: string) => {
            setPost((prev) => ({
              metadata: {
                ...prev.metadata,
                id: val,
              },
              detail: prev.detail,
            }));
          }}
          disabled={true}
        />
        <InputString
          field="name"
          name="name"
          state={post.metadata.name}
          setState={(val: string) => {
            setPost((prev) => ({
              metadata: {
                ...prev.metadata,
                name: val,
              },
              detail: prev.detail,
            }));
          }}
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
              detail: prev.detail,
            }));
          }}
        />
        <Combobox
          field="draft"
          name="draft"
          defaultVal={post.metadata.draft.toString()}
          valueArr={[{ value: "true" }, { value: "false" }]}
        />
        <ShortBio bio={post.metadata.bio} />
        <Interest interest={post.metadata.interest} />
        <FilesInput field="thumbnail" name="image" />
        <div className="w-full">
          <Image
            src={post.metadata.image}
            alt="thumbnail"
            className="w-full"
            width={200}
            height={200}
            quality={90}
          />
        </div>
      </form>
    </RichtextEditor>
  );
}
