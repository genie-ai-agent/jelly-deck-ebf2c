import SlideShell from '@/components/SlideShell';
import Lockup from '@/components/Lockup';

const symptoms = [
  'Over-optimized content, engineered for reach',
  'Somebody selling you something all day long',
  'Feeds infiltrated with AI slop',
];

export default function Problem() {
  return (
    <SlideShell eyebrow="01 · The problem">
      <Lockup className="mb-[clamp(1.2rem,3vh,2rem)] self-start" />
      <h1 className="hero-type text-[clamp(2.7rem,min(11vw,13vh),7rem)]">
        Social media
        <br />
        <span className="text-peri">sucks.</span>
      </h1>
      <ul className="mt-[clamp(1.4rem,4vh,2.6rem)] max-w-[34ch] space-y-0">
        {symptoms.map((s) => (
          <li
            key={s}
            className="border-t border-white/12 py-[clamp(0.55rem,1.5vh,0.9rem)] text-[clamp(1rem,min(2.4vw,2.6vh),1.35rem)] leading-snug text-ink-dim"
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="mt-[clamp(1.2rem,3.4vh,2rem)] font-display text-[clamp(1.05rem,min(2.8vw,3vh),1.6rem)] font-bold tracking-tight text-ink">
        You can’t tell what’s real anymore.
      </p>
    </SlideShell>
  );
}
