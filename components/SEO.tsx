import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb component with built-in Schema.org structured data
 * Displays visual breadcrumbs and injects JSON-LD schema for SEO
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  useEffect(() => {
    // Generate breadcrumb schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };

    // Create script element for schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    script.id = 'breadcrumb-schema';

    // Remove existing breadcrumb schema if any
    const existing = document.getElementById('breadcrumb-schema');
    if (existing) {
      existing.remove();
    }

    // Add new schema
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const schemaElement = document.getElementById('breadcrumb-schema');
      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, [items]);

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-300 mb-6" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="text-gray-500">/</span>}
          {index === items.length - 1 ? (
            <span className="text-brand-highlight font-medium" aria-current="page">
              {item.name}
            </span>
          ) : (
            <Link
              to={item.url}
              className="hover:text-brand-primary transition-colors"
            >
              {item.name}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

