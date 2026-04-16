import Footer from "@/components/partials/footer";
import Header from "@/components/partials/header";
import { authOpts } from "@/lib/nextAuthOpts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOpts);

  if (!session?.AT) redirect("/auth/login");

  return (
    <>
      <Header />
      <section className="pt-[48px] md:pt-[60px] pb-16! min-h-[70vh]">
        {children}
      </section>
      <Footer />
    </>
  );
}
