import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4">
      <ol
        className="flex items-center space-x-2 text-sm text-cyan-100/70"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            {item.href ? (
              <>
                <Link
                  href={item.href}
                  itemProp="item"
                  className="hover:text-cyan-300 transition-colors"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
                <meta itemProp="position" content={String(index + 1)} />
                {index < items.length - 1 && (
                  <svg
                    className="w-4 h-4 mx-2 text-cyan-500/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </>
            ) : (
              <>
                <span itemProp="name" className="text-cyan-300 font-medium">
                  {item.label}
                </span>
                <meta itemProp="position" content={String(index + 1)} />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
