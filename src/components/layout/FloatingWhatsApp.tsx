import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello Hotel Mokaa, I would like to make an inquiry.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-saffron text-ivory p-4 rounded-full shadow-lg animate-pulse-gold hover:bg-terracotta transition-colors"
      aria-label="WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
