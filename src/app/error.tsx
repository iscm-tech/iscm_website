"use client";

import Header from "@/components/partials/header";
import Footer from "@/components/partials/footer";
import NotFound from "@/components/not-found";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <section>
      <Header />
      <NotFound />
      <Footer />
    </section>
  );
}
