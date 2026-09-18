import SlideShell from '@/components/SlideShell';

export default function Team() {
  return (
    <SlideShell eyebrow="08 · Team">
      <h1 className="hero-type text-[clamp(2.1rem,min(7.5vw,9vh),4.8rem)]">
        Iqram
        <br />
        Magdon-Ismail
      </h1>
      <p className="mt-[clamp(0.9rem,2.6vh,1.4rem)] font-display text-[clamp(1rem,min(2.4vw,2.6vh),1.3rem)] font-bold tracking-tight text-peri">
        Founder &amp; CEO · Co-founder of Venmo
      </p>
      <p className="mt-[clamp(1.2rem,3.4vh,2rem)] max-w-[40ch] text-[clamp(1rem,min(2.4vw,2.6vh),1.3rem)] leading-snug text-ink-dim">
        Venmo was the most honest social network there’s been: what people
        actually did, with money attached. Jelly is that instinct rebuilt for
        video, for everyone.
      </p>
      <p className="mt-[clamp(1rem,3vh,1.6rem)] max-w-[40ch] text-[clamp(0.95rem,2.2vh,1.1rem)] leading-snug text-ink-dim/80">
        Live in the App Store, built by a small senior team across iOS, Android
        and growth. Current investors: [confirm the list you want shown].
      </p>
    </SlideShell>
  );
}
