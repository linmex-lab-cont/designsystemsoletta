import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "marine" */
  variant?: 'marine' | 'marine-deep' | 'coral' | 'sand' | 'soft' | 'outline' | 'outline-light';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Wide-tracked uppercase (brand label style). @default true */
  uppercase?: boolean;
  /** Pill shape vs. small rounded rect. @default true */
  pill?: boolean;
}

/**
 * Soletta label pill / tag.
 * @startingPoint section="Components" subtitle="Wide-tracked label pills & tags" viewport="700x150"
 */
export function Badge(props: BadgeProps): JSX.Element;
