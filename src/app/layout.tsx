import { getServerSession } from "next-auth";
import Script from "next/script";
import NextAuthSessionProvider from "@/components/NextAuthSessionProvider";
import { Metadata } from "next";
import { authOpts } from "@/lib/nextAuthOpts";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  icons: "/images/favicon.png",
  title: "Viện Đô thị Thông minh và Quản lý (ISCM)",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOpts);

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="overflow-x-hidden">
        <Script src="/js/jquery.slim.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/popper.min.js" strategy="beforeInteractive" />
        <Script
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v23.0"
          async
          defer
          crossOrigin="anonymous"
        />

        <NextAuthSessionProvider session={session}>
          <AntdRegistry>{children}</AntdRegistry>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
