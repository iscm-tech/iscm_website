import { LangType } from "./lang.type";

export interface RequestProps {
  params: Promise<{ locale: string; id: string; slug: string; studio: string }>;
  searchParams: Promise<{
    page?: number;
    lang?: LangType;
    month?: number;
    year?: string;
  }>;
}
