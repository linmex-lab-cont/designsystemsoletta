export interface LogoProps {
  /** Which official file. full = LOGOTIPO, wordmark = SECUNDARIO, mark = ISOTIPO. @default "full" */
  variant?: 'full' | 'wordmark' | 'mark';
  /** Exact recolor of the official artwork. @default "marine" */
  color?: 'black' | 'marine' | 'white' | 'coral';
  /** Optional sub-brand tag rendered below, e.g. "Sisal", "Chicxulub". */
  subbrand?: string;
  /** Rendered logo HEIGHT in px (wordmark is ~6.1× wider than tall). @default 120 */
  size?: number;
  /** Path to /assets/logo relative to the host page. @default "assets/logo" */
  assetBase?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Soletta logo — renders the official uploaded logo files (never redrawn).
 * @startingPoint section="Brand" subtitle="Official logo files — isotipo, logotipo, secundario" viewport="700x300"
 */
export function Logo(props: LogoProps): JSX.Element;
