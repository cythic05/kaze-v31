"use client";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 32px",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px) saturate(1.6)",
        WebkitBackdropFilter: "blur(20px) saturate(1.6)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
      }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <a
        href="http://localhost:3000"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: "1.15rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--color-text-primary)",
          textDecoration: "none",
        }}
        aria-label="KAZE home"
      >
        <div
          style={{
            width: 32,
            height: 32,
            background: "var(--color-sos)",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 900,
            letterSpacing: "0.05em",
          }}
          aria-hidden="true"
        >
          K
        </div>
        KAZE
      </a>

      {/* Dashboard Links */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a
          href="http://localhost:3000"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            background: "var(--color-surface-alt)",
            color: "var(--color-text-primary)",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
            textDecoration: "none",
            borderRadius: "var(--radius-pill)",
            border: "1px solid var(--color-border)",
            transition: "transform 150ms, background 150ms",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "";
            (e.currentTarget as HTMLElement).style.background = "var(--color-surface-alt)";
          }}
        >
          Landing Page
        </a>
        <a
          href="http://localhost:3001"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            background: "var(--color-success)",
            color: "#fff",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.02em",
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
