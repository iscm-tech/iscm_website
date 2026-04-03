import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: `ISCM | ${
      locale === "en"
        ? "Bachelor Dual Degree Program"
        : "Chương trình song bằng"
    }`,
  };
}

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
