# Aggarwal Jewellers

Single-page marketing site for Aggarwal Jewellers — gold, diamond and
1-gram gold jewellery showrooms in Sector 20, Panchkula and The Mall, Solan.

## What is on the page

- Hero with WhatsApp enquiry links
- Collections grid (necklaces, earrings, bangles, rings, 1-gram gold,
  lab-grown diamonds)
- Featured pieces with per-product WhatsApp enquiry links
- Gold-rate cards (indicative rates, refreshed in store — not a live feed)
- About, Instagram reels strip, testimonials, showroom addresses and footer

## Files

- `index.html` — the whole page (sections in order: hero, trust strip,
  collections, featured, gold rate, about, reels, testimonials, visit, footer)
- `style.css` — all styling, including the mobile layout under 900px/520px
- `script.js` — mobile hamburger menu toggle: a `.menu.open` class (not
  inline styles, so resizing to desktop never strands the menu as an
  overlay); closes on nav-link click, outside tap, or Escape (Escape returns
  focus to the button); keeps `aria-expanded` in sync
- `*.png` — hero, category, product and showroom images

## Accessibility

- Skip-to-content link (first Tab stop) jumps to the collections section
- Visible `:focus-visible` outline on links and buttons; `prefers-reduced-motion`
  disables smooth scrolling, the WhatsApp pulse and hover lifts
- Mobile menu works without JavaScript: a noscript fallback shows the menu
  and hides the hamburger below 900px
- Category tiles are plain cards, not links; decorative glyphs (✨ ▶ ☎) are
  hidden from screen readers

## Preview locally

Open `index.html` in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

## Note

The WhatsApp (`wa.me`) and telephone links currently carry placeholder
numbers — replace them with the showrooms' real numbers before publishing.
