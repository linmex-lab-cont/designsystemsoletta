import React from 'react';

/**
 * Soletta badge / label pill. The brand's wide-tracked uppercase
 * label ("PLAN INVERSIONISTA ESTRATÉGICO") and small tags.
 */
const VARIANTS = {
  marine:  { bg: 'var(--marine-600)', fg: '#fff', border: 'transparent' },
  'marine-deep': { bg: 'var(--marine-900)', fg: '#fff', border: 'transparent' },
  coral:   { bg: 'var(--coral-500)', fg: '#fff', border: 'transparent' },
  sand:    { bg: 'var(--sand-100)', fg: 'var(--sand-700)', border: 'transparent' },
  soft:    { bg: 'var(--marine-50)', fg: 'var(--marine-700)', border: 'transparent' },
  outline: { bg: 'transparent', fg: 'var(--marine-700)', border: 'var(--marine-600)' },
  'outline-light': { bg: 'transparent', fg: '#fff', border: 'rgba(255,255,255,0.6)' },
};

const SIZES = {
  sm: { padding: '4px 12px', fontSize: 11, tracking: '0.14em' },
  md: { padding: '7px 18px', fontSize: 12, tracking: '0.16em' },
  lg: { padding: '10px 24px', fontSize: 13, tracking: '0.18em' },
};

export function Badge({
  children,
  variant = 'marine',
  size = 'md',
  uppercase = true,
  pill = true,
  className = '',
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.marine;
  const s = SIZES[size] || SIZES.md;
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center',
      fontFamily: 'var(--font-sans)', fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: uppercase ? s.tracking : '0.01em',
      textTransform: uppercase ? 'uppercase' : 'none',
      padding: s.padding,
      color: v.fg, background: v.bg,
      border: `1.5px solid ${v.border}`,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      lineHeight: 1, whiteSpace: 'nowrap',
      ...style,
    }} {...rest}>{children}</span>
  );
}
