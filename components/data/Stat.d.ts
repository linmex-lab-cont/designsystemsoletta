import React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "50%", "24%", "8 X 20 m". */
  value: React.ReactNode;
  /** Label shown below the figure. */
  label?: React.ReactNode;
  /** Small uppercase caption shown above the figure. */
  caption?: React.ReactNode;
  /** Label treatment. @default "pill" */
  labelStyle?: 'pill' | 'plain';
  /** @default "marine" */
  color?: 'marine' | 'coral' | 'ink' | 'white' | string;
  /** @default "center" */
  align?: 'center' | 'left';
  /** @default "lg" */
  size?: 'md' | 'lg' | 'xl';
}

/**
 * Soletta stat — big figure + label (the financing-plan motif).
 * @startingPoint section="Components" subtitle="Big figure + outlined label pill" viewport="700x240"
 */
export function Stat(props: StatProps): JSX.Element;
