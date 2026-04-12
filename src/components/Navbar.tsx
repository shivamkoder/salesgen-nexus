import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-[0_4px_30px_oklch(0_0_0_/_40%)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20 transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-[0_0_16px_oklch(0.78_0.08_260_/_20%)]">
            <span className="font-heading text-sm font-bold text-primary">S</span>
          </div>
          <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
            SALESGEN
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {["Mission", "Infrastructure", "Vision"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative py-1 hover:text-foreground transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-light hover:border-primary/30"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-1">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong px-6 pb-6 flex flex-col gap-4 text-sm text-muted-foreground border-t border-border/30">
          <a href="#mission" onClick={() => setOpen(false)} className="py-2 hover:text-foreground transition-colors">Mission</a>
          <a href="#infrastructure" onClick={() => setOpen(false)} className="py-2 hover:text-foreground transition-colors">Infrastructure</a>
          <a href="#vision" onClick={() => setOpen(false)} className="py-2 hover:text-foreground transition-colors">Vision</a>
          <a href="#" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full border border-border/40 px-6 py-3 font-medium text-foreground mt-2">Log in</a>
          <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Get Started</a>
        </div>
      )}
    </nav>
  );
}
