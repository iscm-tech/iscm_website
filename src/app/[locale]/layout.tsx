import { NextIntlClientProvider } from "next-intl";
import { Fragment } from "react";
import { getMessages } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";

import "../style.css";
import "@/assets/plugins/bootstrap/bootstrap.min.css";
import "@/assets/scss/style.scss";
import "ldrs/react/Mirage.css";
import envConfig from "@/config";

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <Fragment>
      <GoogleAnalytics gaId={envConfig.GG_ANALYTICS_ID} />

      <div id="fb-root"></div>
      <NextTopLoader color="#ffffff" showSpinner={false} height={4} />
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </Fragment>
  );
}
