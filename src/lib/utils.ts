import path from "path";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

import { MenuType } from "@/types/menu.type";
import { enUS, vi } from "date-fns/locale";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface DateFormat {
  day: string;
  month: string;
}

export function formatDate(
  dateString: string,
  locale?: "en" | "vi",
): DateFormat {
  const date = new Date(dateString);
  const day = format(date, "dd");
  const month = format(date, locale === "vi" ? "M" : "MMM", {
    locale: locale === "vi" ? vi : enUS,
  });

  return {
    day,
    month: locale === "vi" ? `Th${month}` : month,
  };
}

export function findUrlName(menu: MenuType[], url: string): string {
  return menu.filter((item) => item.url === url)[0]?.name;
}

export function normalizeFile(originalFile: File): File {
  const name = path.parse(originalFile.name);

  const newFilename = name.name
    .normalize("NFD") // Normalize to NFD Unicode form
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/\s+/g, "_"); // Replace spaces with underscores

  // Object.defineProperty(originalFile, "name", {
  //   writable: true,
  //   value: newFilename + name.ext,
  // });

  return new File([originalFile], newFilename + name.ext, {
    type: originalFile.type,
    lastModified: originalFile.lastModified,
  });
}
