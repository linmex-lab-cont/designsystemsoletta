import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "default" */
  variant?: 'default' | 'flat' | 'elevated' | 'sand' | 'marine';
  /** @default "md" */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** @default "lg" */
  radius?: 'sm' | 'md' | 'lg' | 'xl';
  /** Optional image src for a full-bleed media band at the top. */
  media?: string;
  /** @default 200 */
  mediaHeight?: number;
  /** Lift on hover. @default false */
  interactive?: boolean;
}

/**
 * Soletta surface card — white, sand or marine.
 * @startingPoint section="Components" subtitle="Sober cards — white, sand, marine, media" viewport="700x300"
 */
export function Card(props: CardProps): JSX.Element;
