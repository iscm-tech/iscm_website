"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";

export default function DatePicker({
  field,
  date,
  setDate,
  disabled,
}: {
  field: string;
  date: Date | undefined;
  setDate: (val: Date) => void;
  disabled?: (date: Date) => boolean;
}) {
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
            selected={date ?? undefined}
            onSelect={(val) => {
              if (val) setDate(val);
            }}
            initialFocus
            disabled={
              disabled !== undefined ? disabled : (date) => date > new Date()
            }
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
