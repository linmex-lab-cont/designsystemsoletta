import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'outline' | 'ghost' | 'link';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Corner shape. @default "pill" */
  shape?: 'pill' | 'rounded';
  /** Icon node rendered before the label. */
  leftIcon?: React.ReactNode;
  /** Icon node rendered after the label. */
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

/**
 * Soletta button — pill CTA. Primary = marine, accent = coral.
 * @startingPoint section="Components" subtitle="Pill buttons — marine, coral, outline" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
