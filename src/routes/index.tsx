import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import VisionSection from "@/components/VisionSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "SalesGen — The Future of Affiliate Performance" },
      {
        name: "description",
        content:
          "SalesGen is a global pure commission-based sales and affiliate network platform with a 5% platform fee. Redefining affiliate performance.",
      },
      { property: "og:title", content: "SalesGen — The Future of Affiliate Performance" },
      {
        property: "og:description",
        content:
          "Pure commission. Zero risk. 5% platform fee. Join the next-gen affiliate ecosystem.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <MissionSection />
      <InfrastructureSection />
      <VisionSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
