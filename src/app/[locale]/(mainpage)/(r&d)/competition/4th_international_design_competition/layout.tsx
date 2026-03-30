// import Footer from "@/components/partials/footer";
// import Header from "@/components/partials/header";

export async function generateMetadata() {
  return {
    title: "(Re)Engaging Cities’ Landscape for Cultural and Economics Vibrancy",
    // description: data.metadata.description,
    openGraph: {
      title:
        "(Re)Engaging Cities’ Landscape for Cultural and Economics Vibrancy",
      images: [
        {
          url: "https://iscm-api.ueh.edu.vn/public/static/images/competitive/4th-international/1200x630.png",
        },
      ],
      url: `https://iscm.ueh.edu.vn/competition/4th_international_design_competition`,
      type: "article",
      locale: "en_US",
    },
  };
}

export default async function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
