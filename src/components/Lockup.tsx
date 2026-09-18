import { BRAND } from '@/data/deck';
import { cn } from '@/lib/utils';

type Props = {
  size?: 'sm' | 'lg';
  className?: string;
};

/**
 * Official lockup: the app icon tile plus the white JellyJelly wordmark,
 * both straight from jellyjelly.com/brand, never recolored.
 */
export default function Lockup({ size = 'sm', className }: Props) {
  const lg = size === 'lg';
  return (
    <div className={cn('inline-flex items-center', lg ? 'gap-4' : 'gap-3', className)}>
      <img
        src={BRAND.icon}
        alt="JellyJelly icon"
        width={96}
        height={96}
        className={cn(
          'object-contain drop-shadow-[0_10px_30px_rgba(138,169,245,0.45)]',
          lg ? 'h-14 w-14' : 'h-9 w-9',
        )}
      />
      <img
        src={BRAND.wordmark}
        alt="JellyJelly"
        className={cn('w-auto opacity-95', lg ? 'h-6' : 'h-4')}
      />
    </div>
  );
}
