import React from 'react';

/**
 * Soletta circular icon badge — the brand's marine "feature" disc
 * (24% plusvalía, escrituración, acceso al mar…). Pass any icon node.
 */
const VARIANTS = {
  marine:  { bg: 'var(--marine-600)', fg: '#fff', border: 'transparent' },
  'marine-deep': { bg: 'var(--marine-900)', fg: '#fff', border: 'transparent' },
  coral:   { bg: 'var(--coral-500)', fg: '#fff', border: 'transparent' },
  soft:    { bg: 'var(--marine-50)', fg: 'var(--marine-600)', border: 'transparent' },
  outline: { bg: 'transparent', fg: 'var(--marine-600)', border: 'var(--marine-600)' },
  'outline-light': { bg: 'transparent', fg: '#fff', border: 'rgba(255,255,255,0.55)' },
};

export function FeatureBadge({
  icon,
  size = 72,
  variant = 'marine',
  className = '',
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.marine;
  return (
    <span className={className} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, flex: 'none',
      borderRadius: '50%',
      background: v.bg, color: v.fg,
      border: `1.5px solid ${v.border}`,
      ...style,
    }} {...rest}>
      <span style={{ display: 'inline-flex', width: size * 0.42, height: size * 0.42 }}>{icon}</span>
    </span>
  );
}
