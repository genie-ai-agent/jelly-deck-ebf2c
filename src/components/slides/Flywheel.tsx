import SlideShell from '@/components/SlideShell';

const loop = [
  'More real moments',
  'More humans join',
  'More Wobbles move',
  'The currency grows',
];

export default function Flywheel() {
  return (
    <SlideShell eyebrow="06 · The flywheel" wide>
      <h1 className="hero-type text-[clamp(2rem,min(7vw,8.5vh),4.4rem)]">
        As the community grows,
        <br />
        <span className="text-wob-cyan">the currency grows.</span>
      </h1>
      <ol className="mt-[clamp(1.6rem,4.5vh,3rem)] flex flex-wrap items-center gap-x-4 gap-y-3">
        {loop.map((s, i) => (
          <li key={s} className="flex items-center gap-4">
            <span className="font-display text-[clamp(1.05rem,min(2.6vw,2.9vh),1.6rem)] font-bold tracking-tight text-ink">
              {s}
            </span>
            {i < loop.length - 1 && <span className="text-peri">→</span>}
          </li>
        ))}
      </ol>
      <p className="mt-[clamp(1.4rem,4vh,2.6rem)] max-w-[40ch] text-[clamp(1rem,min(2.4vw,2.6vh),1.3rem)] leading-snug text-gold">
        Being yourself pays. So you show up again tomorrow.
      </p>
    </SlideShell>
  );
}
