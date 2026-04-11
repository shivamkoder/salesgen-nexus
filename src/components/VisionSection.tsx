export default function VisionSection() {
  return (
    <section id="vision" className="relative py-28 px-6">
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="glass-strong glow-border rounded-3xl p-10 md:p-16">
          <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold italic leading-snug text-gradient">
            "Building the infrastructure for the sovereign sales professional."
          </blockquote>
          <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Our vision extends beyond lead generation. We are creating a global top-tier,
            high-performance talent can thrive independently of traditional corporate
            constraints, powered by seamless tracking and instant commission settlement.
          </p>
        </div>
      </div>
    </section>
  );
}
