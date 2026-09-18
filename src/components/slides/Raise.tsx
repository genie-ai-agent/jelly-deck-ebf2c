import SlideShell from '@/components/SlideShell';

export default function Raise() {
  return (
    <SlideShell eyebrow="09 · The raise">
      <p className="eyebrow mb-[clamp(0.6rem,1.8vh,1rem)] text-gold">We are raising</p>
      <h1 className="hero-type text-[clamp(3.6rem,min(16vw,19vh),10rem)] text-ink">$1.5M</h1>
      <p className="mt-[clamp(1.2rem,3.6vh,2.2rem)] max-w-[36ch] text-[clamp(1.05rem,min(2.6vw,2.8vh),1.45rem)] leading-snug text-ink-dim">
        On a standard YC SAFE, to take Jelly from thousands of real humans to the
        default place people share moments and send each other money.
      </p>
      <p className="mt-[clamp(1rem,3vh,1.8rem)] font-display text-[clamp(0.95rem,2.2vh,1.1rem)] font-bold tracking-tight text-ink/70">
        Valuation cap: [your cap]
      </p>
    </SlideShell>
  );
}
