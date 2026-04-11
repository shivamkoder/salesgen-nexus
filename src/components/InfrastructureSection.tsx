import { Zap, Globe, ShieldCheck, BarChart3, Network, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  { icon: BarChart3, title: "Seamless Tracking Ecosystem", desc: "Our infrastructure doesn't just record data; it validates every touchpoint, verifying high-performance tracking, eliminating click fraud, ensuring only genuine sales count.", span: "md:col-span-2 md:row-span-2" },
  { icon: Zap, title: "Zero Latency", desc: "Sub-millisecond data attribution so conversions reflect real-time results.", span: "" },
  { icon: Globe, title: "Elite Global Network", desc: "Access a curated pool of elite creators, media buyers, and closers across every continent.", span: "" },
  { icon: ShieldCheck, title: "Immutable Transparency", desc: "Every lead, every commission — fully auditable. High-performance ledger with total visibility.", span: "md:col-span-2" },
  { icon: Network, title: "Smart Routing", desc: "AI-powered offer matching connects affiliates to the products they'll convert best.", span: "" },
  { icon: Clock, title: "Instant Settlements", desc: "Get paid the moment a conversion is verified. No waiting periods, no minimum thresholds.", span: "" },
];

function FeatureCard({ f, delay }: { f: typeof features[0]; delay: number }) {
  const ref = useScrollReveal({ delay });
  const isLarge = f.span.includes("row-span");

  return (
    <div
      ref={ref}
      className={`gradient-border-card group glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${f.span}`}
    >
      <div className={isLarge ? "flex flex-col h-full" : "flex items-start gap-4"}>
        <div className={`h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_oklch(0.78_0.08_260_/_15%)] ${isLarge ? "mb-5" : ""}`}>
          <f.icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={24} />
        </div>
        <div className={isLarge ? "flex-1 flex flex-col" : ""}>
          <h3 className="font-heading text-base font-semibold text-foreground mb-2">
            {f.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {f.desc}
          </p>
          {isLarge && (
            <div className="mt-auto pt-6 grid grid-cols-3 gap-4">
              {[
                { label: "Uptime", value: "99.99%" },
                { label: "Latency", value: "<1ms" },
                { label: "Fraud Block", value: "100%" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-xl font-bold text-gradient-accent">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function InfrastructureSection() {
  const headerRef = useScrollReveal();
  return (
    <section id="infrastructure" className="relative py-28 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-primary/4 blur-[180px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-primary font-heading mb-3">
            Performance Infrastructure
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gradient tracking-[-0.02em]">
            Built for Speed &amp; Truth
          </h2>
          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground font-heading">
            Proprietary Tracking &amp; Settlement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
