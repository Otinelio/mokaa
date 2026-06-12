import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Rooms } from "@/components/home/Rooms";
import { KitchenPreview } from "@/components/home/KitchenPreview";
import { Facilities } from "@/components/home/Facilities";
import { Events } from "@/components/home/Events";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Rooms />
        <KitchenPreview />
        <Facilities />
        <Events />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
