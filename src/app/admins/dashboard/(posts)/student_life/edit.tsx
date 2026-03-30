"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LangType } from "@/types/lang.type";
import { Pen } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function EditPost({
  idPost,
  lang,
}: {
  idPost: string;
  lang: LangType;
}) {
  const router = useRouter();
  const currentPathname = usePathname();

  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => router.push(`${currentPathname}/${idPost}?lang=${lang}`)}
    >
      <Pen /> Edit
    </DropdownMenuItem>
  );
}
