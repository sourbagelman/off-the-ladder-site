# Off The Ladder Construction — Static Site

Deployed on **Cloudflare Pages** for a zero-maintenance, fast, free setup.

## Structure
- `index.html` — Story page (home)
- `gallery.html` — Recent Work (embeds a Google Photos shared album)
- `contact.html` — Contact form (Formspree placeholder)
- `styles.css` — Minimal purple/gray/white theme
- `/assets` — images or logos (optional)

## Deploy (Cloudflare Pages)
1. Connect this repo to Cloudflare Pages → Framework: **None**, Build command: *(blank)*, Output dir: **/**.
2. Add a **Custom Domain**: `offtheladder.thesourboule.com`.
3. Done.

## Gallery (auto-updates from iPhone)
- Create a Google Photos **Shared album** → add photos → **Share → Create link → Embed**.
- In `gallery.html`, replace the `src` on the `<iframe>` with your embed URL.
- New photos in the album appear on the site instantly.

## Contact form
- Create a free Formspree form and replace `YOUR_FORM_ID` in `contact.html`.
