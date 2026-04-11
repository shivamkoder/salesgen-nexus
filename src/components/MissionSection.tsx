import { Target, TrendingUp, Users } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  {
    icon: Target,
    title: "Pure Commission",
    desc: "We operate on a purely commission-based model. We only win when you do. No upfront fees — just a 5% platform fee.",
    metric: "5%",
    metricLabel: "Platform Fee",
  },
  {
    icon: TrendingUp,
    title: "100% Performance",
    desc: "This aligns our global network of experts perfectly with your bottom line. Every dollar earned is tracked and verified.",
    metric: "100%",
    metricLabel: "Performance Aligned",
  },
  {
    icon: Users,
    title: "Curated Talent",
    desc: "Only the best performers join our ecosystem. Rigorous vetting ensures high-quality representation of your brand.",
    metric: "Elite",
    metricLabel: "Vetted Network",
  },
];

function StatCard({ item, delay }: { item: typeof stats[0]; delay: number }) {
  const ref = useScrollReveal({ delay });
  return (
    <div
      ref={ref}
      className="gradient-border-card group glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_oklch(0.78_0.08_260_/_15%)]">
          <item.icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={22} />
        </div>
        <h3 className="font-heading text-lg font-semibold text-foreground">{item.title}</h3>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
      <div className="border-t border-border/50 pt-4 flex items-baseline gap-2">
        <span className="font-heading text-2xl font-bold text-gradient-accent">{item.metric}</span>
        <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.metricLabel}</span>
      </div>
    </div>
  );
}

export default function MissionSection() {
  const headerRef = useScrollReveal();
  return (
    <section id="mission" className="relative py-28 px-6">
      {/* Dot grid bg */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-20" />

      <div className="relative mx-auto max-w-5xl">
        <div ref={headerRef}>
          <p className="text-xs uppercase tracking-[0.35em] text-primary font-heading mb-4">Our Mission</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] max-w-4xl">
            <span className="text-gradient">We are orchestrating a shift from quantity to</span>{" "}
            <span className="text-gradient-accent">Performance Precision.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
            The industry is broken. Fake traffic, inflated conversion counts, and low-quality
            affiliate opportunists flood every network. SalesGen eliminates this friction.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, i) => (
            <StatCard key={item.title} item={item} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
