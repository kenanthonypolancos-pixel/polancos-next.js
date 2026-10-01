"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Jahman K'Njo home">
        <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
        <span className="brand-name">JAHMAN K&apos;NJO</span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {pages.map((page) => {
          const active = pathname === page.href;
          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={`nav-link${active ? " active" : ""}`}
              href={page.href}
              key={page.href}
            >
              {page.label}
            </Link>
          );
        })}
      </nav>
      <a className="header-note" href="mailto:hello@jahmanknjo.com">
        <span className="status-dot" /> INDEPENDENT. ALWAYS.
      </a>
    </header>
  );
}