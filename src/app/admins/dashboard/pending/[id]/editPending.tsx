"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Pen } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function EditPending({ idPost }: { idPost: string }) {
  const router = useRouter();
  const currentPathname = usePathname();

  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => router.push(`${currentPathname}/pending/${idPost}`)}
    >
      <Pen /> Edit
    </DropdownMenuItem>
  );
}
