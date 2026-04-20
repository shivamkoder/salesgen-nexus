import { createFileRoute } from "@tanstack/react-router";
import { Zap, Shield, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About SalesGen — Performance Affiliate Infrastructure" },
      { name: "description", content: "Learn about SalesGen's mission to build the next generation of performance-driven affiliate sales infrastructure." },
      { property: "og:title", content: "About SalesGen — Performance Affiliate Infrastructure" },
      { property: "og:description", content: "Learn about SalesGen's mission to build the next generation of performance-driven affiliate sales infrastructure." },
    ],
  }),
});

const values = [
  {
    icon: Zap,
    title: "Performance",
    desc: "Every dollar tied to outcome. No retainers, no fluff — only results that move the needle.",
  },
  {
    icon: Shield,
    title: "Transparency",
    desc: "Real-time tracking, open commission splits, and audit-ready ledgers for every transaction.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "A borderless network of affiliates and operators executing across every major market.",
  },
];

const stats = [
  { value: "12K+", label: "Active Affiliates" },
  { value: "47", label: "Countries" },
  { value: "$84M", label: "Commission Paid" },
  { value: "5%", label: "Platform Fee" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <CursorGlow />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-dot-grid">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            About Us
          </span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-[-0.03em] text-gradient mb-6">
            Building the future of <br />
            <span className="text-gradient-accent">performance sales</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SalesGen is the operating layer for global affiliate commerce — connecting elite operators with brands that pay for outcomes, not impressions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-8 text-gradient">
            Our Story
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              SalesGen was born from a simple observation: the affiliate economy is the most efficient sales channel ever built — yet it runs on infrastructure designed for a different era.
            </p>
            <p>
              We set out to rebuild that foundation. A platform where commission is settled in seconds, not months. Where attribution is provable, not promised. Where the best operators in the world can plug into the best brands without intermediaries skimming the spread.
            </p>
            <p>
              Today, SalesGen powers millions in monthly performance revenue across SaaS, fintech, e-commerce, and B2B — and we're just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-gradient">
              Mission & Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that shape every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="glass glow-border glow-border-hover rounded-2xl p-8 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center border border-primary/20 mb-5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 px-6 border-t border-border/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4 text-gradient">
              By the Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="glass rounded-2xl p-8 text-center border border-border/30"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient-accent mb-2">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
