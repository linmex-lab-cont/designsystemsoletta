import React from 'react';

/** Soletta text input — calm, clear, sober. Label + optional hint/error. */
export function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  leftIcon,
  fullWidth = true,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--color-danger)' : focus ? 'var(--marine-600)' : 'var(--border-default)';

  return (
    <div className={className} style={{ width: fullWidth ? '100%' : 'auto', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          display: 'block', marginBottom: 7,
          fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-500)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {leftIcon && (
          <span style={{ position: 'absolute', left: 14, display: 'inline-flex',
            width: 18, height: 18, color: 'var(--ink-400)', pointerEvents: 'none' }}>{leftIcon}</span>
        )}
        <input
          id={inputId}
          type={type}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          style={{
            width: '100%',
            fontFamily: 'var(--font-sans)', fontSize: 15, color: 'var(--ink-900)',
            padding: leftIcon ? '12px 14px 12px 40px' : '12px 14px',
            background: 'var(--white)',
            border: `1.5px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            outline: 'none',
            boxShadow: focus ? 'var(--shadow-focus)' : 'none',
            transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <p style={{ margin: '6px 2px 0', fontFamily: 'var(--font-sans)', fontSize: 13,
          color: error ? 'var(--color-danger)' : 'var(--ink-400)' }}>{error || hint}</p>
      )}
    </div>
  );
}
