import { Zap, Globe, ShieldCheck, BarChart3, Network, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  { icon: BarChart3, title: "Seamless Tracking Ecosystem", desc: "Our infrastructure doesn't just record data; it validates every touchpoint, verifying high-performance tracking, eliminating click fraud, ensuring only genuine sales count.", span: "md:col-span-2" },
  { icon: Zap, title: "Zero Latency", desc: "Sub-millisecond data attribution so your conversions reflect real-time results — no lag, no lost data.", span: "" },
  { icon: Globe, title: "Elite Global Network", desc: "Access a curated pool of elite creators, media buyers, and closers across every continent and niche.", span: "" },
  { icon: ShieldCheck, title: "Immutable Transparency", desc: "Smart contracts, every lead, every commission — fully auditable. High-performance ledger. Total visibility on your payouts.", span: "md:col-span-2" },
  { icon: Network, title: "Smart Routing", desc: "AI-powered offer matching connects affiliates to the products they'll convert best.", span: "" },
  { icon: Clock, title: "Instant Settlements", desc: "Get paid the moment a conversion is verified. No waiting periods, no minimum thresholds.", span: "" },
];

function FeatureCard({ f, delay }: { f: typeof features[0]; delay: number }) {
  const ref = useScrollReveal({ delay });
  return (
    <div
      ref={ref}
      className={`group glass glow-border rounded-2xl p-6 transition-all duration-300 glow-border-hover hover:-translate-y-1 ${f.span}`}
    >
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/20">
          <f.icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={22} />
        </div>
        <div>
          <h3 className="font-heading text-base font-semibold text-foreground mb-1.5">{f.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function InfrastructureSection() {
  const headerRef = useScrollReveal();
  return (
    <section id="infrastructure" className="relative py-24 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[160px] pointer-events-none" />
      <div className="relative mx-auto max-w-5xl">
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">Performance Infrastructure</p>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-heading">Proprietary Tracking &amp; Settlement</p>
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
