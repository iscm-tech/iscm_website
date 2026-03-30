import { getLocale } from "next-intl/server";
import ContactForm from "../../components/contactForm";

export async function generateMetadata() {
  const locale = (await getLocale()) as "vi" | "en";

  return {
    title: `ISCM | ${
      locale === "en"
        ? "Bachelor Dual Degree Program"
        : "Chương trình song bằng"
    }`,
  };
}

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}

      <ContactForm
        category={`chương trình cử nhân kiến trúc và thiết kế đô thị thông minh (chương trình song bằng)`}
      />
    </>
  );
}
