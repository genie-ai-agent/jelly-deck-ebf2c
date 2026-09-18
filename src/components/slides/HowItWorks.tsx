import SlideShell from '@/components/SlideShell';

const steps = [
  {
    n: '1',
    t: 'Post a jelly',
    d: 'Fifteen seconds, off the cuff. A thought, a place, a face, a vision. No editing, no thumbnail, no strategy.',
    accent: 'text-peri',
    ring: 'border-peri/40',
  },
  {
    n: '2',
    t: 'The people who know you see it',
    d: 'Your friends and the people who chose to follow you. Real accounts, real humans, no slop in the middle.',
    accent: 'text-violet',
    ring: 'border-violet/40',
  },
  {
    n: '3',
    t: 'They send you Wobbles',
    d: 'Encouragement with value attached. One tap, from anywhere on earth, settled in seconds.',
    accent: 'text-wob-cyan',
    ring: 'border-wob-cyan/40',
  },
];

export default function HowItWorks() {
  return (
    <SlideShell eyebrow="04 · How it works" wide>
      <h1 className="hero-type text-[clamp(2.2rem,7vw,4.6rem)]">
        Post a moment.
        <br />
        Get paid for being human.
      </h1>
      <ol className="mt-11 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="glass relative rounded-jelly p-6 pt-7">
            <span
              className={`absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full border bg-void font-display text-lg font-extrabold ${s.ring} ${s.accent}`}
            >
              {s.n}
            </span>
            <h2 className="mt-3 font-display text-[1.3rem] font-bold leading-tight tracking-tight text-ink">
              {s.t}
            </h2>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-dim">{s.d}</p>
          </li>
        ))}
      </ol>
      <p className="mt-10 font-display text-[clamp(1.05rem,2.4vw,1.5rem)] font-bold tracking-tight text-ink">
        People feel supported. People feel free from filters and AI slop.
      </p>
    </SlideShell>
  );
}
