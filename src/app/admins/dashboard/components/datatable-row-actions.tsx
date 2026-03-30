"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DataTableRowActions({
  id,
  category,
  locale,
  isDraft,
  actionGroup,
}: {
  id: string;
  category:
    | "news"
    | "student_life"
    | "open-admission"
    | "events"
    | "evolving-research"
    | "iscm_in_the_media";
  locale: string;
  isDraft: boolean;
  actionGroup: Array<React.JSX.Element[]>;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {actionGroup.map((actions, id) => (
          <>
            {actions}
            {id !== actionGroup.length - 1 && <DropdownMenuSeparator />}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
