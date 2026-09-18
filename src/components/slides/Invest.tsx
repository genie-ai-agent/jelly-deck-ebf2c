import SlideShell from '@/components/SlideShell';

const paths = [
  {
    n: '01',
    t: 'WeFunder',
    d: 'Invest alongside the community, from any size check.',
    meta: '[wefunder link]',
    accent: 'text-peri',
  },
  {
    n: '02',
    t: 'Straight onto the cap table',
    d: 'Go direct with us, standard YC SAFE, signed the same week.',
    meta: '[your email]',
    accent: 'text-gold',
  },
];

export default function Invest() {
  return (
    <SlideShell eyebrow="11 · Invest" wide>
      <h1 className="hero-type text-[clamp(2.1rem,min(7.5vw,9vh),4.8rem)]">
        Interested in
        <br />
        <span className="text-peri">investing?</span>
      </h1>
      <div className="mt-[clamp(1.6rem,5vh,3rem)] grid gap-x-12 gap-y-6 sm:grid-cols-2">
        {paths.map((p) => (
          <div key={p.n} className="border-t border-white/15 pt-4">
            <span className={`eyebrow ${p.accent}`}>{p.n}</span>
            <h2 className="mt-2 font-display text-[clamp(1.15rem,min(2.8vw,3vh),1.6rem)] font-bold leading-tight tracking-tight text-ink">
              {p.t}
            </h2>
            <p className="mt-2 max-w-[32ch] text-[clamp(0.95rem,2.2vh,1.12rem)] leading-snug text-ink-dim">
              {p.d}
            </p>
            <p className="mt-3 font-display text-[0.9rem] font-semibold tracking-tight text-ink/70">
              {p.meta}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-[clamp(1.4rem,4vh,2.6rem)] font-display text-[clamp(1rem,min(2.4vw,2.6vh),1.3rem)] font-bold tracking-tight text-ink">
        $1.5M · standard YC SAFE.
      </p>
    </SlideShell>
  );
}
