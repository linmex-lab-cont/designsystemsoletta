# SOLETTA — Design System

**SOLETTA** is a premium beachfront **land / lot investment** brand on the Yucatán coast of Mexico, with developments in **Sisal** and **Chicxulub**. It is a development of **Grupo LINMEX** (`grupolinmex.mx`). The product sold is titled coastal land — "tierra firme frente al mar" — with tailored financing ("financiamiento a tu medida"), immediate deeding (escrituración inmediata), ready-to-build infrastructure, and projected appreciation (plusvalía). Sisal carries Pueblo Mágico and Playa Platino credentials.

This is a design system for producing on-brand interfaces and marketing assets for SOLETTA.

## Sources provided
All in `uploads/` (kept for reference; do not assume the reader has them):
- `Principios Rectores de Personalidad de Marca_ Soletta.pdf` — **the brand bible** (strategy, archetype, dos & don'ts). Drives everything here.
- `Ficha tecnica la soletta.pdf` — **official type & color guide** (Saudagar, Barlow; #F56B43, #2274A5, #1F2938, #EFEFEF).
- Marketing collateral: `Post*.png`, `Flyer.png`, `Prospectos - Post 2.png`, `Soletta_Sisal_Carta_de_venta.png`, `Soletta_Sisal_Masterplan_Carta.png`, `Soletta_Sisal_Promo_Lanzamiento_Plan_*.png`.
- `Soletta_Sisal_Brochure.pdf` — could not be read (file unreadable on disk); **please re-upload if its contents matter.**

## Brand foundation (from the bible)
- **North / core value:** *Calma con Criterio* — serene **and** intelligent at once; fresh without being frivolous, premium without being cold.
- **Archetype:** *El Navegante Visionario* (Explorer + Sage). Governing concept: *Calma que rinde* (calm that pays off).
- **Yes:** air & space, restraint, sober premium, natural light, editorial, **nautical as structural code**, warm-rational.
- **No:** beach cliché (umbrellas/coconuts/saturated turquoise), urgency / hard-sell visuals, corporate coldness, clutter, generic stock.
- **By development:** *Sisal* leans experiential & prestigious (credential seals); *Chicxulub* leans consolidated-rational (order, solidity, delivery certainty).
- **Non-negotiables:** never beach-cliché or hard-sell; only attributable data; differentiate from sister brand Capitalia (urban/solemn).

---

## CONTENT FUNDAMENTALS — how Soletta writes

- **Language:** Spanish (Mexico). Tone is calm, confident, and credentialed — never loud.
- **Address:** speaks to "tú" (informal you): *"Tu siguiente hogar tiene vista al mar"*, *"Invierte en tierra a pasos del mar"*, *"Contáctame"*. Warm and personal, advisor-to-investor.
- **Casing:** sentence case for headlines; **wide-tracked UPPERCASE** for eyebrows, labels, plan names and sub-brand tags (a core motif): `PLAN INVERSIONISTA ESTRATÉGICO`, `DE ENGANCHE`, `BEACH LIFE RESIDENTIAL`.
- **Headline structure:** a light line + a bold line (`Tu visión merece` / **`un plan a su medida`**). The bold half carries the point.
- **Voice = criterion, not hype.** Benefits are concrete and attributable: *"24% plusvalía"*, *"40 minutos de Mérida"*, *"acceso al mar a 90 m"*, *"Yucatán, el estado más seguro de México (Índice de Paz México 2026)"*. Always cite the source for a claim.
- **Vocabulary:** nautical & patrimonial as metaphor — *anclar tu inversión*, *puerto reconocido*, *tierra firme*, *planificación patrimonial*, *activos tangibles*. Use the metaphor as a code, never as literal cartoon (no anchors/wheels).
- **CTAs:** short, direct, first-person-invited — *"Contáctame"*, *"Contáctame para más información"*, *"Conoce más"*.
- **Disclaimers:** quiet, small, lowercase-ish — *"Precios y condiciones sujetos a disponibilidad. Aplican restricciones."*
- **Emoji:** none. Not part of the brand.

---

## VISUAL FOUNDATIONS

- **Color.** Serene base of sea/sky/horizon/sand. Primary is **marine blue `#2274A5`** (with a deep navy `#11364F` for badges/dark sections). The single accent is **coral `#F56B43`** — "el criterio y el valor" — used sparingly for headline bands and the one high-intent CTA. **Ink `#1F2938`** for text; warm **sand** neutrals for premium-rational warmth. Stay far from saturated tourist-brochure turquoise.
- **Type.** Display serif **Saudagar** (wordmark + editorial moments), self-hosted from `assets/fonts/saudagar.otf`. Workhorse **Barlow** for headlines, labels and body. Headline signature = Barlow Light + Bold mixed in one line. Labels/eyebrows = wide-tracked uppercase Barlow.
- **Spacing & layout.** Calm is *designed with space* — generous air, clean hierarchy, never saturated. 8px rhythm; roomy section padding (64–96px).
- **Backgrounds.** Full-bleed **hiperrealismo editorial** photography (natural light, real Sisal/Chicxulub coast — warm dusk terraces, aerial palm-forest coastline). Warm off-white **sand** and clean **white** for content sections; **deep marine** for emphasis/contact blocks. No patterns, no gradients-as-decoration.
- **Image treatment.** Warm, natural, golden-hour over cool. Protection via **scrims** (bottom-up navy gradient) — `--scrim-bottom / -top / -full` — so white text and the white logo read cleanly. Avoid heavy filters or grain.
- **Cards.** Sober: white surface, 1px hairline border (`--border-subtle`), soft `--shadow-sm/md`, `--radius-lg` (14px). Sand and marine variants for rhythm. One idea per card.
- **Borders & shape.** Pills (`--radius-pill`) for CTAs and label tags; soft radius for cards; **sharp rectangles** for editorial color bands (the coral headline band). Outlined pills for stat labels.
- **Elevation.** Restrained — premium without glam. Quiet shadows; a gentle lift (`translateY(-3px)`, `--shadow-lg`) on interactive cards only.
- **Motion.** Calm, never bouncy. Gentle eases (`--ease-standard`, `--ease-out`), 140–420ms. Fades and small rises; no spring/overshoot. Respect reduced-motion.
- **States.** Hover = darken the fill one step (or 7% marine wash on outline/ghost). Press = darken another step (no shrink). Focus = 3px marine focus ring (`--shadow-focus`). No opacity-only hovers.
- **Transparency / blur.** Sparingly: the nav uses a light blur-on-scroll; otherwise solid surfaces. Glass only where it earns clarity.
- **Signature motifs.** (1) Sunburst rising-sun mark + elegant serif wordmark. (2) Coral rectangular headline band. (3) Circular marine icon discs for features. (4) Big figure + outlined-pill label for financing. (5) Wide-tracked uppercase eyebrows. (6) Credential seals (Pueblo Mágico, Playa Platino) used small, as proof — never decoration.

---

## ICONOGRAPHY

- The brand uses **simple single-color line icons** (≈1.75px stroke, rounded joins) housed inside **circular marine discs** (`FeatureBadge`): location pin, calendar, m², document/escrituración, road, electricity, trending-up, sun-over-water, clock. Also solid white glyphs (phone) inside coral CTAs.
- The original icons are a custom line set. This system uses **[Lucide](https://lucide.dev)** (loaded from CDN) as the closest match in stroke weight and style — **flagged substitution**. Recommended names: `MapPin, CalendarClock, FileCheck, Waves, TrendingUp, Clock, HardHat, Phone, Check, ArrowRight, Mail`.
- **No emoji. No unicode-glyph icons.** Keep icons monoline, singular, and quiet — a credential, not ornament. Recolor via `currentColor`.
- The **logo is the official uploaded artwork** — `assets/logo/` holds the three approved files (ISOTIPO, LOGOTIPO, LOGOTIPO SECUNDARIO) plus exact recolors (marine/white/coral). Never redraw, reinterpret or modify the mark; the `Logo` component only ever renders these files. The credential seals come from real artwork in `assets/`.

---

## Font note
- **Saudagar** is the official brand display/headline serif, self-hosted from `assets/fonts/saudagar.otf` and declared via `@font-face` in `tokens/fonts.css`. Used for the wordmark and editorial display moments.
- **Barlow** is the brand body/UI font (Google Fonts).

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (import-only).
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `readme.md` — this guide. `SKILL.md` — agent-skill manifest.

**Assets** (`assets/`)
- `logo/` — **official approved files**: `soletta-isotipo.png` (mark), `soletta-logotipo.png` (full lockup), `soletta-logotipo-secundario.png` (wordmark), each with `-marine` / `-white` / `-coral` exact recolors.
- `imagery/` — `terrace-sunset.png` (warm dusk terrace), `tile-sea.png` (aerial sea/sand), `masterplan-aerial.png`.
- `seals/` — `playa-platino.png`, `pueblos-magicos.png` (credential seals).

**Components** (`components/`) → `window.SolettaDesignSystem_19cf15`
- `brand/Logo` · `forms/Button` · `forms/Input` · `feedback/Badge` · `data/Stat` · `layout/Card` · `layout/FeatureBadge`
- Each has `.jsx`, `.d.ts`, `.prompt.md`, and a `@dsCard` HTML in its directory.

**Foundations** (`guidelines/`) — specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**UI kits** (`ui_kits/`)
- `website/` — interactive marketing landing page (hero → credentials → masterplan → financing plans → contact → footer).

**Templates** (`templates/`)
- `social-post/` — `SocialPost.dc.html`, a 1080×1350 promo-post starting point (editable inline).
