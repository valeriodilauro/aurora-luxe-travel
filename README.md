# AURORA LUXE TRAVEL

> Ultra-premium concierge travel experiences — Beyond First Class.

A production-ready, visually stunning single-page website for a fictional luxury travel brand. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

![Aurora Luxe Travel](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=630&fit=crop)

## ✨ Features

- **Futuristic luxury design** — Dark mode, glassmorphism, neon accents, animated gradients
- **Fully responsive** — Mobile-first, looks great on iPhone through 4K displays
- **Framer Motion animations** — Scroll reveals, hover effects, entrance animations
- **6 Destination cards** with modal detail views
- **5 Signature Experiences** — alternating layout
- **3 Membership Tiers** — Silver / Black / Obsidian
- **Testimonials section**
- **Concierge form** with client-side validation
- **Sticky glass navbar** with active section tracking
- **SEO metadata** — title, description, OpenGraph
- **Accessible** — semantic headings, ARIA labels, focus states, keyboard navigation
- **Performance-optimized** — lazy-loaded images, `next/image` with avif/webp

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/ivanfioravanti/aurora-luxe-travel.git
cd aurora-luxe-travel

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📦 Build

```bash
npm run build
npm start
```

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org) | React framework, App Router |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://framer.com/motion) | Animations |
| [React Icons](https://react-icons.github.io) | Icon library |
| [Google Fonts](https://fonts.google.com) | Space Grotesk + Inter |

## 🖼 Image Credits

All images are sourced from **Unsplash** (free to use under the Unsplash License):

| Image | Source URL |
|---|---|
| Hero (beach/ocean) | [unsplash.com/photo-1507525428034-b723cf961d3e](https://unsplash.com/photos/1507525428034-b723cf961d3e) |
| Maldives resort | [unsplash.com/photo-1514282401047-c79dbd652761](https://unsplash.com/photos/1514282401047-c79dbd652761) |
| Tokyo skyline | [unsplash.com/photo-1540959733332-eab4deabeeaf](https://unsplash.com/photos/1540959733332-eab4deabeeaf) |
| Swiss Alps | [unsplash.com/photo-1502784040885-1c3a12e0eb8f](https://unsplash.com/photos/1502784040885-1c3a12e0eb8f) |
| Dubai | [unsplash.com/photo-1512453979798-5ea266f8880c](https://unsplash.com/photos/1512453979798-5ea266f8880c) |
| Safari | [unsplash.com/photo-1516426122078-c23e76319801](https://unsplash.com/photos/1516426122078-c23e76319801) |
| Amalfi Coast | [unsplash.com/photo-1534308983496-4fabb1a015ee](https://unsplash.com/photos/1534308983496-4fabb1a015ee) |
| Private jet | [unsplash.com/photo-1540962351504-03099e0a754b](https://unsplash.com/photos/1540962351504-03099e0a754b) |
| Yacht | [unsplash.com/photo-1567899378494-47b22a2ae96a](https://unsplash.com/photos/1567899378494-47b22a2ae96a) |
| Dining | [unsplash.com/photo-1414235077428-338989a2e8c0](https://unsplash.com/photos/1414235077428-338989a2e8c0) |
| Stargazing | [unsplash.com/photo-1519681393784-d120267933ba](https://unsplash.com/photos/1519681393784-d120267933ba) |
| Wellness | [unsplash.com/photo-1544161515-4ab6ce6db874](https://unsplash.com/photos/1544161515-4ab6ce6db874) |

Images are loaded via `next/image` with `remotePatterns` configured in `next.config.ts`.

## 📁 Project Structure

```
aurora-luxe-travel/
├── app/
│   ├── layout.tsx          # Root layout with fonts & SEO
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # Tailwind + custom styles
│   ├── not-found.tsx       # 404 page
│   └── destinations/[slug]/
│       └── page.tsx        # Per-destination detail page
├── components/
│   ├── Navbar.tsx          # Sticky glass navbar + mobile menu
│   ├── Hero.tsx            # Hero section with aurora blobs
│   ├── DestinationGrid.tsx # 6 destination cards + modal
│   ├── ExperienceList.tsx  # Signature experiences
│   ├── Tiers.tsx           # Membership tiers
│   ├── Testimonials.tsx    # Guest testimonials
│   ├── ConciergeForm.tsx   # Contact form with validation
│   └── Footer.tsx          # Footer + image credits
├── data/
│   ├── destinations.ts     # Destination data & types
│   └── experiences.ts      # Experience data & types
├── utilities/
│   └── cn.ts               # Tailwind class merger
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## License

MIT
