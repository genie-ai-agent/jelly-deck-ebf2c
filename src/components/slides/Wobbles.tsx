import SlideShell from '@/components/SlideShell';
import { BRAND } from '@/data/deck';

const facts = [
  { k: 'Built on', v: 'Solana' },
  { k: 'Settles in', v: 'Seconds' },
  { k: 'Costs', v: 'Fractions of a cent' },
  { k: 'Works', v: 'Anywhere on earth' },
];

export default function Wobbles() {
  return (
    <SlideShell eyebrow="05 · The currency">
      <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <div>
          <img
            src={BRAND.wobblesWordmark}
            alt="Wobbles"
            className="mb-6 h-[clamp(46px,11vw,84px)] w-auto"
          />
          <h1 className="hero-type text-[clamp(1.9rem,5.4vw,3.4rem)]">
            Jelly Jelly has its own
            <br />
            <span className="text-wob-cyan">currency.</span>
          </h1>
          <p className="mt-6 max-w-[50ch] text-[clamp(1rem,2.2vw,1.22rem)] leading-relaxed text-ink-dim">
            Wobbles are how people encourage, support and pay each other inside
            Jelly. Built on top of Solana, so a wobble sent from Dakar lands in
            Brooklyn in about a second for basically nothing.
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-white/12 pt-3">
                <dt className="eyebrow">{f.k}</dt>
                <dd className="mt-1 font-display text-lg font-bold tracking-tight text-ink">
                  {f.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative mx-auto flex w-full max-w-[340px] items-center justify-center">
          <span className="pulse-ring absolute h-[62%] w-[62%] rounded-full border border-wob-sky/50" />
          <span className="absolute h-[70%] w-[70%] rounded-full bg-wob-blue/25 blur-3xl" />
          <img
            src={BRAND.wobblesCollectible}
            alt="Wobbles collectible character holding a phone"
            className="wobbling relative w-full drop-shadow-[0_30px_60px_rgba(0,148,211,0.35)]"
          />
        </div>
      </div>
    </SlideShell>
  );
}
