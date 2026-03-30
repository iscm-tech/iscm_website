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
import { sdgs } from "@/constants";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { DatePicker } from "antd";
import { Check, PlusCircle, Search } from "lucide-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { ReactElement, useState } from "react";

const sdgsVal: { value: string; icon?: ReactElement }[] = sdgs.map(
  (_, sdg) => ({
    value: `SDG ${sdg + 1}`,
    icon: (
      <Image
        src={`/images/sdgs_icon/goal_${sdg + 1}.svg`}
        alt={`SDG ${sdg + 1}`}
        width={40}
        height={40}
      />
    ),
  }),
);

export default function SearchSection() {
  const locale = useLocale();

  const [sdgsSelected, setSdgsSelected] = useState<string[]>([]);

  return (
    <div className="row mb-5">
      <div className="col-12 flex rounded-full !border border-[#ccc] py-1 pr-1 hover:bg-[#eee] transition-colors">
        <input
          className="mx-2 flex-1 outline-none text-lg text-black bg-transparent"
          type="text"
          placeholder={locale === "en" ? "Search..." : "Tìm kiếm"}
          // ref={inputSearch}
        />
        <button
          className="transition-all duration-200 flex items-center justify-center rounded-full bg-black w-auto h-8 aspect-square !text-white hover:shadow-black hover:scale-105"
          style={{ boxShadow: "0 0 12px var(--tw-shadow-color)" }}
          // onClick={handleSearch}
        >
          <Search className="text-current" size={16} />
        </button>
      </div>
      <div className="col-12 flex items-center mt-3 gap-3">
        <p className="w-fit mb-0">
          {locale === "en" ? "Filter by" : "Lọc theo"}:
        </p>
        <DatePicker.RangePicker format={["DD/MM/YYYY"]} />

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
                  SDGs
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
              <Command>
                <CommandInput placeholder={"SDG..."} />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {sdgsVal.map((option) => {
                      const isSelected = sdgsSelected.includes(option.value);
                      return (
                        <CommandItem
                          key={option.value}
                          onSelect={() => {
                            if (isSelected) {
                              setSdgsSelected(
                                sdgsSelected.filter(
                                  (val) => val !== option.value,
                                ),
                              );
                            } else {
                              setSdgsSelected((prev) => [
                                ...prev,
                                option.value,
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
        </div>
      </div>
    </div>
  );
}
