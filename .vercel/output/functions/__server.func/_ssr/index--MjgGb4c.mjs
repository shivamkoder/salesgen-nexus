import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, M as Menu, b as ArrowRight, a as Eye, T as Target, c as TrendingUp, U as Users, C as ChartColumn, Z as Zap, G as Globe, S as ShieldCheck, N as Network, d as Clock, B as Building2 } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-[0_4px_30px_oklch(0_0_0_/_40%)]" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20 transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-[0_0_16px_oklch(0.78_0.08_260_/_20%)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-sm font-bold text-primary", children: "S" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-lg font-bold tracking-[-0.02em] text-foreground", children: "SALESGEN" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: ["Mission", "Infrastructure", "Vision"].map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `#${label.toLowerCase()}`,
              className: "relative py-1 hover:text-foreground transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
              children: label
            },
            label
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/login",
                className: "inline-flex items-center gap-2 rounded-full border border-border/40 px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-200 hover:bg-surface-light hover:border-primary/30",
                children: "Log in"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#cta",
                className: "btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all",
                children: "Get Started"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "md:hidden text-foreground p-1", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 }) })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden glass-strong px-6 pb-6 flex flex-col gap-4 text-sm text-muted-foreground border-t border-border/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#mission", onClick: () => setOpen(false), className: "py-2 hover:text-foreground transition-colors", children: "Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#infrastructure", onClick: () => setOpen(false), className: "py-2 hover:text-foreground transition-colors", children: "Infrastructure" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#vision", onClick: () => setOpen(false), className: "py-2 hover:text-foreground transition-colors", children: "Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/login", onClick: () => setOpen(false), className: "inline-flex items-center justify-center rounded-full border border-border/40 px-6 py-3 font-medium text-foreground mt-2", children: "Log in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#cta", onClick: () => setOpen(false), className: "inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground", children: "Get Started" })
        ] })
      ]
    }
  );
}
function useScrollReveal(options) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${options?.delay ?? 0}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${options?.delay ?? 0}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: options?.threshold ?? 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options?.threshold, options?.delay]);
  return ref;
}
function useParticleCanvas() {
  const canvasRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId;
    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);
    const particles = [];
    const count = 80;
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.5 + 0.15
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `oklch(0.78 0.08 260 / ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(0.78 0.08 260 / ${p.o})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w()) p.vx *= -1;
        if (p.y < 0 || p.y > h()) p.vy *= -1;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return canvasRef;
}
function HeroSection() {
  const subRef = useScrollReveal({ threshold: 0.1 });
  const headRef = useScrollReveal({ threshold: 0.1, delay: 150 });
  const textRef = useScrollReveal({ threshold: 0.1, delay: 300 });
  const ctaRef = useScrollReveal({ threshold: 0.1, delay: 450 });
  const canvasRef = useParticleCanvas();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "absolute inset-0 w-full h-full pointer-events-none z-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-dot-grid pointer-events-none opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "light-beam animate-beam-pulse" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-radial-glow pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[160px] pointer-events-none animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[140px] pointer-events-none animate-float", style: { animationDelay: "3s" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/3 blur-[200px] pointer-events-none animate-pulse-glow" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none z-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { ref: subRef, className: "relative z-10 text-xs uppercase tracking-[0.35em] text-muted-foreground mb-8 font-heading", children: "A New Performance Ecosystem" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { ref: headRef, className: "relative z-10 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] tracking-[-0.02em] max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Redefining the" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Future of" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "Affiliate Performance." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { ref: textRef, className: "relative z-10 mt-8 max-w-xl text-center text-muted-foreground text-base md:text-lg leading-relaxed", children: "We've abandoned the profit-margin models of the past. SalesGen is an ethereal performance ecosystem where high-stakes sales talent meets hyper-optimized business infrastructure." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: ctaRef, className: "relative z-10 mt-12 flex flex-col sm:flex-row items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#cta",
          className: "btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.78_0.08_260_/_35%)]",
          children: [
            "Enter the Lab ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#infrastructure",
          className: "inline-flex items-center gap-2 rounded-full glass glow-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 glow-border-hover",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 16 }),
            " View Ecosystem"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" })
  ] });
}
const stats = [
  {
    icon: Target,
    title: "Pure Commission",
    desc: "We operate on a purely commission-based model. We only win when you do. No upfront fees — just a 5% platform fee.",
    metric: "5%",
    metricLabel: "Platform Fee"
  },
  {
    icon: TrendingUp,
    title: "100% Performance",
    desc: "This aligns our global network of experts perfectly with your bottom line. Every dollar earned is tracked and verified.",
    metric: "100%",
    metricLabel: "Performance Aligned"
  },
  {
    icon: Users,
    title: "Curated Talent",
    desc: "Only the best performers join our ecosystem. Rigorous vetting ensures high-quality representation of your brand.",
    metric: "Elite",
    metricLabel: "Vetted Network"
  }
];
function StatCard({ item, delay }) {
  const ref = useScrollReveal({ delay });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "gradient-border-card group glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_oklch(0.78_0.08_260_/_15%)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "text-primary transition-transform duration-300 group-hover:scale-110", size: 22 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-lg font-semibold text-foreground", children: item.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6", children: item.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/50 pt-4 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-2xl font-bold text-gradient-accent", children: item.metric }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: item.metricLabel })
        ] })
      ]
    }
  );
}
function MissionSection() {
  const headerRef = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "mission", className: "relative py-28 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-dot-grid pointer-events-none opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: headerRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary font-heading mb-4", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em] max-w-4xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "We are orchestrating a shift from quantity to" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-accent", children: "Performance Precision." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-2xl text-base md:text-lg leading-relaxed", children: "The industry is broken. Fake traffic, inflated conversion counts, and low-quality affiliate opportunists flood every network. SalesGen eliminates this friction." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6", children: stats.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { item, delay: i * 120 }, item.title)) })
    ] })
  ] });
}
const features = [
  { icon: ChartColumn, title: "Seamless Tracking Ecosystem", desc: "Our infrastructure doesn't just record data; it validates every touchpoint, verifying high-performance tracking, eliminating click fraud, ensuring only genuine sales count.", span: "md:col-span-2 md:row-span-2" },
  { icon: Zap, title: "Zero Latency", desc: "Sub-millisecond data attribution so conversions reflect real-time results.", span: "" },
  { icon: Globe, title: "Elite Global Network", desc: "Access a curated pool of elite creators, media buyers, and closers across every continent.", span: "" },
  { icon: ShieldCheck, title: "Immutable Transparency", desc: "Every lead, every commission — fully auditable. High-performance ledger with total visibility.", span: "md:col-span-2" },
  { icon: Network, title: "Smart Routing", desc: "AI-powered offer matching connects affiliates to the products they'll convert best.", span: "" },
  { icon: Clock, title: "Instant Settlements", desc: "Get paid the moment a conversion is verified. No waiting periods, no minimum thresholds.", span: "" }
];
function FeatureCard({ f, delay }) {
  const ref = useScrollReveal({ delay });
  const isLarge = f.span.includes("row-span");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `gradient-border-card group glass rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${f.span}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: isLarge ? "flex flex-col h-full" : "flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_24px_oklch(0.78_0.08_260_/_15%)] ${isLarge ? "mb-5" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "text-primary transition-transform duration-300 group-hover:scale-110", size: 24 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: isLarge ? "flex-1 flex flex-col" : "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-heading text-base font-semibold text-foreground mb-2", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: f.desc }),
          isLarge && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-6 grid grid-cols-3 gap-4", children: [
            { label: "Uptime", value: "99.99%" },
            { label: "Latency", value: "<1ms" },
            { label: "Fraud Block", value: "100%" }
          ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-xl font-bold text-gradient-accent", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: s.label })
          ] }, s.label)) })
        ] })
      ] })
    }
  );
}
function InfrastructureSection() {
  const headerRef = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "infrastructure", className: "relative py-28 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-primary/4 blur-[180px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: headerRef, className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary font-heading mb-3", children: "Performance Infrastructure" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gradient tracking-[-0.02em]", children: "Built for Speed & Truth" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground font-heading", children: "Proprietary Tracking & Settlement" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { f, delay: i * 80 }, f.title)) })
    ] })
  ] });
}
function VisionSection() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "vision", className: "relative py-32 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 blur-[160px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "gradient-border-card glass-strong rounded-3xl p-12 md:p-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-heading text-6xl text-primary/20 leading-none mb-4", children: '"' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic leading-[1.15] tracking-[-0.02em] text-gradient", children: "Building the infrastructure for the sovereign sales professional." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto", children: "Our vision extends beyond lead generation. We are creating a global top-tier, high-performance talent ecosystem — independent of traditional corporate constraints, powered by seamless tracking and instant commission settlement." })
    ] }) })
  ] });
}
function CtaSection() {
  const ref = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "cta", className: "relative py-32 px-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-dot-grid pointer-events-none opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/6 blur-[160px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.35em] text-primary font-heading mb-6", children: "Join the Network" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gradient leading-[1.1] tracking-[-0.02em]", children: [
        "Ready to enter",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "the Lab?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto", children: "Select your path. Whether you're scaling a professional sales operation or deploying products into the world's highest-performance commission marketplace — the future starts here." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/signup/affiliate",
            className: "btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.78_0.08_260_/_35%)]",
            children: [
              "Apply for Scale ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/signup/client",
            className: "inline-flex items-center gap-2 rounded-full glass glow-border px-9 py-4 text-sm font-semibold text-foreground transition-all duration-300 glow-border-hover",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 16 }),
              " Hire for Scale"
            ]
          }
        )
      ] })
    ] })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative border-t border-border/30 py-12 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-xs font-bold text-primary", children: "S" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-sm font-bold tracking-[-0.02em] text-muted-foreground", children: "SALESGEN" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground/60", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " SalesGen. All rights reserved."
      ] })
    ] })
  ] });
}
function CursorGlow() {
  const [pos, setPos] = reactExports.useState({ x: -100, y: -100 });
  reactExports.useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300",
      style: { opacity: pos.x === -100 ? 0 : 1 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -translate-x-1/2 -translate-y-1/2 rounded-full",
          style: {
            left: pos.x,
            top: pos.y,
            width: 600,
            height: 600,
            background: "radial-gradient(circle, oklch(0.78 0.08 260 / 25%) 0%, oklch(0.78 0.08 260 / 10%) 35%, oklch(0.78 0.08 260 / 3%) 60%, transparent 75%)"
          }
        }
      )
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CursorGlow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MissionSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InfrastructureSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VisionSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
