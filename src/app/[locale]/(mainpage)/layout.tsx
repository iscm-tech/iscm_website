import { Metadata } from "next";

import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import HelpingFloat from "./components/FloatButton";

export const metadata: Metadata = {
  title: {
    template: "ISCM | %s",
    default: "ISCM",
  },
};

export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="pt-[48px] md:pt-[60px] min-h-[50vh]">{children}</div>
      <HelpingFloat />
      <Footer />
    </>
  );
}
