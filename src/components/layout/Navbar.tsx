import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Restaurant" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-warm shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-saffron flex items-center justify-center text-ivory font-regal text-lg">M</div>
          <div className="leading-tight">
            <div className={`font-display text-lg ${scrolled ? "text-foreground" : "text-ivory"}`}>Mokaa</div>
            <div className={`font-accent text-[10px] tracking-widest uppercase ${scrolled ? "text-muted-foreground" : "text-ivory/80"}`}>Residence &amp; Kitchen</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-accent tracking-wide transition-colors ${
                scrolled ? "text-foreground hover:text-saffron" : "text-ivory hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#contact"
            className={`text-sm font-accent tracking-wide ${scrolled ? "text-foreground hover:text-saffron" : "text-ivory hover:text-cream"}`}
          >Contact</a>
          <a
            href="#rooms"
            className="bg-saffron hover:bg-terracotta text-ivory px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-colors"
          >Book Now</a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden ${scrolled ? "text-foreground" : "text-ivory"}`}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass-warm border-t border-border mt-3 py-4 px-6 space-y-3">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block text-foreground" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-foreground">Contact</a>
          <a href="#rooms" onClick={() => setOpen(false)} className="block bg-saffron text-ivory px-4 py-2 rounded-full text-center">Book Now</a>
        </div>
      )}
    </header>
  );
}
