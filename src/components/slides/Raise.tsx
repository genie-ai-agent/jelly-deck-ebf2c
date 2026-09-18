import SlideShell from '@/components/SlideShell';

export default function Raise() {
  return (
    <SlideShell eyebrow="09 · The raise">
      <p className="eyebrow mb-3 text-gold">We are raising</p>
      <h1 className="hero-type text-[clamp(3.6rem,15vw,9.5rem)] text-ink">
        $1.5M
      </h1>
      <p className="mt-7 max-w-[52ch] text-[clamp(1.02rem,2.3vw,1.3rem)] leading-relaxed text-ink-dim">
        To take Jelly from a live app with thousands of real humans on it to the
        default place people share real moments and send each other money.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          { k: 'Round', v: '[round type]' },
          { k: 'Terms', v: '[valuation / terms]' },
          { k: 'Use of funds', v: '[split across product, growth, ops]' },
        ].map((f) => (
          <div key={f.k} className="glass rounded-2xl p-5">
            <p className="eyebrow">{f.k}</p>
            <p className="mt-2 font-display text-base font-bold tracking-tight text-ink/80">
              {f.v}
            </p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}
