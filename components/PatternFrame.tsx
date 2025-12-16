export default function PatternFrame({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="rounded-2xl p-6 ornate" style={{["--bg" as any]:"repeating-linear-gradient(90deg, rgba(36,50,74,.05) 0 10px, rgba(30,138,138,.05) 10px 20px)"}}>
      {title && <h2 className="text-2xl font-bold text-carpet-crimson mb-2">{title}</h2>}
      {children}
    </div>
  );
}
