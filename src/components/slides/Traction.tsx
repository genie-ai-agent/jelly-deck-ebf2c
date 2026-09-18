import SlideShell from '@/components/SlideShell';

const stats = [
  { v: '35K', k: 'Accounts' },
  { v: '3K', k: 'Wallets' },
  { v: '2K', k: 'Monthly actives' },
  { v: '1.5M', k: 'Shadow accounts' },
];

export default function Traction() {
  return (
    <SlideShell eyebrow="07 · Traction">
      <h1 className="hero-type text-[clamp(2rem,6.4vw,4.2rem)]">
        Live app, real wallets,
        <br />
        real money moving.
      </h1>
      <div className="mt-11 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="border-t border-white/15 pt-4">
            <p className="hero-type text-[clamp(2.2rem,6vw,3.6rem)] text-peri">{s.v}</p>
            <p className="eyebrow mt-2">{s.k}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-[56ch] text-[clamp(0.98rem,2.1vw,1.15rem)] leading-relaxed text-ink-dim">
        Jelly is shipped and in the App Store, with wallets attached to real
        humans. The next two years are about taking monthly actives from
        thousands to a million.
      </p>
      <p className="mt-6 text-xs tracking-[0.14em] uppercase text-ink-dim/70">
        Figures last confirmed Aug 2026 — [update with current numbers]
      </p>
    </SlideShell>
  );
}
