import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string; // si no tiene 'to', se renderiza como texto plano (paso actual)
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="pt-28 pb-2">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ol className="flex items-center gap-2 text-[12.5px] text-ink-soft flex-wrap">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={i} className="flex items-center gap-2">
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="hover:text-cyan transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-navy-deep font-medium" : ""}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-ink-soft/50" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
