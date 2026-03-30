import PageHeader from "@/components/partials/pageHeader";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: locale === "en" ? "Recruitment" : "Tuyển dụng",
  };
}

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PageHeader />
      {children}
    </>
  );
}
