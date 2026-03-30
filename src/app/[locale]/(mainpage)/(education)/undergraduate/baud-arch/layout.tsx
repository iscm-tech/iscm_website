import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title:
      locale === "en"
        ? "BAUD - Architect"
        : "Chương trình Kiến trúc sư Kiến trúc và Thiết kế Đô thị Thông minh",
    openGraph: {
      title:
        locale === "en"
          ? "Bachelor of Smart Mobility and Operations Management - Architect"
          : "Chương trình Kiến trúc sư Kiến trúc và Thiết kế Đô thị Thông minh",
      images: [
        {
          url: "https://iscm.ueh.edu.vn/images/courses/undergraduate/bmom/bmom.png",
        },
      ],
      locale: locale,
    },
  };
}

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
