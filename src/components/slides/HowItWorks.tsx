import SlideShell from '@/components/SlideShell';

const steps = [
  { n: '1', t: 'Post a jelly', d: 'Fifteen seconds, off the cuff.', accent: 'text-peri' },
  { n: '2', t: 'Your people see it', d: 'Real friends. No algorithm.', accent: 'text-violet' },
  { n: '3', t: 'They send Wobbles', d: 'Support with value attached.', accent: 'text-wob-cyan' },
];

export default function HowItWorks() {
  return (
    <SlideShell eyebrow="04 · How it works" wide>
      <h1 className="hero-type text-[clamp(2.2rem,min(8vw,9.5vh),4.8rem)]">
        Post a moment.
        <br />
        Get paid for being human.
      </h1>
      <ol className="mt-[clamp(1.6rem,4.5vh,3rem)] grid gap-x-10 gap-y-5 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="border-t border-white/15 pt-4">
            <span className={`eyebrow ${s.accent}`}>Step {s.n}</span>
            <h2 className="mt-2 font-display text-[clamp(1.1rem,min(2.6vw,2.8vh),1.5rem)] font-bold leading-tight tracking-tight text-ink">
              {s.t}
            </h2>
            <p className="mt-1.5 text-[clamp(0.92rem,2vh,1.05rem)] leading-snug text-ink-dim">
              {s.d}
            </p>
          </li>
        ))}
      </ol>
    </SlideShell>
  );
}
