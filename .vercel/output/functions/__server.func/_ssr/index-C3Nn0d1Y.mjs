import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { N as Navbar, F as Footer, a as FloatingWhatsApp, w as waLink, r as roomInquiryMessage, v as venueInquiryMessage, H as HOTEL_PHONE_DISPLAY, b as HOTEL_EMAIL, t as tableReservationMessage } from "./FloatingWhatsApp-BJ57mQYL.mjs";
import { R as ROOM_TYPES } from "./menu-data-BhdRbdrR.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion, u as useInView, a as useMotionValue, b as useTransform, c as animate } from "../_libs/framer-motion.mjs";
import { C as ChevronDown, P as Plane, f as Building, U as Utensils, g as Users, W as Wifi, A as AirVent, h as TvMinimal, i as Bath, M as MessageCircle, j as Waves, k as Trees, l as Car, m as Building2, n as Presentation, o as Shield, p as Shirt, q as Coffee, Q as Quote, r as Star, s as MapPin, t as Phone, u as Mail, v as Clock } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const heroImg = "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-cover bg-center",
        style: { backgroundImage: `url(${heroImg})` }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 texture-grain opacity-40" }),
    Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "gold-dust",
        style: {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 6}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-center px-6 max-w-4xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "font-accent text-gold tracking-[0.3em] uppercase text-xs md:text-sm mb-6",
          children: "Lomé · Togo · 3 Stars"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.2, delay: 0.3 },
          className: "font-display text-ivory text-5xl md:text-7xl lg:text-8xl leading-none mb-6",
          children: [
            "Welcome to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "Mokaa" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay: 0.9 },
          className: "font-display text-ivory/90 text-xl md:text-2xl italic mb-10 max-w-2xl mx-auto",
          children: "Where Indian flavors meet African warmth."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 1.4 },
          className: "flex flex-col sm:flex-row gap-4 justify-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#rooms",
                className: "bg-saffron hover:bg-terracotta text-ivory px-8 py-4 rounded-full font-accent tracking-wider uppercase text-sm transition-all",
                children: "Book a Room"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#kitchen",
                className: "border border-gold text-gold hover:bg-gold hover:text-foreground px-8 py-4 rounded-full font-accent tracking-wider uppercase text-sm transition-all",
                children: "Explore the Kitchen"
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { y: [0, 10, 0] },
        transition: { repeat: Infinity, duration: 2 },
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 28 })
      }
    )
  ] });
}
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  reactExports.useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: "easeOut" });
  }, [inView, to, mv]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "font-display text-5xl md:text-6xl text-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { children: rounded }),
    suffix
  ] });
}
const stats = [
  { icon: Plane, value: 1, suffix: " km", label: "From the Airport" },
  { icon: Building, value: 16, suffix: "", label: "Accommodations" },
  { icon: Utensils, value: 3, suffix: "", label: "Cuisine Styles" },
  { icon: Users, value: 200, suffix: "", label: "Rooftop Capacity" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 gradient-saffron overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 texture-grain opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-10 text-center", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-ivory", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "mx-auto mb-4 text-gold", size: 28 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent tracking-widest uppercase text-xs mt-3 text-ivory/85", children: s.label }),
      i < stats.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block" })
    ] }, s.label)) }) })
  ] });
}
const amenities = [Wifi, AirVent, TvMinimal, Bath];
function Rooms() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "rooms", className: "py-24 px-6 bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3", children: "Accommodations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-6xl text-foreground mb-4", children: "Rooms & Suites" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Sixteen thoughtfully appointed accommodations. Every stay includes pool access, daily housekeeping, free WiFi, two complimentary water bottles per day, and breakfast options." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: ROOM_TYPES.map((room, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6, delay: i * 0.08 },
        className: "room-card-hover bg-card rounded-2xl overflow-hidden border border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: room.image, alt: room.name, className: "w-full h-full object-cover", loading: "lazy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 bg-cream/95 px-4 py-1.5 rounded-full text-xs font-accent tracking-wider text-teal", children: [
              "From ",
              room.price,
              "/night"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-foreground mb-2", children: room.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5 leading-relaxed", children: room.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4 mb-6 text-muted-foreground", children: amenities.map((Ic, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Ic, { size: 18, className: "text-gold" }, idx)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: waLink(roomInquiryMessage(room.name)),
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 text-saffron font-accent tracking-wide text-sm hover:text-terracotta transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }),
                  " Inquire via WhatsApp"
                ]
              }
            )
          ] })
        ]
      },
      room.id
    )) })
  ] }) });
}
const foodImages = [
  "photo-1565557623262-b51c2513a641",
  "photo-1563379091339-03b21ab4a4f8",
  "photo-1599487488170-d11ec9c172f0",
  "photo-1631452180519-c014fe946bc7",
  "photo-1610057099443-fde8c4d50f91",
  "photo-1633945274405-b6c8069047b0"
];
function KitchenPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "kitchen", className: "py-24 px-6 bg-terracotta text-ivory relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 texture-grain opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid lg:grid-cols-2 gap-14 items-center relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3", children: foodImages.map((id, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.08 },
          src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=80`,
          alt: "",
          className: `w-full ${i % 2 === 0 ? "h-44" : "h-32"} object-cover rounded-xl`,
          loading: "lazy"
        },
        id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-gold tracking-[0.3em] uppercase text-xs mb-3", children: "Kanchan's Kitchen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl md:text-5xl mb-6 leading-tight", children: [
          "Authentic Indian Cuisine in the heart of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-gold", children: "Lomé" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/85 mb-4 leading-relaxed", children: "From slow-roasted tandoori and fragrant biryanis to delicate paneer, garlic naan and silken dals — every dish is built on Kanchan's family recipes and the finest local produce." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-ivory/85 mb-8 leading-relaxed", children: [
          "Our menu also features European classics and Togolese specialties: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Akumé" }),
          ", ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Adémè" }),
          " and ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "Djinkouné" }),
          ". Open to the public for breakfast, lunch and dinner."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/menu",
              className: "bg-ivory text-terracotta hover:bg-cream px-7 py-3.5 rounded-full font-accent tracking-wider uppercase text-sm transition-colors",
              children: "Explore Full Menu"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: waLink(tableReservationMessage({ name: "", phone: "", date: "", time: "", guests: "", notes: "" })),
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 border border-gold text-gold hover:bg-gold hover:text-foreground px-7 py-3.5 rounded-full font-accent tracking-wider uppercase text-sm transition-colors",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }),
                " Reserve a Table"
              ]
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const facilities = [
  { icon: Waves, label: "Outdoor Pool" },
  { icon: Trees, label: "Garden & Terrace" },
  { icon: Wifi, label: "WiFi 100+ Mbps" },
  { icon: Car, label: "Free Valet Parking" },
  { icon: Users, label: "Multilingual Staff" },
  { icon: Building2, label: "Rooftop · 200 pax" },
  { icon: Presentation, label: "Conference · 50 pax" },
  { icon: Utensils, label: "Restaurant & Bar" },
  { icon: Shield, label: "24-Hour Front Desk" },
  { icon: Shirt, label: "Daily Housekeeping" },
  { icon: Coffee, label: "Breakfast Included" },
  { icon: Plane, label: "1 km from Airport" }
];
function Facilities() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3", children: "Amenities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Facilities & Services" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 md:grid-cols-6 gap-6", children: facilities.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.05 },
        className: "bg-ivory rounded-xl p-5 text-center border border-border hover:border-gold transition-colors",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "mx-auto mb-3 text-saffron", size: 28 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-accent tracking-wide text-foreground leading-tight", children: f.label })
        ]
      },
      f.label
    )) })
  ] }) });
}
const venues = [
  {
    icon: Building2,
    name: "Rooftop Terrace",
    capacity: "Up to 200 guests",
    desc: "Open-air panoramic views of Lomé. Ideal for weddings, corporate events, private receptions and DJ nights.",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80"
  },
  {
    icon: Presentation,
    name: "Conference Room",
    capacity: "Up to 50 guests",
    desc: "Equipped with AV technology for meetings, seminars, presentations and corporate training.",
    image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=900&q=80"
  }
];
function Events() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3", children: "Events & Venues" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "Host with us" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8", children: venues.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-card rounded-2xl overflow-hidden border border-border room-card-hover", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-56 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: v.image, alt: v.name, loading: "lazy", className: "w-full h-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(v.icon, { className: "text-gold", size: 22 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: v.name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs tracking-widest uppercase text-saffron mb-3", children: v.capacity }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-5", children: v.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: waLink(venueInquiryMessage(v.name)),
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-saffron font-accent text-sm hover:text-terracotta",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 16 }),
              " Request a Quote via WhatsApp"
            ]
          }
        )
      ] })
    ] }, v.name)) })
  ] }) });
}
const reviews = [
  { name: "Amélie D.", origin: "Paris, France", stars: 5, text: "An absolute hidden gem in Lomé. The biryani is the best I have had outside India and the rooftop sunset was magical." },
  { name: "Rajesh K.", origin: "Mumbai, India", stars: 5, text: "Felt like home. Kanchan's kitchen is authentic — the dal tadka and naan transported me back to my grandmother's kitchen." },
  { name: "Kwame A.", origin: "Accra, Ghana", stars: 5, text: "Stayed for a week on business. Staff are warm and multilingual, rooms are spotless and the pool is a true oasis." }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 px-6 bg-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3", children: "Guest Words" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-foreground", children: "What our guests say" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory rounded-2xl p-7 border border-border relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "text-gold mb-4", size: 32 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground italic font-display text-lg leading-relaxed mb-6", children: r.text }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-3", children: Array.from({ length: r.stars }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-gold text-gold" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-sm text-foreground", children: r.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground tracking-wide", children: r.origin })
    ] }, r.name)) })
  ] }) });
}
function isOpenNow() {
  const h = (/* @__PURE__ */ new Date()).getHours() + (/* @__PURE__ */ new Date()).getMinutes() / 60;
  const inRange = (a, b) => h >= a && h < b;
  return inRange(6.5, 10.5) || inRange(12, 15) || inRange(19, 22.5);
}
function Contact() {
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const tick = () => setOpen(isOpenNow());
    tick();
    const id = setInterval(tick, 3e4);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-24 px-6 bg-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-saffron tracking-[0.3em] uppercase text-xs mb-3", children: "Find Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl mb-6", children: "Contact & Location" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2.5 h-2.5 rounded-full ${open ? "bg-green-500" : "bg-red-500"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-sm tracking-wide", children: open ? "Open Now" : "Currently Closed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-5 text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "text-gold mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-sm tracking-wide", children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: "Lomé, Togo — 1 km from Lomé-Tokoin International Airport" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "text-gold mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-sm tracking-wide", children: "Phone / WhatsApp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: HOTEL_PHONE_DISPLAY })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "text-gold mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-sm tracking-wide", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: HOTEL_EMAIL })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "text-gold mt-1", size: 20 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-sm tracking-wide", children: "Restaurant Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-muted-foreground text-sm leading-relaxed", children: [
              "Breakfast 6:30 – 10:30",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Lunch 12:00 – 15:00",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Dinner 19:00 – 22:30"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-border min-h-[400px] shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        title: "Mokaa map",
        src: "https://www.google.com/maps?q=6.1774113,1.2475764&hl=en&z=16&output=embed",
        className: "w-full h-full min-h-[400px] border-0",
        loading: "lazy"
      }
    ) })
  ] }) });
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Rooms, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(KitchenPreview, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Facilities, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Events, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {})
  ] });
}
export {
  HomePage as component
};
