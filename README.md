# Vasavi & Lijas — a short film 🎈

> **Jaws Studios presents:** a Pixar-style scrolling love story,
> built by a guy who expresses feelings via deployed applications.

This is not a website. It's a short film about my favorite person,
shipped for **National Girlfriend Day** — funny scene by scene, sincere
right where it counts, with a post-credits surprise. Rated ★★★★★ by
her boyfriend (probably biased).

**Runtime:** forever.

## 🎬 What plays

| Scene | What happens |
| --- | --- |
| Title card | Balloons rise slowly from below and carry the title in. Yes, that's an *Up* reference. Drag them — they spring back. |
| Scene 01 — The setup | The opening lines. Short. Sincere. Slightly dramatic. |
| Scene 02 — Audience Q&A | Ten questions for the lead actress. There are no wrong answers — every tap gets a comeback. |
| Scene 03 — The footage | Eighteen frames the editor refused to cut, on a drag-to-scrub film strip. |
| Scene 04 — Original languages | Presented in Tamil and Telugu, with love in both. Subtitles included. |
| Scene 05 — Bloopers | Deleted scenes. All true. She knows. |
| Intermission | Live footage, no retakes. |
| Final scene | The sky turns to dusk, the stars come out, and the jokes stop. One take, no script. Then: The Last Frame. |
| Post-credits | The role of *My Girlfriend* is up for annual renewal. The "no" button has other plans. |

The whole page is one continuous day: the sky drifts from morning blue
through golden hour into a starry dusk as you scroll. The sun goes down
with you.

## 🛠 Built with

- [React](https://react.dev) + [Vite](https://vite.dev)
- [Framer Motion](https://motion.dev) — springs, drag physics, scroll-linked sky
- [Lenis](https://lenis.darkroom.engineering) — buttery smooth scroll
- Fredoka, Nunito Sans & Fraunces — the comedy font, the talking font, and the feelings font

No UI kit. No template. Every inch handmade, like the feelings.

## 🚀 Run it locally

```bash
cd site
npm install
npm run dev
```

Opens on `http://localhost:5900`. Best viewed on a phone — it was built
for one specific phone in particular.

## ✏️ The script

Every word — captions, Q&A, bloopers, finale lines, credits — lives in
one file: [`site/src/data.js`](site/src/data.js). Change the words,
keep the film.

Photos and videos live in [`site/public/pics`](site/public/pics).

## 📦 Deploy

```bash
cd site
npm run build
```

Drop `site/dist` on [Netlify](https://app.netlify.com/drop), or import
this repo in Netlify/Vercel with base directory `site`, build command
`npm run build`, output `dist`.

---

*The End — of the README. Not of us.*
