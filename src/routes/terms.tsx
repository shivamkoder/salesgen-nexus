import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms and Conditions — SalesGen" },
      { name: "description", content: "SalesGen Terms and Conditions governing the use of our pure commission-based affiliate and sales performance network." },
      { property: "og:title", content: "Terms and Conditions — SalesGen" },
      { property: "og:description", content: "Read the terms governing SalesGen's affiliate network, commissions, and platform usage." },
    ],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 tracking-tight">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground">Last Updated: April 20, 2026</p>
          </div>

          <article className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                Welcome to <strong className="text-foreground">SalesGen</strong> ("we", "our", or "us"). By accessing or using our platform,
                you agree to be bound by these Terms and Conditions. SalesGen is a pure commission-based
                affiliate and sales performance network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">2. Platform Overview</h2>
              <p>
                SalesGen connects businesses ("Merchants") with affiliates and sales partners.
                Merchants pay commissions only when a verified sale or subscription occurs.
                SalesGen charges a <strong className="text-foreground">5% platform fee</strong> on the affiliate's commission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">3. User Accounts and Roles</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Business/Client:</strong> Companies or individuals posting campaigns and offers.</li>
                <li><strong className="text-foreground">Affiliate:</strong> Individuals or entities promoting campaigns and earning commissions.</li>
                <li><strong className="text-foreground">Admin:</strong> Platform administrators with full oversight.</li>
              </ul>
              <p className="mt-3">
                You must provide accurate information during signup. You are responsible for maintaining
                the confidentiality of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">4. Commission and Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Businesses pay commissions only on verified sales.</li>
                <li>SalesGen deducts a 5% platform fee from the affiliate's earned commission.</li>
                <li>Affiliates receive 95% of the agreed commission.</li>
                <li>Payments are processed after sale verification and cooling period (usually 30 days for refunds).</li>
                <li>We are not responsible for disputes between merchants and affiliates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">5. Prohibited Activities</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Use self-referral or fraudulent methods to generate sales</li>
                <li>Spam, mislead, or use unethical marketing practices</li>
                <li>Violate any laws or intellectual property rights</li>
                <li>Attempt to manipulate tracking or attribution systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">6. Intellectual Property</h2>
              <p>
                All content, logos, and platform features are owned by SalesGen. You may not copy,
                modify, or distribute any part of the platform without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">7. Limitation of Liability</h2>
              <p>
                SalesGen is provided "as is". We are not liable for any indirect, incidental,
                or consequential damages arising from your use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms,
                engage in fraud, or harm the platform's integrity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of India. Any disputes shall be resolved
                in the courts of Delhi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">10. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the platform after
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-3">Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:<br />
                <strong className="text-foreground">support@salesgen.com</strong>
              </p>
            </section>
          </article>

          <div className="mt-16 text-center text-sm text-muted-foreground/70">
            <p>© 2026 SalesGen. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link to="/terms" className="text-foreground">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
