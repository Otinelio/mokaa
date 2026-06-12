import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { D as Delete } from "../_libs/lucide-react.mjs";
function PinPad({ correctPin, onSuccess, title }) {
  const [pin, setPin] = reactExports.useState("");
  const [error, setError] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (pin.length === 4) {
      if (pin === correctPin) onSuccess();
      else {
        setError(true);
        setTimeout(() => {
          setPin("");
          setError(false);
        }, 600);
      }
    }
  }, [pin, correctPin, onSuccess]);
  const press = (n) => pin.length < 4 && setPin(pin + n);
  const back = () => setPin(pin.slice(0, -1));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-teal px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory rounded-3xl p-10 max-w-sm w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-saffron tracking-[0.3em] uppercase text-xs text-center mb-2", children: "Hotel Mokaa" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-center mb-8", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex justify-center gap-3 mb-8 ${error ? "animate-pulse" : ""}`, children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-4 h-4 rounded-full transition-colors ${error ? "bg-destructive" : pin.length > i ? "bg-saffron" : "bg-cream border border-border"}` }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => press(n), className: "bg-cream hover:bg-gold/30 transition-colors aspect-square rounded-2xl font-display text-2xl", children: n }, n)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => press("0"), className: "bg-cream hover:bg-gold/30 transition-colors aspect-square rounded-2xl font-display text-2xl", children: "0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: back, className: "bg-cream hover:bg-gold/30 aspect-square rounded-2xl flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Delete, { size: 20 }) })
    ] })
  ] }) });
}
export {
  PinPad as P
};
