import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title:
      locale === "en"
        ? "BMOM"
        : "Chương trình Quản trị vận hành và Di chuyển thông minh",
    openGraph: {
      title:
        locale === "en"
          ? "Bachelor of Smart Mobility and Operations Management"
          : "Chương trình Quản trị vận hành và Di chuyển thông minh",
      images: [
        {
          url: "https:/iscm.ueh.edu.vn//images/courses/undergraduate/bmom/bmom.png",
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
