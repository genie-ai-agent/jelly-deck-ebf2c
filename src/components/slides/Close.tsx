import SlideShell from '@/components/SlideShell';
import Lockup from '@/components/Lockup';
import { BRAND } from '@/data/deck';

export default function Close() {
  return (
    <SlideShell eyebrow="10 · Thank you">
      <Lockup size="lg" className="mb-9 self-start" />
      <h1 className="hero-type text-[clamp(2.6rem,10vw,6.4rem)]">
        The human
        <br />
        social <span className="text-peri">network.</span>
      </h1>
      <p className="mt-8 max-w-[44ch] text-[clamp(1.02rem,2.3vw,1.3rem)] leading-relaxed text-ink-dim">
        Real moments from real people, with a currency that grows as the
        community does.
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="https://jellyjelly.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[48px] items-center rounded-full bg-ink px-6 font-display text-sm font-bold tracking-tight text-void transition-transform duration-200 hover:-translate-y-0.5"
        >
          {BRAND.site} →
        </a>
        <span className="glass inline-flex min-h-[48px] items-center rounded-full px-5 font-display text-sm font-semibold tracking-tight text-ink">
          Raising $1.5M · [your email]
        </span>
      </div>
    </SlideShell>
  );
}
