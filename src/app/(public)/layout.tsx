import Header from "@/components/UI/Headers/Header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-64px)">{children}</div>
    </div>
  );
}