import SlideShell from '@/components/SlideShell';

const loop = [
  { t: 'More real moments', d: 'People post because posting is easy and honest.' },
  { t: 'More humans join', d: 'Real content pulls in the friends who quit the other apps.' },
  { t: 'More Wobbles move', d: 'Every bit of support is a transaction inside the network.' },
  { t: 'The currency grows', d: 'A bigger, busier community makes Wobbles worth more.' },
  { t: 'People earn', d: 'Being yourself pays, so you show up again tomorrow.' },
];

export default function Flywheel() {
  return (
    <SlideShell eyebrow="06 · The flywheel" wide>
      <h1 className="hero-type text-[clamp(2rem,6.4vw,4.2rem)]">
        As the community grows,
        <br />
        <span className="text-wob-cyan">the currency grows.</span>
      </h1>
      <p className="mt-6 max-w-[56ch] text-[clamp(0.98rem,2.1vw,1.18rem)] leading-relaxed text-ink-dim">
        Wobbles is not a bolt-on tipping feature. It is the network’s own money,
        so growth in the community and growth in the currency are the same
        motion.
      </p>
      <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {loop.map((s, i) => (
          <li
            key={s.t}
            className="glass flex flex-col rounded-2xl p-4"
            style={{ borderColor: `rgba(138,169,245,${0.14 + i * 0.09})` }}
          >
            <span className="eyebrow text-peri">Step {i + 1}</span>
            <h2 className="mt-2 font-display text-base font-bold leading-snug tracking-tight text-ink">
              {s.t}
            </h2>
            <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-dim">{s.d}</p>
          </li>
        ))}
      </ol>
      <p className="mt-9 font-display text-[clamp(1rem,2.2vw,1.35rem)] font-bold tracking-tight text-gold">
        Encourage. Support. Pay each other. That is the loop.
      </p>
    </SlideShell>
  );
}
