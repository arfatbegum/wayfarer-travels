import Headers from "@/components/UI/Headers";


export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Headers />
      <div className="min-h-[calc(100vh-64px)">{children}</div>
    </div>
  );
}