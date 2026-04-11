export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 py-12 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20">
            <span className="font-heading text-xs font-bold text-primary">S</span>
          </div>
          <span className="font-heading text-sm font-bold tracking-[-0.02em] text-muted-foreground">
            SALESGEN
          </span>
        </div>
        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} SalesGen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
