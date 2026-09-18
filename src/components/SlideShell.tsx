import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  children: ReactNode;
  className?: string;
  /** wide slides (steps, stats) get more horizontal room */
  wide?: boolean;
};

/**
 * Every slide is exactly one screen tall and never scrolls.
 * Type scales off both vw and vh so short laptop windows stay contained.
 */
export default function SlideShell({ eyebrow, children, className, wide }: Props) {
  return (
    <section
      className={cn(
        'mx-auto flex h-[100svh] max-h-[100svh] w-full flex-1 flex-col justify-center overflow-hidden',
        'px-6 pt-16 pb-24 sm:px-10 md:px-14 lg:px-20',
        wide ? 'max-w-[1320px]' : 'max-w-[1100px]',
        className,
      )}
    >
      <div className="rise flex flex-col">
        <p className="eyebrow mb-[clamp(0.9rem,2.4vh,1.6rem)]">{eyebrow}</p>
        {children}
      </div>
    </section>
  );
}
