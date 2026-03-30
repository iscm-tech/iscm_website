import { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudioLab",
};

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
