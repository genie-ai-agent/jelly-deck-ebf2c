import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  eyebrow: string;
  children: ReactNode;
  className?: string;
  /** wide slides (tables, flywheel) get more horizontal room */
  wide?: boolean;
};

export default function SlideShell({ eyebrow, children, className, wide }: Props) {
  return (
    <section
      className={cn(
        'mx-auto flex min-h-[100svh] w-full flex-1 flex-col justify-center',
        'px-6 pt-20 pb-28 sm:px-10 md:px-16 lg:px-20',
        wide ? 'max-w-[1400px]' : 'max-w-[1180px]',
        className,
      )}
    >
      <div className="rise flex flex-col">
        <p className="eyebrow mb-6 flex items-center gap-3">
          <span className="inline-block h-[6px] w-[6px] rounded-full bg-peri" />
          {eyebrow}
        </p>
        {children}
      </div>
    </section>
  );
}
