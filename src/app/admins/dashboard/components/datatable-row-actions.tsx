"use client";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Fragment } from "react";

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
    | "evolving-research";
  locale: string;
  isDraft: boolean;
  actionGroup: Array<React.JSX.Element[]>;
}) {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex! h-8 w-8 p-0 data-[state=open]:bg-muted cursor-pointer hover:border! hover:border-black/50"
        >
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px] bg-white">
        {actionGroup.map((actions, id) => (
          <Fragment key={id}>
            {actions}
            {id !== actionGroup.length - 1 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
