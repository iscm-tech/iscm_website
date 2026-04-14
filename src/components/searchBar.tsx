"use client";

import { useLocale } from "next-intl";
import { barlow } from "@/app/fontDeclare";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "./ui/command";
import { Calculator, Calendar, Search, Smile, User } from "lucide-react";

export default function SearchBar() {
  const locale = useLocale();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white/60 text-white w-30 h-full rounded-xl flex items-center justify-center gap-1 cursor-pointer hover:opacity-75 transition-opacity">
          <Search size={14} /> {locale === "en" ? "Search" : "Tìm kiếm"}...
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="bg-white shadow-2xl ring-4 ring-neutral-300/80 p-0! top-1/3"
      >
        <Command className="rounded-lg">
          <CommandInput
            placeholder={locale === "en" ? "Search..." : "Tìm kiếm..."}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem disabled>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
