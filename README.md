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
- `script.js` — mobile hamburger menu toggle (keeps `aria-expanded` in sync)
- `*.png` — hero, category, product and showroom images

## Preview locally

Open `index.html` in a browser, or serve the directory:

```sh
python3 -m http.server 8000
```

## Note

The WhatsApp (`wa.me`) and telephone links currently carry placeholder
numbers — replace them with the showrooms' real numbers before publishing.
