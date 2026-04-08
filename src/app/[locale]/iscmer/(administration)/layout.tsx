export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container lg:!max-w-[70vw] ">{children}</div>;
}
