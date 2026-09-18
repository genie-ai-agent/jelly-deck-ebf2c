import SlideShell from '@/components/SlideShell';
import Lockup from '@/components/Lockup';

export default function Solution() {
  return (
    <SlideShell eyebrow="03 · The solution">
      <Lockup size="lg" className="mb-[clamp(1.2rem,3.4vh,2.2rem)] self-start" />
      <h1 className="hero-type text-[clamp(2.5rem,min(10vw,12vh),6.4rem)]">
        Real.
        <br />
        Spontaneous.
        <br />
        <span className="text-violet">Moments.</span>
      </h1>
      <p className="mt-[clamp(1.4rem,4vh,2.4rem)] max-w-[38ch] text-[clamp(1.05rem,min(2.6vw,2.8vh),1.5rem)] leading-snug text-ink-dim">
        A social app built from the ground up for sharing real moments on video,
        with money built in.
      </p>
    </SlideShell>
  );
}
