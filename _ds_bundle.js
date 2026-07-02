/* @ds-bundle: {"format":3,"namespace":"SolettaDesignSystem_19cf15","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"FeatureBadge","sourcePath":"components/layout/FeatureBadge.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"fe9a42594dd5","components/data/Stat.jsx":"ef54bc46cb4f","components/feedback/Badge.jsx":"d161454e42d7","components/forms/Button.jsx":"74c37a856720","components/forms/Input.jsx":"43e399fb8c22","components/layout/Card.jsx":"7a23d0eda0b5","components/layout/FeatureBadge.jsx":"bd7ef5fbbbfc","ui_kits/website/sections.jsx":"f4e4f1bde690"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SolettaDesignSystem_19cf15 = window.SolettaDesignSystem_19cf15 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  mark: 'soletta-isotipo'
};

// Wordmark uses a whitespace-trimmed copy of the official LOGOTIPO SECUNDARIO
// (exact artwork, transparent margins removed) so it sizes correctly in tight
// spots like a nav. natural aspect (w / h) of each file's artwork.
const ASPECT = {
  full: 1,
  wordmark: 6.136,
  mark: 1
};
function Logo({
  variant = 'full',
  // 'full' | 'wordmark' | 'mark'
  color = 'marine',
  // 'black' | 'marine' | 'white' | 'coral'
  subbrand,
  // optional sub-brand tag below the lockup
  size = 120,
  // rendered height of the logo image (px)
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
    marine: 'var(--marine-600)',
    white: '#ffffff',
    coral: 'var(--coral-500)',
    black: 'var(--ink-900)'
  }[color] || 'var(--ink-700)';
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Soletta",
    style: {
      height: size,
      width: w,
      objectFit: 'contain',
      display: 'block'
    }
  }), subbrand && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      letterSpacing: '0.32em',
      textTransform: 'uppercase',
      fontSize: Math.max(8, size * 0.10),
      marginTop: size * 0.04,
      paddingLeft: '0.32em',
      color: tagColor,
      opacity: 0.92
    }
  }, subbrand));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Soletta stat — the brand's signature big figure with a label.
 * Two label treatments: an outlined pill ("50%  ·  DE ENGANCHE")
 * or plain uppercase caption ("MEDIDAS DESDE · 8 X 20 m").
 */
function Stat({
  value,
  label,
  caption,
  // small label ABOVE the value
  labelStyle = 'pill',
  // 'pill' | 'plain'
  color = 'marine',
  // marine | coral | ink | white
  align = 'center',
  size = 'lg',
  // md | lg | xl
  className = '',
  style = {},
  ...rest
}) {
  const fg = {
    marine: 'var(--marine-600)',
    coral: 'var(--coral-500)',
    ink: 'var(--ink-900)',
    white: '#fff'
  }[color] || color;
  const valueSize = {
    md: 44,
    lg: 64,
    xl: 88
  }[size] || 64;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      color: fg,
      ...style
    }
  }, rest), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      opacity: 0.92,
      marginBottom: 6
    }
  }, caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: valueSize,
      lineHeight: 1,
      letterSpacing: '-0.01em'
    }
  }, value), label && (labelStyle === 'pill' ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 14,
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      padding: '7px 18px',
      border: `1.5px solid ${fg}`,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1
    }
  }, label) : /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 15,
      color: color === 'white' ? 'rgba(255,255,255,0.8)' : 'var(--ink-500)',
      letterSpacing: '0.01em'
    }
  }, label)));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Soletta badge / label pill. The brand's wide-tracked uppercase
 * label ("PLAN INVERSIONISTA ESTRATÉGICO") and small tags.
 */
const VARIANTS = {
  marine: {
    bg: 'var(--marine-600)',
    fg: '#fff',
    border: 'transparent'
  },
  'marine-deep': {
    bg: 'var(--marine-900)',
    fg: '#fff',
    border: 'transparent'
  },
  coral: {
    bg: 'var(--coral-500)',
    fg: '#fff',
    border: 'transparent'
  },
  sand: {
    bg: 'var(--sand-100)',
    fg: 'var(--sand-700)',
    border: 'transparent'
  },
  soft: {
    bg: 'var(--marine-50)',
    fg: 'var(--marine-700)',
    border: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--marine-700)',
    border: 'var(--marine-600)'
  },
  'outline-light': {
    bg: 'transparent',
    fg: '#fff',
    border: 'rgba(255,255,255,0.6)'
  }
};
const SIZES = {
  sm: {
    padding: '4px 12px',
    fontSize: 11,
    tracking: '0.14em'
  },
  md: {
    padding: '7px 18px',
    fontSize: 12,
    tracking: '0.16em'
  },
  lg: {
    padding: '10px 24px',
    fontSize: 13,
    tracking: '0.18em'
  }
};
function Badge({
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
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: uppercase ? s.tracking : '0.01em',
      textTransform: uppercase ? 'uppercase' : 'none',
      padding: s.padding,
      color: v.fg,
      background: v.bg,
      border: `1.5px solid ${v.border}`,
      borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Soletta button. Pill by default (the brand's CTA shape).
 * Calm interactions: darken on hover/press, soft focus ring, no bounce.
 */

const SIZES = {
  sm: {
    padding: '8px 18px',
    fontSize: 14,
    gap: 8,
    icon: 16
  },
  md: {
    padding: '12px 26px',
    fontSize: 15,
    gap: 9,
    icon: 18
  },
  lg: {
    padding: '16px 34px',
    fontSize: 17,
    gap: 11,
    icon: 20
  }
};
function Button({
  children,
  variant = 'primary',
  // primary | accent | outline | ghost | link
  size = 'md',
  // sm | md | lg
  shape = 'pill',
  // pill | rounded
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
      bg: 'var(--marine-600)',
      bgHover: 'var(--marine-700)',
      bgActive: 'var(--marine-800)',
      fg: '#fff',
      border: 'transparent'
    },
    accent: {
      bg: 'var(--coral-500)',
      bgHover: 'var(--coral-600)',
      bgActive: 'var(--coral-700)',
      fg: '#fff',
      border: 'transparent'
    },
    outline: {
      bg: 'transparent',
      bgHover: 'rgba(34,116,165,0.07)',
      bgActive: 'rgba(34,116,165,0.13)',
      fg: 'var(--marine-700)',
      border: 'var(--marine-600)'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'var(--gray-100)',
      bgActive: 'var(--gray-150)',
      fg: 'var(--ink-700)',
      border: 'transparent'
    },
    link: {
      bg: 'transparent',
      bgHover: 'transparent',
      bgActive: 'transparent',
      fg: 'var(--marine-600)',
      border: 'transparent'
    }
  }[variant] || {};
  const bg = active ? palette.bgActive : hover ? palette.bgHover : palette.bg;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: variant === 'link' ? 0 : shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: variant === 'link' && hover ? 'underline' : 'none',
    textUnderlineOffset: '3px',
    transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)',
    boxShadow: active ? 'none' : 'none',
    WebkitTapHighlightColor: 'transparent',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: className,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-focus)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = 'none';
    }
  }, rest), leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Soletta text input — calm, clear, sober. Label + optional hint/error. */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      width: fullWidth ? '100%' : 'auto',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'block',
      marginBottom: 7,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--ink-400)',
      pointerEvents: 'none'
    }
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--ink-900)',
      padding: leftIcon ? '12px 14px 12px 40px' : '12px 14px',
      background: 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 2px 0',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: error ? 'var(--color-danger)' : 'var(--ink-400)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Soletta card — sober surface. White by default; sand or marine variants. */
const VARIANTS = {
  default: {
    background: 'var(--white)',
    color: 'var(--ink-900)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-sm)'
  },
  flat: {
    background: 'var(--white)',
    color: 'var(--ink-900)',
    border: '1px solid var(--border-default)',
    boxShadow: 'none'
  },
  elevated: {
    background: 'var(--white)',
    color: 'var(--ink-900)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-md)'
  },
  sand: {
    background: 'var(--sand-50)',
    color: 'var(--ink-900)',
    border: '1px solid var(--sand-300)',
    boxShadow: 'none'
  },
  marine: {
    background: 'var(--marine-900)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-md)'
  }
};
const PADS = {
  none: 0,
  sm: 'var(--space-4)',
  md: 'var(--space-5)',
  lg: 'var(--space-7)'
};
function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  media,
  // optional image src for a top media band
  mediaHeight = 200,
  interactive = false,
  className = '',
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.default;
  const [hover, setHover] = React.useState(false);
  const r = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  }[radius] || 'var(--radius-lg)';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      ...v,
      borderRadius: r,
      overflow: 'hidden',
      transition: 'transform var(--duration-normal) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out)',
      transform: hover ? 'translateY(-3px)' : 'none',
      boxShadow: hover ? 'var(--shadow-lg)' : v.boxShadow,
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    style: {
      height: mediaHeight,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: media,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: PADS[padding]
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/FeatureBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Soletta circular icon badge — the brand's marine "feature" disc
 * (24% plusvalía, escrituración, acceso al mar…). Pass any icon node.
 */
const VARIANTS = {
  marine: {
    bg: 'var(--marine-600)',
    fg: '#fff',
    border: 'transparent'
  },
  'marine-deep': {
    bg: 'var(--marine-900)',
    fg: '#fff',
    border: 'transparent'
  },
  coral: {
    bg: 'var(--coral-500)',
    fg: '#fff',
    border: 'transparent'
  },
  soft: {
    bg: 'var(--marine-50)',
    fg: 'var(--marine-600)',
    border: 'transparent'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--marine-600)',
    border: 'var(--marine-600)'
  },
  'outline-light': {
    bg: 'transparent',
    fg: '#fff',
    border: 'rgba(255,255,255,0.55)'
  }
};
function FeatureBadge({
  icon,
  size = 72,
  variant = 'marine',
  className = '',
  style = {},
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.marine;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      borderRadius: '50%',
      background: v.bg,
      color: v.fg,
      border: `1.5px solid ${v.border}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: size * 0.42,
      height: size * 0.42
    }
  }, icon));
}
Object.assign(__ds_scope, { FeatureBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/FeatureBadge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* SOLETTA — marketing website UI kit. Sections compose the design-system
   primitives (window.SolettaDesignSystem_19cf15) into a real landing page. */
const DS = window.SolettaDesignSystem_19cf15;
const {
  Logo,
  Button,
  Badge,
  Stat,
  Card,
  FeatureBadge
} = DS;

/* Lucide icon helper (shared) */
const Ic = ({
  n,
  s = 24,
  sw = 1.75
}) => {
  const d = window.lucide && window.lucide.icons[n] || [];
  return React.createElement('svg', {
    width: s,
    height: s,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: sw,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, d.map((c, i) => React.createElement(c[0], {
    ...c[1],
    key: i
  })));
};
const A = '../../assets';
const LOGO = '../../assets/logo';

/* ----------------------------------------------------------------- NAV */
function NavBar({
  onContact
}) {
  const [solid, setSolid] = React.useState(false);
  React.useEffect(() => {
    const el = document.querySelector('#kit-scroll');
    const onScroll = () => setSolid((el ? el.scrollTop : window.scrollY) > 60);
    const t = el || window;
    t.addEventListener('scroll', onScroll);
    return () => t.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['El destino', 'Masterplan', 'Planes', 'Contacto'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 48px',
      background: solid ? 'rgba(255,255,255,0.92)' : 'transparent',
      backdropFilter: solid ? 'saturate(140%) blur(10px)' : 'none',
      borderBottom: solid ? '1px solid var(--border-subtle)' : '1px solid transparent',
      transition: 'background var(--duration-normal) var(--ease-standard), border-color var(--duration-normal)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "wordmark",
    color: solid ? 'marine' : 'white',
    size: 32,
    assetBase: LOGO
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.04em',
      color: solid ? 'var(--ink-700)' : 'rgba(255,255,255,0.92)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    leftIcon: /*#__PURE__*/React.createElement(Ic, {
      n: "Phone",
      s: 15
    }),
    onClick: onContact
  }, "Cont\xE1ctame")));
}

/* ---------------------------------------------------------------- HERO */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      height: 640,
      marginTop: -74,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/imagery/terrace-sunset.png`,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-full)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 48px 64px',
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline-light",
    size: "sm"
  }, "Sisal \xB7 Yucat\xE1n"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline-light",
    size: "sm"
  }, "Pueblo M\xE1gico"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline-light",
    size: "sm"
  }, "Playa Platino")), /*#__PURE__*/React.createElement("h1", {
    className: "soletta-heading",
    style: {
      color: '#fff',
      fontSize: 60,
      margin: 0,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Tu siguiente hogar"), /*#__PURE__*/React.createElement("br", null), "tiene vista al mar."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 19,
      lineHeight: 1.5,
      maxWidth: 560,
      marginTop: 18
    }
  }, "Ancla tu inversi\xF3n a un puerto reconocido, con plusval\xEDa en aumento y la calma de la costa yucateca."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 28,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    leftIcon: /*#__PURE__*/React.createElement(Ic, {
      n: "Phone",
      s: 18
    })
  }, "Cont\xE1ctame"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.6)'
    }
  }, "Ver masterplan"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 14,
      marginLeft: 8
    }
  }, "Lotes desde ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#fff'
    }
  }, "$837,760")))));
}

/* ------------------------------------------------------------ FEATURES */
function Features() {
  const items = [{
    i: 'TrendingUp',
    v: '24%',
    c: 'Plusvalía en Soletta Chicxulub'
  }, {
    i: 'HardHat',
    v: 'Infraestructura',
    c: 'Lista para iniciar a construir'
  }, {
    i: 'FileCheck',
    v: 'Escrituración',
    c: 'Inmediata · certeza jurídica'
  }, {
    i: 'Clock',
    v: '40 min',
    c: 'De Mérida'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '72px 48px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40,
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.v,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(FeatureBadge, {
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: it.i,
      s: 32
    }),
    size: 76
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--marine-700)'
    }
  }, it.v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: 'var(--ink-500)',
      lineHeight: 1.45,
      maxWidth: 180
    }
  }, it.c)))));
}

/* ---------------------------------------------------------- MASTERPLAN */
function Masterplan() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--sand-50)',
      padding: '80px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center',
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "soletta-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "El masterplan"), /*#__PURE__*/React.createElement("h2", {
    className: "soletta-heading",
    style: {
      fontSize: 40,
      margin: '0 0 18px'
    }
  }, "Tierra firme, delimitada y lista."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-500)',
      lineHeight: 1.6,
      marginBottom: 28
    }
  }, "Calle blanca compactada, lotes delimitados con mojoneras y tendido el\xE9ctrico a pie de lote. Acceso directo al mar a solo 90 metros."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    caption: "Medidas desde",
    value: "8 \xD7 20 m",
    labelStyle: "plain",
    color: "ink",
    align: "left",
    size: "md"
  }), /*#__PURE__*/React.createElement(Stat, {
    caption: "Acceso al mar",
    value: "90 m",
    labelStyle: "plain",
    color: "ink",
    align: "left",
    size: "md"
  }), /*#__PURE__*/React.createElement(Stat, {
    caption: "Disponibles",
    value: "35",
    label: "lotes",
    labelStyle: "plain",
    color: "ink",
    align: "left",
    size: "md"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      height: 420
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `${A}/imagery/masterplan-aerial.png`,
    alt: "Masterplan Soletta Sisal",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))));
}

/* ------------------------------------------------------------- PLANS */
function Plans() {
  const [sel, setSel] = React.useState(1);
  const plans = [{
    name: 'Inversionista Estratégico',
    tag: 'Te da tiempo sin quitarte ventaja',
    stats: [['50%', 'De enganche'], ['50%', 'A 12 o 24 MSI']],
    disc: 'Hasta 10% de descuento'
  }, {
    name: 'Patrimonio Activo',
    tag: 'Una inversión equilibrada',
    stats: [['25%', 'De enganche'], ['50%', 'A 12 o 24 MSI'], ['25%', 'Al cierre']],
    disc: 'Hasta 10% de descuento'
  }, {
    name: 'Máxima Rentabilidad',
    tag: 'La decisión más rentable',
    stats: [['90%', 'Primer pago'], ['10%', 'En 45 días']],
    disc: '15% de descuento'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '84px 48px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "soletta-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Financiamiento a tu medida"), /*#__PURE__*/React.createElement("h2", {
    className: "soletta-heading",
    style: {
      fontSize: 40,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 300
    }
  }, "Tu visi\xF3n merece "), "un plan a su medida")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, plans.map((p, idx) => {
    const active = sel === idx;
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      onClick: () => setSel(idx),
      style: {
        cursor: 'pointer',
        borderRadius: 'var(--radius-lg)',
        padding: '32px 28px',
        background: active ? 'var(--marine-900)' : '#fff',
        border: `1px solid ${active ? 'transparent' : 'var(--border-subtle)'}`,
        boxShadow: active ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
        transition: 'all var(--duration-normal) var(--ease-out)',
        transform: active ? 'translateY(-6px)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: active ? 'coral' : 'soft',
      size: "sm"
    }, `Plan ${idx + 1}`), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 21,
        margin: '14px 0 4px',
        color: active ? '#fff' : 'var(--ink-900)'
      }
    }, p.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        color: active ? 'var(--text-on-dark-muted)' : 'var(--ink-400)',
        margin: '0 0 24px'
      }
    }, p.tag), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
      }
    }, p.stats.map(s => /*#__PURE__*/React.createElement(Stat, {
      key: s[1],
      value: s[0],
      label: s[1],
      color: active ? 'white' : 'marine',
      align: "left",
      size: "md"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26,
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 18,
        color: active ? 'var(--coral-300)' : 'var(--coral-600)'
      }
    }, p.disc));
  })));
}

/* ------------------------------------------------------------ CONTACT */
const Contact = React.forwardRef(function Contact(_, ref) {
  const [sent, setSent] = React.useState(false);
  const {
    Input
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    ref: ref,
    style: {
      background: 'var(--marine-900)',
      padding: '84px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 64,
      alignItems: 'center',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "soletta-eyebrow",
    style: {
      color: 'var(--coral-300)',
      marginBottom: 14
    }
  }, "Hablemos hoy mismo"), /*#__PURE__*/React.createElement("h2", {
    className: "soletta-heading",
    style: {
      color: '#fff',
      fontSize: 38,
      margin: '0 0 16px'
    }
  }, "Elige tu ubicaci\xF3n ideal frente al mar."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-on-dark-muted)',
      fontSize: 17,
      lineHeight: 1.6
    }
  }, "Te contactamos en menos de 24 horas con el esquema que mejor se ajuste a tu estrategia financiera."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline-light",
    size: "sm"
  }, "Soletta Sisal"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline-light",
    size: "sm"
  }, "Soletta Chicxulub"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-xl)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '36px 12px'
    }
  }, /*#__PURE__*/React.createElement(FeatureBadge, {
    icon: /*#__PURE__*/React.createElement(Ic, {
      n: "Check"
    }),
    variant: "marine",
    size: 64
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 22,
      margin: '18px 0 6px'
    }
  }, "\xA1Gracias!"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-500)',
      fontSize: 15,
      margin: 0
    }
  }, "Un asesor Soletta te contactar\xE1 pronto.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    placeholder: "Tu nombre completo"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    placeholder: "tu@correo.com",
    leftIcon: /*#__PURE__*/React.createElement(Ic, {
      n: "Mail",
      s: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    placeholder: "999 000 0000",
    leftIcon: /*#__PURE__*/React.createElement(Ic, {
      n: "Phone",
      s: 18
    })
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true),
    style: {
      marginTop: 6
    }
  }, "Quiero m\xE1s informaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--ink-400)',
      textAlign: 'center',
      margin: 0
    }
  }, "Aplican restricciones \xB7 Precios sujetos a disponibilidad")))));
});

/* ------------------------------------------------------------- FOOTER */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#11212F',
      padding: '48px 48px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "full",
    color: "white",
    subbrand: "Beach Life Residential",
    size: 70,
    assetBase: LOGO
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      color: 'rgba(255,255,255,0.6)',
      fontSize: 13,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontSize: 11,
      marginBottom: 4
    }
  }, "Un desarrollo de LINMEX"), "grupolinmex.mx \xB7 Sisal & Chicxulub, Yucat\xE1n"));
}
Object.assign(window, {
  NavBar,
  Hero,
  Features,
  Masterplan,
  Plans,
  Contact,
  Footer,
  KitIc: Ic
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureBadge = __ds_scope.FeatureBadge;

})();
