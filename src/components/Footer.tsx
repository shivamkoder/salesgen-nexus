import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github } from "lucide-react";

const productLinks = [
  { label: "Mission", href: "/#mission" },
  { label: "Infrastructure", href: "/#infrastructure" },
  { label: "Vision", href: "/#vision" },
];

const companyLinks: { label: string; to?: string; href?: string }[] = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Careers", href: "#" },
];

const legalLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Cookies", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/30 px-6 pt-16 pb-8 mt-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2.5 mb-4 group w-fit">
            <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20">
              <span className="font-heading text-sm font-bold text-primary">S</span>
            </div>
            <span className="font-heading text-lg font-bold tracking-[-0.02em] text-foreground">
              SALESGEN
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-xs">
            The performance infrastructure powering global affiliate commerce.
          </p>
          <div className="flex items-center gap-2">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "X" },
              { icon: Github, label: "GitHub" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-9 w-9 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-surface-light transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
            Product
          </h4>
          <ul className="space-y-3">
            {productLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
            Company
          </h4>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-foreground mb-4">
            Legal
          </h4>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-muted-foreground/70">
          © {year} SalesGen. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Built for the future of affiliate performance.
        </p>
      </div>
    </footer>
  );
}
