import { Target, TrendingUp, Users } from "lucide-react";

export default function MissionSection() {
  return (
    <section id="mission" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-heading mb-4">
          Our Mission
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
          <span className="text-gradient">We are orchestrating a shift from quantity to</span>{" "}
          <span className="text-gradient-accent">Performance Precision.</span>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed">
          The industry is broken. Fake traffic, inflated conversion counts, and low-quality
          affiliate opportunists flood every network. SalesGen eliminates this friction.
        </p>

        {/* Stats / highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Pure Commission",
              desc: "We operate on a purely commission-based model. We only win when you do. No upfront fees — just a 5% platform fee.",
            },
            {
              icon: TrendingUp,
              title: "100% Performance",
              desc: "This aligns our global network of experts perfectly with your bottom line. Every dollar earned is tracked and verified.",
            },
            {
              icon: Users,
              title: "Curated Talent",
              desc: "Only the best performers join our ecosystem. Rigorous vetting ensures high-quality representation of your brand.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass glow-border rounded-2xl p-6 transition-all duration-300 glow-border-hover hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
