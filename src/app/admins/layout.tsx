import { Toaster } from "@/components/ui/toaster";
import "@/app/style.css";
import CheckToken from "./checkToken";

export const metadata = {
  title: "ISCM Admin Page",
};

export default function CMSPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="antialiased h-screen overflow-hidden">
      <CheckToken />
      <main>{children}</main>
      <Toaster />
    </body>
  );
}
