import { useCallback, useEffect, useRef, useState } from 'react';
import { slideMeta } from '@/data/deck';
import { cn } from '@/lib/utils';
import Problem from '@/components/slides/Problem';
import WhatYouWant from '@/components/slides/WhatYouWant';
import Solution from '@/components/slides/Solution';
import HowItWorks from '@/components/slides/HowItWorks';
import Wobbles from '@/components/slides/Wobbles';
import Flywheel from '@/components/slides/Flywheel';
import Traction from '@/components/slides/Traction';
import Team from '@/components/slides/Team';
import Raise from '@/components/slides/Raise';
import Close from '@/components/slides/Close';
import Invest from '@/components/slides/Invest';

const slides = [
  Problem,
  WhatYouWant,
  Solution,
  HowItWorks,
  Wobbles,
  Flywheel,
  Traction,
  Team,
  Raise,
  Close,
  Invest,
];

const total = slides.length;

function indexFromHash(): number {
  if (typeof window === 'undefined') return 0;
  const n = parseInt(window.location.hash.replace('#', ''), 10);
  if (Number.isNaN(n)) return 0;
  return Math.min(Math.max(n - 1, 0), total - 1);
}

export default function Deck() {
  const [i, setI] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    const clamped = Math.min(Math.max(next, 0), total - 1);
    setI(clamped);
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `#${clamped + 1}`);
    }
  }, []);

  useEffect(() => {
    setI(indexFromHash());
  }, []);

  useEffect(() => {
    const onHash = () => setI(indexFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setI((p) => {
          const n = Math.min(p + 1, total - 1);
          window.history.replaceState(null, '', `#${n + 1}`);
          return n;
        });
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setI((p) => {
          const n = Math.max(p - 1, 0);
          window.history.replaceState(null, '', `#${n + 1}`);
          return n;
        });
      } else if (e.key === 'Home') {
        setI(0);
      } else if (e.key === 'End') {
        setI(total - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const Slide = slides[i]!;
  const meta = slideMeta[i]!;

  return (
    <main
      className="deck-canvas flex h-[100svh] max-h-[100svh] w-full flex-col overflow-hidden"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX ?? null;
        if (start === null || end === null) return;
        const dx = end - start;
        if (Math.abs(dx) > 55) go(dx < 0 ? i + 1 : i - 1);
        touchX.current = null;
      }}
    >
      {/* progress rail */}
      <div className="fixed inset-x-0 top-0 z-30 flex gap-[3px] px-3 pt-3 sm:px-5">
        {slideMeta.map((s, idx) => (
          <button
            key={s.id}
            aria-label={`Go to slide ${idx + 1}: ${s.label}`}
            onClick={() => go(idx)}
            className="group h-6 flex-1 pt-0"
          >
            <span
              className={cn(
                'block h-[3px] w-full rounded-full transition-all duration-300',
                idx <= i ? 'bg-peri' : 'bg-white/15 group-hover:bg-white/35',
              )}
            />
          </button>
        ))}
      </div>

      <p className="fixed right-4 top-8 z-30 hidden text-[0.7rem] font-medium uppercase tracking-[0.2em] text-ink-dim sm:block">
        {meta.label}
      </p>

      {/* slide, keyed so the entrance animation replays */}
      <div key={i} className="flex h-[100svh] w-full flex-1 overflow-hidden">
        <Slide />
      </div>

      {/* nav */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-[#05060a] via-[#05060acc] to-transparent" />

      <nav className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-center gap-2 pb-5">
        <button
          onClick={() => go(i - 1)}
          disabled={i === 0}
          aria-label="Previous slide"
          className="glass flex h-12 w-12 items-center justify-center rounded-full text-lg text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-peri/60 disabled:opacity-25 disabled:hover:translate-y-0"
        >
          ←
        </button>
        <span className="glass flex h-12 min-w-[92px] items-center justify-center rounded-full px-4 font-display text-sm font-bold tracking-tight text-ink">
          {String(i + 1).padStart(2, '0')}
          <span className="px-1 text-ink-dim">/</span>
          {String(total).padStart(2, '0')}
        </span>
        <button
          onClick={() => go(i + 1)}
          disabled={i === total - 1}
          aria-label="Next slide"
          className="glass flex h-12 w-12 items-center justify-center rounded-full text-lg text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-peri/60 disabled:opacity-25 disabled:hover:translate-y-0"
        >
          →
        </button>
      </nav>
    </main>
  );
}
