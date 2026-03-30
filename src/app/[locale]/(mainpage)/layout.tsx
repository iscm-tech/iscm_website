import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "ISCM | %s",
    default: "ISCM", // a default is required when creating a template
  },
};

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="pt-[48px] md:pt-[60px]">{children}</div>
      <Footer />
    </>
  );
}
