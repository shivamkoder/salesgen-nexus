import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center glow-border">
            <span className="font-heading text-sm font-bold text-primary">S</span>
          </div>
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            SALESGEN
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#mission" className="hover:text-foreground transition-colors">Mission</a>
          <a href="#infrastructure" className="hover:text-foreground transition-colors">Infrastructure</a>
          <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
          <a href="#cta" className="hover:text-foreground transition-colors">Get Started</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_oklch(0.78_0.08_260_/_30%)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass-strong px-6 pb-6 flex flex-col gap-4 text-sm text-muted-foreground">
          <a href="#mission" onClick={() => setOpen(false)} className="hover:text-foreground">Mission</a>
          <a href="#infrastructure" onClick={() => setOpen(false)} className="hover:text-foreground">Infrastructure</a>
          <a href="#vision" onClick={() => setOpen(false)} className="hover:text-foreground">Vision</a>
          <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Get Started</a>
        </div>
      )}
    </nav>
  );
}
