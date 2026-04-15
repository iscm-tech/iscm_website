"use client";

import { barlow } from "@/app/fontDeclare";
import { Collapse, Dropdown, Tag } from "antd";
import { BookSearch, Triangle, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";

type advancedSearchType = {
  level?: string;
  language?: string;
  type?: string;
  status?: string;
};

export default function SearchSection() {
  const locale = useLocale();
  const i18n = useTranslations();

  const navigator = useRouter();

  const itemsVal = useMemo(() => {
    return locale === "en"
      ? {
          level: [
            { key: "beginner", val: "Beginner" },
            { key: "advanced", val: "Advanced" },
          ],
          language: [
            { key: "en", val: "English" },
            { key: "vi", val: "Vietnamese" },
          ],
          type: [
            { key: "offline", val: "Offline" },
            { key: "online", val: "Online" },
            { key: "hydrid", val: "Hydrid" },
          ],
          status: [
            { key: "enrollment", val: "Openning" },
            { key: "closed", val: "Closed" },
            { key: "comingsoon", val: "Coming Soon" },
          ],
        }
      : {
          level: [
            { key: "beginner", val: "Người mới bắt đầu" },
            { key: "advanced", val: "Nâng cao" },
          ],
          language: [
            { key: "en", val: "Tiếng Anh" },
            { key: "vi", val: "Tiếng Việt" },
          ],
          type: [
            { key: "offline", val: "Trực tiếp" },
            { key: "online", val: "Trực tuyến" },
            { key: "hydrid", val: "Kết hợp Trực tiếp và Trực tuyến" },
          ],
          status: [
            { key: "enrollment", val: "Đang mở đăng ký" },
            { key: "closed", val: "Đã đóng đăng ký" },
            { key: "comingsoon", val: "Sắp mở" },
          ],
        };
  }, [locale]);
  const inputSearch = useRef<HTMLInputElement>(null);

  const [advancedSearch, setAdvancedSearch] = useState<advancedSearchType>({});

  const handleSearch = () => {
    navigator.push(
      `/non_degree/search?${
        inputSearch.current?.value ? `title=${inputSearch.current?.value}&` : ""
      }${Object.keys(advancedSearch)
        .map((key) => {
          const k = key as keyof advancedSearchType;
          return `${k}=${advancedSearch[k]}`;
        })
        .join("&")}`,
    );
  };

  return (
    <div className="h-full">
      <div className="flex rounded-full !border border-black w-full py-1 pr-1 mt-3 hover:bg-[#eee] transition-colors">
        <input
          className="ml-4 flex-1 outline-none text-xl text-black bg-transparent"
          type="text"
          placeholder={
            locale === "en" ? "Ex: Design Tool" : "Ví dụ: Thiết kế đồ họa"
          }
          ref={inputSearch}
        />
        <button
          className="transition-all duration-200 flex items-center justify-center rounded-full! bg-black w-auto h-12 aspect-square !text-white hover:shadow-black hover:scale-105"
          style={{ boxShadow: "0 0 12px var(--tw-shadow-color)" }}
          onClick={handleSearch}
        >
          <BookSearch className="text-current" size={22} />
        </button>
      </div>
      <Collapse
        ghost
        items={[
          {
            key: "advanced",
            label: (
              <div className="flex gap-5">
                <button
                  className="underline text-black text-lg flex items-center gap-2"
                  style={barlow.style}
                >
                  {locale === "en" ? "Advanced Search" : "Tìm kiếm nâng cao"}
                  <Triangle size={14} className="rotate-180" />
                </button>
                <div className="flex flex-wrap gap-1">
                  {advancedSearch &&
                    Object.keys(advancedSearch).map((key) => {
                      const k = key as keyof advancedSearchType;
                      return (
                        <Tag
                          key={key}
                          className="flex! gap-2 items-center text-sm"
                          style={barlow.style}
                        >
                          <span>
                            {
                              itemsVal[k].filter(
                                (it) => it.key === advancedSearch[k],
                              )[0].val
                            }
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setAdvancedSearch((prev) => {
                                if (!prev[k]) return prev;
                                const { [k]: del, ...newPrev } = prev;

                                return newPrev;
                              });
                            }}
                          >
                            <X size={16} />
                          </button>
                        </Tag>
                      );
                    })}
                </div>
              </div>
            ),
            showArrow: false,
            children: (
              <div className="flex flex-wrap w-full gap-8">
                {Object.keys(itemsVal).map((item) => {
                  const key = item as keyof advancedSearchType;
                  return (
                    <Dropdown
                      key={key}
                      menu={{
                        items: itemsVal[key].map((item) => ({
                          key: item.key,
                          label: (
                            <span
                              className={`text-lg ${
                                item.key === advancedSearch[key]
                                  ? "text-[#ce2027]"
                                  : "text-black"
                              }`}
                              style={barlow.style}
                            >
                              {item.val}
                            </span>
                          ),
                          onClick: (inf) => {
                            setAdvancedSearch((prev) => ({
                              ...prev,
                              [key]: inf.key,
                            }));
                          },
                        })),
                      }}
                      trigger={["click"]}
                    >
                      <button
                        className="!border border-black flex-1 px-4 py-2 rounded-md! text-lg flex items-center justify-between gap-2 min-w-[140px]"
                        style={barlow.style}
                      >
                        {i18n(item)}
                        <Triangle size={14} className="rotate-180" />
                      </button>
                    </Dropdown>
                  );
                })}
              </div>
            ),
          },
        ]}
      ></Collapse>
    </div>
  );
}
