import SlideShell from '@/components/SlideShell';
import { BRAND } from '@/data/deck';

export default function Wobbles() {
  return (
    <SlideShell eyebrow="05 · The currency">
      <div className="grid items-center gap-[clamp(1.5rem,4vh,3rem)] md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <img
            src={BRAND.wobblesWordmark}
            alt="Wobbles"
            className="mb-[clamp(1rem,3vh,1.8rem)] h-[clamp(38px,min(9vw,9vh),72px)] w-auto"
          />
          <h1 className="hero-type text-[clamp(1.9rem,min(6vw,7.5vh),3.6rem)]">
            Jelly has its own
            <br />
            <span className="text-wob-cyan">currency.</span>
          </h1>
          <p className="mt-[clamp(1.1rem,3vh,1.8rem)] max-w-[36ch] text-[clamp(1rem,min(2.4vw,2.6vh),1.3rem)] leading-snug text-ink-dim">
            Wobbles, built on Solana. How people encourage, support and pay each
            other.
          </p>
          <p className="mt-[clamp(1.1rem,3vh,1.8rem)] flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-[clamp(0.9rem,2.2vh,1.05rem)] font-bold tracking-tight text-ink">
            <span>Solana</span>
            <span className="text-ink-dim">·</span>
            <span>settles in seconds</span>
            <span className="text-ink-dim">·</span>
            <span>fractions of a cent</span>
            <span className="text-ink-dim">·</span>
            <span>anywhere on earth</span>
          </p>
        </div>
        <div className="relative mx-auto flex w-full max-w-[min(300px,34vh)] items-center justify-center">
          <span className="pulse-ring absolute h-[62%] w-[62%] rounded-full border border-wob-sky/50" />
          <span className="absolute h-[70%] w-[70%] rounded-full bg-wob-blue/25 blur-3xl" />
          <img
            src={BRAND.wobblesCollectible}
            alt="Wobbles character"
            className="wobbling relative w-full drop-shadow-[0_30px_60px_rgba(0,148,211,0.35)]"
          />
        </div>
      </div>
    </SlideShell>
  );
}
