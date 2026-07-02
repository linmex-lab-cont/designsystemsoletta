The primary call-to-action. Pill-shaped by default; `primary` is marine, `accent` is the coral "Contáctame" CTA.

```jsx
<Button variant="accent" leftIcon={<PhoneIcon/>}>Contáctame</Button>
<Button variant="primary">Conoce los lotes</Button>
<Button variant="outline">Contáctame para más información</Button>
```

- Variants: `primary` (marine solid), `accent` (coral solid), `outline` (marine hairline), `ghost`, `link`.
- Sizes `sm | md | lg`; `shape="rounded"` for an 8px radius instead of a pill.
- Use `accent` sparingly — it's the single high-intent CTA per view. Reserve marine for primary navigation/confirm actions.
