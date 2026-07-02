The Soletta logo. Renders the **official uploaded logo files** — never a recreation. Recolor variants are exact tints of those files (geometry preserved).

```jsx
<Logo variant="full" color="marine" size={120} assetBase="../../assets/logo" />
<Logo variant="mark" color="coral" size={80} assetBase="../../assets/logo" />
<Logo variant="wordmark" color="white" size={32} assetBase="../../assets/logo" />
```

`size` is the rendered **height**; the wordmark is very wide (aspect ≈ 6.1), so size 32 ≈ 196px wide — use a small height for it.

- `variant`: `full` (LOGOTIPO — sunburst + wordmark), `wordmark` (LOGOTIPO SECUNDARIO), `mark` (ISOTIPO).
- `color`: `marine` (default), `black`, `white` (over photography/dark), `coral`.
- **`assetBase` must point at `assets/logo` relative to the page** (e.g. `../../assets/logo` from a component card or UI-kit screen). Defaults to `assets/logo` (project root).
- Do not stretch, recolor outside these variants, or modify the artwork. `subbrand` adds an approved wide-tracked text tag below the lockup.
