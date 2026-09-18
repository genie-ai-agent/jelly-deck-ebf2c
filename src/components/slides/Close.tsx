import SlideShell from '@/components/SlideShell';
import Lockup from '@/components/Lockup';
import { BRAND } from '@/data/deck';

export default function Close() {
  return (
    <SlideShell eyebrow="10 · Jelly Jelly">
      <Lockup size="lg" className="mb-[clamp(1.4rem,4vh,2.4rem)] self-start" />
      <h1 className="hero-type text-[clamp(2.5rem,min(10vw,12vh),6.4rem)]">
        The human
        <br />
        social <span className="text-peri">network.</span>
      </h1>
      <a
        href="https://jellyjelly.com"
        target="_blank"
        rel="noreferrer"
        className="mt-[clamp(1.6rem,4.5vh,2.8rem)] inline-flex min-h-[48px] w-fit items-center rounded-full bg-ink px-6 font-display text-sm font-bold tracking-tight text-void transition-transform duration-200 hover:-translate-y-0.5"
      >
        {BRAND.site} →
      </a>
    </SlideShell>
  );
}
