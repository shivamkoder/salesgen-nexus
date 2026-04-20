import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, LifeBuoy, Clock, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact SalesGen — Get in Touch" },
      { name: "description", content: "Reach out to the SalesGen team for partnerships, support, or general inquiries." },
      { property: "og:title", content: "Contact SalesGen — Get in Touch" },
      { property: "og:description", content: "Reach out to the SalesGen team for partnerships, support, or general inquiries." },
    ],
  }),
});

const contactCards = [
  { icon: Mail, label: "General", value: "hello@salesgen.com", href: "mailto:hello@salesgen.com" },
  { icon: LifeBuoy, label: "Support", value: "support@salesgen.com", href: "mailto:support@salesgen.com" },
  { icon: Clock, label: "Hours", value: "Mon–Fri · 9am–6pm UTC" },
  { icon: MapPin, label: "Headquarters", value: "Remote-first · Global" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent — we'll be in touch soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
      setSending(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <CursorGlow />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 bg-dot-grid">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-6">
            Contact
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-[-0.03em] text-gradient mb-6">
            Let's talk
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Questions, partnerships, or press — pick the channel that fits and we'll respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="relative py-12 px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="glass glow-border glow-border-hover rounded-2xl p-6 h-full transition-all duration-300">
                <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center border border-primary/20 mb-4">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {label}
                </div>
                <div className="text-foreground text-sm font-medium break-words">
                  {value}
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>
      </section>

      {/* Form + Socials */}
      <section className="relative py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="glass glow-border rounded-2xl p-8 md:p-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-2 text-foreground">
              Send us a message
            </h2>
            <p className="text-sm text-muted-foreground mb-8">
              We read every message personally.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border/60 h-11"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border/60 h-11"
                />
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="bg-secondary/50 border-border/60 h-11"
              />
              <Textarea
                name="message"
                placeholder="Tell us what's on your mind…"
                value={form.message}
                onChange={handleChange}
                required
                className="bg-secondary/50 border-border/60 min-h-[140px] resize-none"
              />
              <Button
                type="submit"
                disabled={sending}
                className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {sending ? "Sending…" : "Send message"}
              </Button>
            </form>

            <div className="mt-10 pt-8 border-t border-border/30 flex items-center justify-between flex-wrap gap-4">
              <span className="text-sm text-muted-foreground">Follow along</span>
              <div className="flex items-center gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "#" },
                  { icon: Twitter, label: "X / Twitter", href: "#" },
                  { icon: Github, label: "GitHub", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="h-10 w-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-surface-light transition-all"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
