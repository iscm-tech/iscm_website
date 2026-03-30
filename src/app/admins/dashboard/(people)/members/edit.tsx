"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LangType } from "@/types/lang.type";
import { Pen } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Edit({
  id,
  lang,
}: {
  id: string;
  lang: LangType;
}) {
  const router = useRouter();
  const currentPathname = usePathname();

  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => router.push(`${currentPathname}/${id}?lang=${lang}`)}
    >
      <Pen /> Edit
    </DropdownMenuItem>
  );
}
