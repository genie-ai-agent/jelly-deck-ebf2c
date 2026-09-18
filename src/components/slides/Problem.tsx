import SlideShell from '@/components/SlideShell';
import Lockup from '@/components/Lockup';

const symptoms = [
  {
    n: '01',
    t: 'Over-optimized',
    d: 'Every post is engineered for reach. Lighting, hooks, retention edits. Nobody is just talking to you anymore.',
  },
  {
    n: '02',
    t: 'Always being sold to',
    d: 'Ads, sponsorships, drops, funnels. Somebody is selling you something all day long.',
  },
  {
    n: '03',
    t: 'AI slop everywhere',
    d: 'Feeds infiltrated with generated video and generated people. There is no way left to decipher what is real.',
  },
];

export default function Problem() {
  return (
    <SlideShell eyebrow="01 · The problem">
      <Lockup className="mb-8 self-start" />
      <h1 className="hero-type text-[clamp(2.9rem,10.5vw,7rem)]">
        Social media
        <br />
        <span className="text-peri">sucks.</span>
      </h1>
      <p className="mt-7 max-w-[46ch] text-[clamp(1.02rem,2.3vw,1.35rem)] leading-relaxed text-ink-dim">
        It stopped being about people. Three things broke it, and they all broke
        at the same time.
      </p>
      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {symptoms.map((s) => (
          <li key={s.n} className="glass rounded-2xl p-5">
            <span className="eyebrow text-peri">{s.n}</span>
            <h2 className="mt-2 font-display text-lg font-bold tracking-tight text-ink">
              {s.t}
            </h2>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-dim">{s.d}</p>
          </li>
        ))}
      </ul>
    </SlideShell>
  );
}
