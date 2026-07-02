import React from 'react';

/**
 * Soletta logo — renders the OFFICIAL uploaded logo files. Never redrawn.
 *   variant "full"     → LOGOTIPO (sunburst + wordmark)
 *   variant "wordmark" → LOGOTIPO SECUNDARIO (wordmark only, whitespace-trimmed)
 *   variant "mark"     → ISOTIPO (sunburst only)
 * Color variants are exact recolors of those files (alpha/geometry preserved).
 * `size` is the rendered HEIGHT in px. Note the wordmark is very wide
 * (aspect ≈ 6.1), so a small height fills a lot of width — e.g. size 32 → ~196px wide.
 *
 * `assetBase` is the path to the /assets/logo directory relative to the host
 * HTML page (default "assets/logo" — works from the project root).
 */

const FILE = {
  full: 'soletta-logotipo',
  wordmark: 'soletta-logotipo-secundario',
  mark: 'soletta-isotipo',
};

// Wordmark uses a whitespace-trimmed copy of the official LOGOTIPO SECUNDARIO
// (exact artwork, transparent margins removed) so it sizes correctly in tight
// spots like a nav. natural aspect (w / h) of each file's artwork.
const ASPECT = { full: 1, wordmark: 6.136, mark: 1 };

export function Logo({
  variant = 'full',        // 'full' | 'wordmark' | 'mark'
  color = 'marine',        // 'black' | 'marine' | 'white' | 'coral'
  subbrand,                // optional sub-brand tag below the lockup
  size = 120,              // rendered height of the logo image (px)
  assetBase = 'assets/logo',
  className = '',
  style = {},
  ...rest
}) {
  const file = FILE[variant] || FILE.full;
  const suffix = color && color !== 'black' ? `-${color}` : '';
  const trim = variant === 'wordmark' ? '-trim' : '';
  const src = `${assetBase}/${file}${suffix}${trim}.png`;
  const w = size * (ASPECT[variant] || 1);

  const tagColor = {
    marine: 'var(--marine-600)', white: '#ffffff',
    coral: 'var(--coral-500)', black: 'var(--ink-900)',
  }[color] || 'var(--ink-700)';

  return (
    <span className={className} style={{
      display: 'inline-flex', flexDirection: 'column', alignItems: 'center',
      ...style,
    }} {...rest}>
      <img src={src} alt="Soletta" style={{ height: size, width: w, objectFit: 'contain', display: 'block' }} />
      {subbrand && (
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600,
          letterSpacing: '0.32em', textTransform: 'uppercase',
          fontSize: Math.max(8, size * 0.10),
          marginTop: size * 0.04, paddingLeft: '0.32em',
          color: tagColor, opacity: 0.92,
        }}>{subbrand}</span>
      )}
    </span>
  );
}
