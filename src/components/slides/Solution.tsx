import SlideShell from '@/components/SlideShell';
import Lockup from '@/components/Lockup';

export default function Solution() {
  return (
    <SlideShell eyebrow="03 · The solution">
      <Lockup size="lg" className="mb-8 self-start" />
      <h1 className="hero-type text-[clamp(2.6rem,9vw,6.2rem)]">
        Real.
        <br />
        Spontaneous.
        <br />
        <span className="text-violet">Moments.</span>
      </h1>
      <div className="mt-9 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <p className="max-w-[54ch] text-[clamp(1rem,2.2vw,1.3rem)] leading-relaxed text-ink-dim">
          <span className="text-ink">Jelly Jelly</span> is a social app built
          from the ground up for one thing: sharing real, spontaneous moments
          through video. Short, off the cuff, no edit suite, no algorithm to
          please. And it has its own currency built in, so the people watching
          can actually support you.
        </p>
        <p className="glass rounded-2xl p-5 font-display text-[clamp(1.05rem,2.4vw,1.4rem)] font-bold leading-snug tracking-tight text-ink">
          “It’s like your phone and your wallet had a beautiful baby.”
          <span className="mt-3 block font-body text-xs font-medium tracking-[0.18em] uppercase text-ink-dim">
            The human social network
          </span>
        </p>
      </div>
    </SlideShell>
  );
}
