"use client";

import React, { ReactElement } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

export default function CheckboxCustom({
  field,
  name,
  valueArr,
  state,
  setState,
  showDetail = true,
}: {
  field: string;
  name: string;
  valueArr: { value: number; icon?: ReactElement }[];
  state: number[];
  setState: (val: number) => void;
  showDetail?: boolean;
}) {
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
          {showDetail && (
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
          )}
        </div>
      )}
    </div>
  );
}
