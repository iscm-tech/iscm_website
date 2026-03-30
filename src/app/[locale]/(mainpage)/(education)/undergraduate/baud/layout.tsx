import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title:
      locale === "en"
        ? "Bachelor of Architectural and Urban Design inclusive Smart City "
        : "Chương trình Kiến trúc và Thiết kế đô thị thông minh",
  };
}

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
