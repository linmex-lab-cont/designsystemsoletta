import React from 'react';

export interface FeatureBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Icon node (e.g. a Lucide icon) centered in the disc. */
  icon: React.ReactNode;
  /** Diameter in px. @default 72 */
  size?: number;
  /** @default "marine" */
  variant?: 'marine' | 'marine-deep' | 'coral' | 'soft' | 'outline' | 'outline-light';
}

/** Soletta circular icon badge — the marine feature disc. */
export function FeatureBadge(props: FeatureBadgeProps): JSX.Element;
