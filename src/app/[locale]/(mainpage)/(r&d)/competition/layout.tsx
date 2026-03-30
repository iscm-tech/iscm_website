// import Footer from "@/components/partials/footer";
// import Header from "@/components/partials/header";
import { getLocale } from "next-intl/server";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: locale === "en" ? "Competition" : "Cuộc thi",
  };
}

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
