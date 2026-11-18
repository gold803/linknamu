import type { SocialItem } from "@/data/profile";

const paths: Record<SocialItem["icon"], JSX.Element> = {
  github: (
    <path
      fill="currentColor"
      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </g>
  ),
  mail: (
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="15" rx="3" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" strokeLinecap="round" />
    </g>
  ),
};

export default function SocialIcons({ items }: { items: SocialItem[] }) {
  return (
    <ul className="flex items-center justify-center gap-3">
      {items.map((item) => {
        const external = !item.url.startsWith("mailto:");
        return (
          <li key={item.label}>
            <a
              href={item.url}
              aria-label={item.label}
              title={item.label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="glass link-card focus-ring flex h-12 w-12 items-center justify-center rounded-full"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                {paths[item.icon]}
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
