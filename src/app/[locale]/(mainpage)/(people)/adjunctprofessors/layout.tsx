import PageHeader from "@/components/partials/pageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adjunct Professors",
};

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
