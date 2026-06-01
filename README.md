# Westminster Security

Landing page for **Westminster Security** — a premium, full-spectrum security provider serving the Waterloo Region. The site presents three core capabilities (personnel, armored vehicles, protective gear) and routes all enquiries through WhatsApp.

Built with **React 19** + **Vite 8**. Single-page, no router, no backend.

Live contact: WhatsApp

---

## Stack

- React 19 (function components, hooks only)
- Vite 8 (dev server + production build)
- Plain CSS — no preprocessor, no UI kit, no Tailwind
- Google Fonts: Crimson Text (display / serif), Figtree (body / sans)

No state management library, no router, no analytics. The contact form opens WhatsApp with the message pre-filled — there is no server.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint
```

## Project structure

```
src/
  App.jsx          # the single page — nav, hero, services, why, testimonials, contact, footer
  App.css          # all component styles
  index.css        # root variables, font tokens, body reset
  main.jsx         # React entry
  assets/
    personnel-umbrella.jpg   # 01 — Personnel
    armored-vehicle.jpg      # 02 — Hardware
    protective-gear.jpg      # 03 — Equipment
    communication.svg        # WhatsApp / contact icon
public/
  favicon.svg      # brand-gold "W" mark
index.html         # loads Crimson Text + Figtree
```

## Design tokens

Defined on `:root` in `src/index.css` and on `.ws-site` in `src/App.css`:

| Token        | Value                              | Used for                        |
| ------------ | ---------------------------------- | ------------------------------- |
| `--ink`      | `#1c1c1e`                          | Primary text                    |
| `--ink-soft` | `#6b6b70`                          | Secondary text                  |
| `--ink-faint`| `#a9a9ad`                          | Muted text, dashed borders      |
| `--line`     | `#c9c9ce`                          | Dividers                        |
| `--paper`    | `#fbfbf9`                          | Page background                 |
| `--accent`   | `oklch(0.72 0.09 75)` (warm gold)  | Brand mark dot, CTA, links      |
| `--serif`    | `'Crimson Text'`                   | Display / wordmark / headlines  |
| `--sans`     | `'Figtree'`                        | Body / nav / buttons            |
| `--max-w`    | `1280px`                           | Content cap                     |
| `--gutter`   | `70px` (desktop), `28 / 20 / 16`   | Side padding per breakpoint     |
| `--pad-x`    | `max(--gutter, (100% - --max-w)/2)`| Side padding for every section  |

The `--pad-x` formula lets section *backgrounds* (dark contact, cream "Why") run edge-to-edge while *content* stays centered at 1280 px on wide monitors.

## Layout overview

1. **Sticky nav** — wordmark `WESTMINSTER.` + capabilities / why / contact links.
2. **Hero** — eyebrow, headline, lede, dual CTAs (WhatsApp + capabilities anchor).
3. **Trust strip** — fully-licensed marker + three pillar labels.
4. **Services** — three alternating photo/text rows (Personnel · Hardware · Equipment). Photos run edge-to-edge of the viewport; copy text aligns to the same 1280-centered frame as the rest of the page.
5. **Why Westminster** — full-bleed cream panel, headline, lede, three audience pillars.
6. **Testimonials** — three anonymized quote cards (placeholders pending real client approval).
7. **Contact** — dark full-bleed panel with WhatsApp/phone meta on the left and a form on the right. The form submits via `window.open` to `wa.me/...` with a pre-filled message; there is no server.
8. **Footer** + a phone-only **WhatsApp FAB** that appears at viewport widths ≤ 600 px.

## Animations

A tiny `useReveal()` hook in `App.jsx` uses `IntersectionObserver` to add `.is-visible` to any element with a `data-reveal` attribute when it enters the viewport. The hero animates on load via the `.ws-rise` class with staggered `--delay` values.

`prefers-reduced-motion: reduce` disables all entry animations.

## Responsive breakpoints

| Range          | `--gutter` | Key changes                                                                 |
| -------------- | ---------- | --------------------------------------------------------------------------- |
| > 900 px       | 70 px      | Two-column services & contact, three-column testimonials & pillars          |
| ≤ 900 px       | 28 px      | Stacks all 2/3-column grids, hides nav links                                |
| ≤ 600 px       | 20 px      | Full-width CTA buttons, FAB appears, form inputs at 16 px (no iOS zoom)     |
| ≤ 360 px       | 16 px      | Tighter section padding, smaller FAB                                        |

Headlines use `clamp()` to scale fluidly between phone and desktop.

## Changing the WhatsApp number

Edit the two constants at the top of `src/App.jsx`:

```js
const WHATSAPP_NUMBER  = '6134834356'    // E.164 minus country code
const WHATSAPP_DISPLAY = '613-483-4356'  // shown in copy + footer
```

The country code (`1`) is hardcoded in the link templates.

## Deploy

`npm run build` produces a fully static bundle in `dist/`. Drop it on any static host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, GitHub Pages, etc.). No environment variables, no server.

## License

Private — for Westminster Security use only.
