export type SlideMeta = {
  id: string;
  label: string;
};

/** Order is the deck order. The problem opens the deck — no title card. */
export const slideMeta: SlideMeta[] = [
  { id: 'problem', label: 'The problem' },
  { id: 'want', label: 'What you want' },
  { id: 'solution', label: 'The solution' },
  { id: 'how', label: 'How it works' },
  { id: 'wobbles', label: 'Wobbles' },
  { id: 'flywheel', label: 'The flywheel' },
  { id: 'traction', label: 'Traction' },
  { id: 'team', label: 'Team' },
  { id: 'raise', label: 'The raise' },
  { id: 'close', label: 'Jelly Jelly' },
  { id: 'invest', label: 'Invest' },
];

export const RAISE = '$1.5M';

export const BRAND = {
  icon: '/brand/jelly-icon.png',
  wordmark: '/brand/jellyjelly-wordmark.svg',
  wobblesCollectible: '/brand/wobbles-coin.png',
  wobblesWordmark: '/brand/wobbles-wordmark.png',
  site: 'jellyjelly.com',
} as const;
