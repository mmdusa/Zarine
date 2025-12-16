import Link from "next/link";

type Crumb = {
  label: string;
  href?: string; // if missing => just text (current page)
};

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#FFD700] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
            {idx < items.length - 1 && (
              <span className="px-1 text-red-500">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
