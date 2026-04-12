import { ArrowRight, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef } from "react";

function useParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
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
        o: Math.random() * 0.5 + 0.15,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());

      // Draw connections
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

      // Draw particles
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

export default function HeroSection() {
  const subRef = useScrollReveal({ threshold: 0.1 });
  const headRef = useScrollReveal({ threshold: 0.1, delay: 150 });
  const textRef = useScrollReveal({ threshold: 0.1, delay: 300 });
  const ctaRef = useScrollReveal({ threshold: 0.1, delay: 450 });
  const canvasRef = useParticleCanvas();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
      {/* Particle constellation canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-30" />

      {/* Huly-style light beam */}
      <div className="light-beam animate-beam-pulse" />

      {/* Radial glow from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-radial-glow pointer-events-none" />

      {/* Animated floating orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[160px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[140px] pointer-events-none animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/3 blur-[200px] pointer-events-none animate-pulse-glow" />

      {/* Horizontal scan line */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan-line" />
      </div>

      {/* Subheading */}
      <p ref={subRef} className="relative z-10 text-xs uppercase tracking-[0.35em] text-muted-foreground mb-8 font-heading">
        A New Performance Ecosystem
      </p>

      {/* Main Headline */}
      <h1 ref={headRef} className="relative z-10 font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center leading-[1.05] tracking-[-0.02em] max-w-5xl">
        <span className="text-gradient">Redefining the</span>
        <br />
        <span className="text-gradient">Future of</span>
        <br />
        <span className="text-gradient-accent">Affiliate Performance.</span>
      </h1>

      {/* Subtext */}
      <p ref={textRef} className="relative z-10 mt-8 max-w-xl text-center text-muted-foreground text-base md:text-lg leading-relaxed">
        We've abandoned the profit-margin models of the past. SalesGen is an ethereal
        performance ecosystem where high-stakes sales talent meets hyper-optimized
        business infrastructure.
      </p>

      {/* CTAs */}
      <div ref={ctaRef} className="relative z-10 mt-12 flex flex-col sm:flex-row items-center gap-4">
        <a
          href="#cta"
          className="btn-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_40px_oklch(0.78_0.08_260_/_35%)]"
        >
          Enter the Lab <ArrowRight size={16} />
        </a>
        <a
          href="#infrastructure"
          className="inline-flex items-center gap-2 rounded-full glass glow-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 glow-border-hover"
        >
          <Eye size={16} /> View Ecosystem
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}