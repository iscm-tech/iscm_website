export default async function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container py-4">{children}</div>;
}
