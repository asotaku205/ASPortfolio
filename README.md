# ASPortfolio

Portfolio mot trang, nen toi, cua Anh Son - frontend developer intern tai GDT Tech.

- React 18 + Vite 5 + Tailwind CSS 3 + TypeScript
- GSAP (entrance, marquee, ScrollTrigger parallax) + Framer Motion
- hls.js cho video nen HLS, co fallback HLS native
- react-router-dom, tailwindcss-animate

Du an that: AniMan, OrderTower Dashboard, Social Media, AS-Study. So lieu that: 4+ du an, 20 ky nang, 2 nen tang freelance.

## Cau truc

```
index.html            Entry Vite, nap Google Fonts Inter + Instrument Serif
src/main.tsx          Bootstrap React + BrowserRouter (basename /ASPortfolio/)
src/App.tsx           Trang portfolio: loading, nav, hero, work, journal,
                      explorations, stats, contact
src/index.css         Bien CSS HSL, .accent-gradient, keyframes, halftone
src/data/content.ts   Toan bo noi dung that cua Son
src/components/
  LoadingScreen.tsx   Dem 000-100 trong 2700ms, chu xoay 900ms
  HlsVideo.tsx        Video HLS qua hls.js, fallback native
  Navbar.tsx          Nav pill noi, theo doi section dang xem
  Hero.tsx            Ten, vai tro xoay 2s, GSAP entrance, scroll indicator
  SelectedWorks.tsx   Bento grid 7/5/5/7, hover overlay
  Journal.tsx         4 bai viet dang pill
  Explorations.tsx    Parallax 300vh, pin center, lightbox
  Stats.tsx           3 cot so lieu that
  Contact.tsx         Resume, ky nang, video lat doc, marquee, lien he
```

## Chay local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy len GitHub Pages

Vao Settings -> Pages, chon Deploy from a branch, branch main, thu muc root.
Hoac dung GitHub Actions build tu source. Trang chay o
`https://asotaku205.github.io/ASPortfolio/`.

Luu y: ban build ra `dist/` khong commit len repo; chi commit source.
