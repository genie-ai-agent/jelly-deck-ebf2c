import SlideShell from '@/components/SlideShell';

export default function WhatYouWant() {
  return (
    <SlideShell eyebrow="02 · What you want">
      <h1 className="hero-type text-[clamp(2.3rem,min(9vw,11vh),5.8rem)]">
        All you want is
        <br />
        your <span className="text-gold">real friends.</span>
      </h1>
      <p className="mt-[clamp(1.4rem,4vh,2.4rem)] max-w-[32ch] text-[clamp(1.05rem,min(2.8vw,3vh),1.6rem)] leading-snug text-ink">
        The people you love to follow. Doing real things. Right now.
      </p>
      <div className="mt-[clamp(1.6rem,4.5vh,2.8rem)] flex flex-wrap gap-2.5">
        {['unfiltered', 'unedited', 'unmistakably human'].map((w) => (
          <span
            key={w}
            className="glass rounded-full px-4 py-2 font-display text-[0.85rem] font-semibold tracking-tight text-ink"
          >
            {w}
          </span>
        ))}
      </div>
    </SlideShell>
  );
}
