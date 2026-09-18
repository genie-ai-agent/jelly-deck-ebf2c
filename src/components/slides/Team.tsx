import SlideShell from '@/components/SlideShell';

export default function Team() {
  return (
    <SlideShell eyebrow="08 · Team">
      <h1 className="hero-type text-[clamp(2rem,6.4vw,4.2rem)]">
        Built by someone who
        <br />
        already did this once.
      </h1>
      <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="glass rounded-jelly p-7">
          <p className="hero-type text-[clamp(1.7rem,4.6vw,2.6rem)] text-ink">
            Iqram
            <br />
            Magdon-Ismail
          </p>
          <p className="mt-3 font-display text-base font-semibold tracking-tight text-peri">
            Co-founder &amp; CEO, Jelly Jelly
          </p>
          <p className="mt-4 text-[0.97rem] leading-relaxed text-ink-dim">
            Co-founded Venmo, the most authentic social network there has been:
            a feed of what people actually did, with money attached. Jelly Jelly
            is that instinct rebuilt for video and for the whole planet.
          </p>
        </div>
        <div>
          <p className="eyebrow">Why him, why now</p>
          <ul className="mt-4 space-y-4">
            {[
              'Shipped consumer payments to tens of millions of people, and knows what makes a payment feel social instead of financial.',
              'Has run the hard version of this problem before: trust, fraud, network effects, and getting normal people to move money in an app.',
              'Jelly is already live and in the App Store, built by a small senior team across iOS, Android and growth.',
            ].map((t) => (
              <li key={t} className="flex gap-3 text-[0.97rem] leading-relaxed text-ink-dim">
                <span className="mt-[0.55rem] h-[6px] w-[6px] shrink-0 rounded-full bg-violet" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-sm leading-relaxed text-ink-dim/80">
            Current investors: [confirm the list you want shown here]
          </p>
        </div>
      </div>
    </SlideShell>
  );
}
