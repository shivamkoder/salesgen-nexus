export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-sm font-bold tracking-tight text-muted-foreground">
          SALESGEN
        </span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SalesGen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
