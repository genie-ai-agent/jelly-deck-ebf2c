import SlideShell from '@/components/SlideShell';

const stats = [
  { v: '35K', k: 'Accounts' },
  { v: '3K', k: 'Wallets' },
  { v: '2K', k: 'Monthly actives' },
  { v: '1.5M', k: 'Shadow accounts' },
];

export default function Traction() {
  return (
    <SlideShell eyebrow="07 · Traction" wide>
      <h1 className="hero-type text-[clamp(2rem,min(7vw,8.5vh),4.4rem)]">
        Live app, real wallets,
        <br />
        real money moving.
      </h1>
      <div className="mt-[clamp(1.6rem,5vh,3.2rem)] grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="border-t border-white/15 pt-3">
            <p className="hero-type text-[clamp(2rem,min(6vw,7vh),3.6rem)] text-peri">{s.v}</p>
            <p className="eyebrow mt-1.5">{s.k}</p>
          </div>
        ))}
      </div>
      <p className="mt-[clamp(1.3rem,4vh,2.4rem)] text-[0.7rem] uppercase tracking-[0.16em] text-ink-dim/70">
        Aug 2026 · [update with current numbers]
      </p>
    </SlideShell>
  );
}
