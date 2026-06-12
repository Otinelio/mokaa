import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, w as Menu, s as MapPin, t as Phone, u as Mail, F as Facebook, M as MessageCircle } from "../_libs/lucide-react.mjs";
const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Restaurant" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-warm shadow-sm py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full gradient-saffron flex items-center justify-center text-ivory font-regal text-lg", children: "M" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-tight", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display text-lg ${scrolled ? "text-foreground" : "text-ivory"}`, children: "Mokaa" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-accent text-[10px] tracking-widest uppercase ${scrolled ? "text-muted-foreground" : "text-ivory/80"}`, children: "Residence & Kitchen" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: `text-sm font-accent tracking-wide transition-colors ${scrolled ? "text-foreground hover:text-saffron" : "text-ivory hover:text-cream"}`,
                children: l.label
              },
              l.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: `text-sm font-accent tracking-wide ${scrolled ? "text-foreground hover:text-saffron" : "text-ivory hover:text-cream"}`,
                children: "Contact"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#rooms",
                className: "bg-saffron hover:bg-terracotta text-ivory px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors",
                children: "Book Now"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: `md:hidden ${scrolled ? "text-foreground" : "text-ivory"}`,
              "aria-label": "Menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden glass-warm border-t border-border mt-3 py-4 px-6 space-y-3", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "block text-foreground", onClick: () => setOpen(false), children: l.label }, l.to)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", onClick: () => setOpen(false), className: "block text-foreground", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#rooms", onClick: () => setOpen(false), className: "block bg-saffron text-ivory px-4 py-2 rounded-full text-center", children: "Book Now" })
        ] })
      ]
    }
  );
}
const WHATSAPP_NUMBER = "22892255522";
const HOTEL_PHONE_DISPLAY = "+228 92 25 55 22";
const HOTEL_EMAIL = "akanchan0202@gmail.com";
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function roomInquiryMessage(roomType) {
  return `Hello Hotel Mokaa,
I am interested in booking a room.
Room Type: ${roomType}
Check-in: [Leave blank]
Check-out: [Leave blank]
Guests: [Leave blank]
Please confirm availability.`;
}
function venueInquiryMessage(venue) {
  return `Hello Mokaa Residence Events Team,
I would like to inquire about venue rental.
Venue: ${venue}
Event Type: [Leave blank]
Expected Guests: [Leave blank]
Date: [Leave blank]
Please send availability and pricing.`;
}
function tableReservationMessage(d) {
  return `Table Reservation Request - Kanchan's Kitchen
-----------------------------------------------
Name: ${d.name}
Phone: ${d.phone}
Date: ${d.date}
Time: ${d.time}
Guests: ${d.guests}
Special Requests: ${d.notes}
-----------------------------------------------
Please confirm availability.`;
}
function orderWhatsAppMessage(p) {
  const lines = p.items.map((i) => `${i.name} x${i.qty} - ${i.price * i.qty} FCFA`).join("\n");
  return `NEW ORDER - Kanchan's Kitchen
--------------------------------
${lines}
--------------------------------
TOTAL: ${p.total} FCFA
Order Type: ${p.orderType}
Customer: ${p.name}
Phone: ${p.phone}${p.orderType === "Delivery" ? `
Address: ${p.address ?? ""}` : ""}
--------------------------------
Thank you!`;
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-teal text-ivory pt-16 pb-8 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid md:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full gradient-saffron flex items-center justify-center font-regal text-xl", children: "M" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl", children: "Mokaa" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-xs tracking-widest uppercase text-ivory/70", children: "Where Comfort Meets Culture" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/80 text-sm leading-relaxed", children: "A 3-star hotel residence and Indian restaurant in the heart of Lomé, Togo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-accent text-gold tracking-wider uppercase text-sm mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-ivory/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "mt-0.5 text-gold" }),
            " Lomé, Togo — 1 km from Lomé-Tokoin Airport"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-gold" }),
            " ",
            HOTEL_PHONE_DISPLAY
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-gold" }),
            " ",
            HOTEL_EMAIL
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16, className: "text-gold" }),
            " facebook.com/kanchans20052020"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-accent text-gold tracking-wider uppercase text-sm mb-4", children: "Restaurant Hours" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-ivory/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Breakfast — 6:30 to 10:30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Lunch — 12:00 to 15:00" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Dinner — 19:00 to 22:30" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto mt-12 pt-6 border-t border-ivory/20 text-center text-xs text-ivory/60 font-accent tracking-widest uppercase", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Hotel Residence Mokaa & Kanchan's Kitchen"
    ] })
  ] });
}
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: waLink("Hello Hotel Mokaa, I would like to make an inquiry."),
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fixed bottom-6 right-6 z-50 bg-saffron text-ivory p-4 rounded-full shadow-lg animate-pulse-gold hover:bg-terracotta transition-colors",
      "aria-label": "WhatsApp",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 24 })
    }
  );
}
export {
  Footer as F,
  HOTEL_PHONE_DISPLAY as H,
  Navbar as N,
  FloatingWhatsApp as a,
  HOTEL_EMAIL as b,
  orderWhatsAppMessage as o,
  roomInquiryMessage as r,
  tableReservationMessage as t,
  venueInquiryMessage as v,
  waLink as w
};
