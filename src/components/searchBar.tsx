"use client";

import { useLocale, useTranslations } from "next-intl";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Command, CommandEmpty, CommandInput, CommandList } from "./ui/command";
import { Search } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { searchPostServices } from "@/services/post.service";
import { SearchPostItemType } from "@/schemaValidations/post.schema";
import Link from "next/link";
import { mappingTableToPage } from "@/lib/utils";
import DomParser from "./domParser";
import Image from "next/image";
import { format } from "date-fns";
import { Tag } from "antd";
import { postCateTagColors } from "@/constants";

export default function SearchBar() {
  const locale = useLocale();
  const i18n = useTranslations();

  const controllerRef = useRef<AbortController | null>(null);

  const [results, setResults] = useState<SearchPostItemType[]>([]);
  const [searchStr, setSearchStr] = useState("");
  const [loading, setLoading] = useState(false);

  const search = useMemo(
    () =>
      debounce(async (value: string) => {
        value = value.trim();

        if (value.length < 2) {
          setResults([]);
          return;
        }

        // Cancel the previous request if it's still ongoing
        controllerRef.current?.abort();

        // Create a new AbortController for the new request
        const controller = new AbortController();
        controllerRef.current = controller;

        setLoading(true);

        try {
          const res = (
            await searchPostServices(locale, value, {
              signal: controller.signal,
            })
          ).payload;

          setResults(res.data);
        } catch (err: any) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        } finally {
          setLoading(false);
        }
      }, 300),
    [],
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white/60 text-white w-30 h-full rounded-xl flex items-center justify-center gap-1 cursor-pointer hover:opacity-75 transition-opacity">
          <Search size={14} /> {locale === "en" ? "Search" : "Tìm kiếm"}...
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="bg-white w-200! max-w-[50vw]! shadow-2xl ring-4 ring-neutral-300/80 p-0! top-1/3"
      >
        <Command className="rounded-lg">
          <CommandInput
            value={searchStr}
            placeholder={locale === "en" ? "Search..." : "Tìm kiếm..."}
            onValueChange={(searchStr) => {
              setSearchStr(searchStr);
              setResults([]);
              search(searchStr);
            }}
          />
          <CommandList>
            {results.length > 0 && (
              <div className="px-2.5 pt-2 font-medium">
                {locale === "en" ? "Results" : "Kết quả"}:{" "}
                {`${results.length} ${locale === "en" ? "posts" : "bài viết"}`}
              </div>
            )}

            {results.length > 0 && (
              <div className="search-dropdown mt-2">
                {results.map((item) => (
                  <Link
                    key={`${item.table}-${item.org_id}`}
                    href={`/${mappingTableToPage(item.table)}/${item.slug}`}
                    className="block! hover:bg-gray-100! px-2.5 py-3 rounded-md"
                  >
                    <h4 className="text-base!">
                      <DomParser content={item.title} />
                    </h4>

                    <span>
                      <DomParser content={item.snippet} />
                    </span>
                    <div className="flex">
                      <div className="flex-1 flex items-end gap-4">
                        <em className="text-sm text-[#545658]!">
                          {format(item.publishDate, "dd/MM/yyyy")}
                        </em>

                        <Tag
                          color={
                            postCateTagColors.filter(
                              (tag) => tag.name !== item.table,
                            )[0].hex
                          }
                        >
                          {i18n(item.table)}
                        </Tag>
                      </div>
                      <div className="flex gap-2 items-center mt-2">
                        {item.sdgs.map((sdg) => (
                          <Image
                            width={32}
                            height={32}
                            src={`/images/sdgs_icon/goal_${sdg}.svg`}
                            alt={`sdg goal ${sdg}`}
                            key={`goal_${sdg}`}
                          />
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {results.length === 0 && !loading && (
              <CommandEmpty>
                {locale === "en"
                  ? "No results found."
                  : "Không có bài viết nào phù hợp."}
              </CommandEmpty>
            )}

            {loading && (
              <div className="w-full flex justify-center items-center py-5">
                <div className="scaling-dots">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
