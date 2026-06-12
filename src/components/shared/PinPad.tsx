import { useEffect, useState } from "react";
import { Delete } from "lucide-react";

export function PinPad({ correctPin, onSuccess, title }: { correctPin: string; onSuccess: () => void; title: string }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === correctPin) onSuccess();
      else {
        setError(true);
        setTimeout(() => { setPin(""); setError(false); }, 600);
      }
    }
  }, [pin, correctPin, onSuccess]);

  const press = (n: string) => pin.length < 4 && setPin(pin + n);
  const back = () => setPin(pin.slice(0, -1));

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal px-6">
      <div className="bg-ivory rounded-3xl p-10 max-w-sm w-full">
        <p className="font-accent text-saffron tracking-[0.3em] uppercase text-xs text-center mb-2">Hotel Mokaa</p>
        <h2 className="font-display text-3xl text-center mb-8">{title}</h2>

        <div className={`flex justify-center gap-3 mb-8 ${error ? "animate-pulse" : ""}`}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className={`w-4 h-4 rounded-full transition-colors ${
              error ? "bg-destructive" : pin.length > i ? "bg-saffron" : "bg-cream border border-border"
            }`} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {["1","2","3","4","5","6","7","8","9"].map((n) => (
            <button key={n} onClick={() => press(n)} className="bg-cream hover:bg-gold/30 transition-colors aspect-square rounded-2xl font-display text-2xl">{n}</button>
          ))}
          <div />
          <button onClick={() => press("0")} className="bg-cream hover:bg-gold/30 transition-colors aspect-square rounded-2xl font-display text-2xl">0</button>
          <button onClick={back} className="bg-cream hover:bg-gold/30 aspect-square rounded-2xl flex items-center justify-center"><Delete size={20} /></button>
        </div>
      </div>
    </div>
  );
}
