import SlideShell from '@/components/SlideShell';

export default function WhatYouWant() {
  return (
    <SlideShell eyebrow="02 · What you actually want">
      <h1 className="hero-type text-[clamp(2.4rem,8vw,5.5rem)]">
        All you want is to see
        <br />
        your <span className="text-gold">real friends.</span>
      </h1>
      <p className="mt-8 max-w-[40ch] text-[clamp(1.05rem,2.4vw,1.5rem)] leading-snug text-ink">
        The people you love to follow, doing real things, in real life, right
        now.
      </p>
      <p className="mt-5 max-w-[52ch] text-[clamp(0.98rem,2vw,1.15rem)] leading-relaxed text-ink-dim">
        That is the entire ask. It is not a big ask. And there is no app left on
        your phone that does it.
      </p>
      <div className="mt-12 flex flex-wrap gap-3">
        {['unfiltered', 'unedited', 'unoptimized', 'unmistakably human'].map(
          (w) => (
            <span
              key={w}
              className="glass rounded-full px-4 py-2 font-display text-sm font-semibold tracking-tight text-ink"
            >
              {w}
            </span>
          ),
        )}
      </div>
    </SlideShell>
  );
}
