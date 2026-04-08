"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Check, PlusCircle } from "lucide-react";
import React, { ReactElement } from "react";

export default function CheckboxList<T extends number | string>({
  field,
  name,
  valueArr,
  state,
  setState,
  maxItems,
  castValType,
}: {
  field: string;
  name: string;
  valueArr: { value: T; icon?: ReactElement }[];
  state: T[];
  setState: React.Dispatch<React.SetStateAction<T[]>>;
  maxItems?: number;
  castValType: (val: any) => T;
}) {
  return (
    <div className="my-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-fit w-full border-dashed justify-between py-2"
          >
            <span className="flex items-center gap-1 whitespace-normal">
              <PlusCircle />
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
                  const isSelected = state.includes(castValType(option.value));
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => {
                        if (isSelected) {
                          setState(
                            state.filter((val) => val !== Number(option.value)),
                          );
                        } else {
                          if (maxItems && state.length >= maxItems) {
                            toast({
                              title:
                                "Maximum number of items selected is " +
                                maxItems,
                            });
                            return;
                          }

                          setState((prev) => [
                            ...prev,
                            castValType(option.value),
                          ]);
                        }
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
          <div className="hidden gap-1 lg:flex flex-wrap h-fit">
            {valueArr
              .filter((option) => state.includes(castValType(option.value)))
              .map((option) => (
                <Badge
                  variant="secondary"
                  key={option.value}
                  className="rounded-sm p-1 font-normal w-fit h-fit cursor-pointer"
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
}
