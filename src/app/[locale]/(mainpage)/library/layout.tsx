import PageHeader from "@/components/partials/pageHeader";

export async function generateMetadata() {
  return {
    title: "Gallery",
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
