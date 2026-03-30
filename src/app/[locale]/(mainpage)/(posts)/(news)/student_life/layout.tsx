// import Footer from "@/components/partials/footer";
// import Header from "@/components/partials/header";
import PageHeader from "@/components/partials/pageHeader";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: locale === "en" ? "Student Life" : "Nhịp sống sinh viên",
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
