import React from 'react';

/**
 * Soletta stat — the brand's signature big figure with a label.
 * Two label treatments: an outlined pill ("50%  ·  DE ENGANCHE")
 * or plain uppercase caption ("MEDIDAS DESDE · 8 X 20 m").
 */
export function Stat({
  value,
  label,
  caption,            // small label ABOVE the value
  labelStyle = 'pill',// 'pill' | 'plain'
  color = 'marine',   // marine | coral | ink | white
  align = 'center',
  size = 'lg',        // md | lg | xl
  className = '',
  style = {},
  ...rest
}) {
  const fg = {
    marine: 'var(--marine-600)', coral: 'var(--coral-500)',
    ink: 'var(--ink-900)', white: '#fff',
  }[color] || color;

  const valueSize = { md: 44, lg: 64, xl: 88 }[size] || 64;

  return (
    <div className={className} style={{
      display: 'flex', flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align, color: fg, ...style,
    }} {...rest}>
      {caption && (
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          opacity: 0.92, marginBottom: 6,
        }}>{caption}</span>
      )}
      <span style={{
        fontFamily: 'var(--font-sans)', fontWeight: 700,
        fontSize: valueSize, lineHeight: 1, letterSpacing: '-0.01em',
      }}>{value}</span>
      {label && (
        labelStyle === 'pill' ? (
          <span style={{
            marginTop: 14,
            display: 'inline-flex', alignItems: 'center',
            fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12,
            letterSpacing: '0.16em', textTransform: 'uppercase',
            padding: '7px 18px',
            border: `1.5px solid ${fg}`, borderRadius: 'var(--radius-pill)',
            lineHeight: 1,
          }}>{label}</span>
        ) : (
          <span style={{
            marginTop: 6, fontFamily: 'var(--font-sans)', fontWeight: 500,
            fontSize: 15, color: color === 'white' ? 'rgba(255,255,255,0.8)' : 'var(--ink-500)',
            letterSpacing: '0.01em',
          }}>{label}</span>
        )
      )}
    </div>
  );
}
