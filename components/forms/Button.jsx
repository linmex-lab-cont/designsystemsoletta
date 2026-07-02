import React from 'react';

/**
 * Soletta button. Pill by default (the brand's CTA shape).
 * Calm interactions: darken on hover/press, soft focus ring, no bounce.
 */

const SIZES = {
  sm: { padding: '8px 18px', fontSize: 14, gap: 8, icon: 16 },
  md: { padding: '12px 26px', fontSize: 15, gap: 9, icon: 18 },
  lg: { padding: '16px 34px', fontSize: 17, gap: 11, icon: 20 },
};

export function Button({
  children,
  variant = 'primary',     // primary | accent | outline | ghost | link
  size = 'md',             // sm | md | lg
  shape = 'pill',          // pill | rounded
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className = '',
  style = {},
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const palette = {
    primary: {
      bg: 'var(--marine-600)', bgHover: 'var(--marine-700)', bgActive: 'var(--marine-800)',
      fg: '#fff', border: 'transparent',
    },
    accent: {
      bg: 'var(--coral-500)', bgHover: 'var(--coral-600)', bgActive: 'var(--coral-700)',
      fg: '#fff', border: 'transparent',
    },
    outline: {
      bg: 'transparent', bgHover: 'rgba(34,116,165,0.07)', bgActive: 'rgba(34,116,165,0.13)',
      fg: 'var(--marine-700)', border: 'var(--marine-600)',
    },
    ghost: {
      bg: 'transparent', bgHover: 'var(--gray-100)', bgActive: 'var(--gray-150)',
      fg: 'var(--ink-700)', border: 'transparent',
    },
    link: {
      bg: 'transparent', bgHover: 'transparent', bgActive: 'transparent',
      fg: 'var(--marine-600)', border: 'transparent',
    },
  }[variant] || {};

  const bg = active ? palette.bgActive : hover ? palette.bgHover : palette.bg;

  const base = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '0.02em',
    lineHeight: 1,
    padding: variant === 'link' ? '2px 0' : s.padding,
    width: fullWidth ? '100%' : 'auto',
    color: palette.fg,
    background: bg,
    border: `1.5px solid ${palette.border}`,
    borderRadius: variant === 'link' ? 0 : (shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)'),
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: variant === 'link' && hover ? 'underline' : 'none',
    textUnderlineOffset: '3px',
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
    boxShadow: active ? 'none' : 'none',
    WebkitTapHighlightColor: 'transparent',
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onFocus={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-focus)'; }}
      onBlur={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
      {...rest}
    >
      {leftIcon && <span style={{ display: 'inline-flex', width: s.icon, height: s.icon }}>{leftIcon}</span>}
      {children}
      {rightIcon && <span style={{ display: 'inline-flex', width: s.icon, height: s.icon }}>{rightIcon}</span>}
    </button>
  );
}
