"use client";

import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "#dispatch",     label: "Dispatch" },
  { href: "#routing",      label: "Routing" },
  { href: "#resources",    label: "Resources" },
  { href: "#architecture", label: "Architecture" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav ref={navRef} className="navbar" aria-label="Main navigation">
      {/* Logo */}
      <a href="#" className="navbar-logo" aria-label="KAZE home">
        <div className="navbar-logo-mark" aria-hidden="true">K</div>
        KAZE
      </a>

      {/* Links */}
      <ul className="navbar-links" role="list">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>

      {/* Dashboard Links */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a
          href="http://localhost:3002"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 16px",
            background: "var(--color-info)",
            color: "#fff",
            fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.02em",
            textDecoration: "none",
            borderRadius: "var(--radius-pill)",
            boxShadow: "0 2px 8px rgba(10, 132, 255, 0.25)",
            transition: "transform 150ms, box-shadow 150ms",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(10, 132, 255, 0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(10, 132, 255, 0.25)";
          }}
        >
          Ambulance Dashboard
        </a>
        <a
          href="http://localhost:3001"
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "8px 16px",
            background: "var(--color-success)",
            color: "#fff",
            fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.02em",
            textDecoration: "none",
            borderRadius: "var(--radius-pill)",
            boxShadow: "0 2px 8px rgba(52, 199, 89, 0.25)",
            transition: "transform 150ms, box-shadow 150ms",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(52, 199, 89, 0.35)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 8px rgba(52, 199, 89, 0.25)";
          }}
        >
          Hospital Dashboard
        </a>
      </div>
    </nav>
  );
}
