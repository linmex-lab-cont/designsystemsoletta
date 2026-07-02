import React from 'react';

/** Soletta card — sober surface. White by default; sand or marine variants. */
const VARIANTS = {
  default:  { background: 'var(--white)', color: 'var(--ink-900)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' },
  flat:     { background: 'var(--white)', color: 'var(--ink-900)', border: '1px solid var(--border-default)', boxShadow: 'none' },
  elevated: { background: 'var(--white)', color: 'var(--ink-900)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)' },
  sand:     { background: 'var(--sand-50)', color: 'var(--ink-900)', border: '1px solid var(--sand-300)', boxShadow: 'none' },
  marine:   { background: 'var(--marine-900)', color: '#fff', border: '1px solid transparent', boxShadow: 'var(--shadow-md)' },
};

const PADS = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-7)' };

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  media,                 // optional image src for a top media band
  mediaHeight = 200,
  interactive = false,
  className = '',
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  const [hover, setHover] = React.useState(false);
  const r = { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)', xl: 'var(--radius-xl)' }[radius] || 'var(--radius-lg)';

  return (
    <div
      className={className}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        ...v,
        borderRadius: r,
        overflow: 'hidden',
        transition: 'transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out)',
        transform: hover ? 'translateY(-3px)' : 'none',
        boxShadow: hover ? 'var(--shadow-lg)' : v.boxShadow,
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {media && (
        <div style={{ height: mediaHeight, overflow: 'hidden' }}>
          <img src={media} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      )}
      <div style={{ padding: PADS[padding] }}>
        {children}
      </div>
    </div>
  );
}
