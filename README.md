# Suraj Kumar Sah — Portfolio

A futuristic Himalayan-themed 3D portfolio built with **Next.js 15**, **React Three Fiber**, **Framer Motion**, and **Tailwind CSS**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy env vars
cp .env.example .env.local

# 3. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # Contact form API (Resend or console fallback)
│   ├── globals.css            # Design tokens, utility classes
│   ├── layout.tsx             # Root layout + font links + SEO metadata
│   └── page.tsx               # Home page — assembles all sections
│
├── components/
│   ├── 3d/
│   │   ├── HeroScene.tsx      # Canvas wrapper — lights, fog, environment
│   │   ├── MountainRange.tsx  # Procedural low-poly Himalayan ridge (pure Three.js)
│   │   ├── HoloName.tsx       # Rotating holographic 3D name text
│   │   ├── TechIcons.tsx      # Orbiting tech stack chips
│   │   └── FloatingLaptop.tsx # Low-poly laptop for About section
│   │
│   ├── sections/
│   │   ├── Hero.tsx           # Full-screen 3D hero + overlay
│   │   ├── About.tsx          # Bio + stats + 3D laptop
│   │   ├── Skills.tsx         # Tabbed skill categories + animated bars
│   │   ├── Projects.tsx       # 5-project card grid
│   │   ├── ProjectCard.tsx    # Individual 3D-tilt card (mouse tracking)
│   │   ├── ProjectModal.tsx   # Animated case study modal
│   │   ├── Journey.tsx        # Education/certs timeline
│   │   └── Contact.tsx        # Validated contact form + embedded map
│   │
│   └── ui/
│       ├── Navbar.tsx         # Top nav + floating side scrollspy
│       ├── LoadingScreen.tsx  # SVG mountain loading animation
│       ├── CustomCursor.tsx   # Cyan ring cursor (desktop only)
│       └── Footer.tsx
│
└── data/
    └── content.ts             # ← ALL your copy lives here. Edit this first.
```

---

## Customising Your Content

**All** text, links, project details, skills, and timeline entries are in one file:

```
src/data/content.ts
```

Edit `profile`, `skills`, `projects`, and `timeline` — nothing else needs to change.

---

## 3D Name Text Setup (HoloName.tsx)

The 3D name in the hero uses `Text3D` from `@react-three/drei`, which requires a
**typeface JSON font file** at `public/fonts/space-grotesk-bold.json`.

Generate it in 30 seconds:

1. Go to [https://gero3.github.io/facetype.js/](https://gero3.github.io/facetype.js/)
2. Upload **SpaceGrotesk-Bold.ttf** (download from [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk))
3. Click **Convert** → download the JSON
4. Save it to `public/fonts/space-grotesk-bold.json`

Without this file the 3D text won't render — the rest of the site still works fine.

---

## Contact Form Email

By default the form logs submissions to the server console.

To actually send emails with [Resend](https://resend.com) (free tier: 3,000 emails/month):

```bash
npm install resend
```

Then in `.env.local`:

```
RESEND_API_KEY=re_your_key_here
CONTACT_TO_EMAIL=suraj27227@gmail.com
```

Uncomment the Resend block inside `src/app/api/contact/route.ts`.

---

## Resume PDF

Put your resume at:

```
public/resume/Suraj-Kumar-Sah-Resume.pdf
```

The **Download Resume** button in the navbar links there automatically.

---

## Deployment

### Vercel (recommended — zero config)

```bash
npm install -g vercel
vercel
```

Add your `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in the Vercel dashboard under
**Settings → Environment Variables**.

### Netlify

```bash
npm run build
# Upload the .next folder or connect the GitHub repo in the Netlify dashboard.
```

---

## Performance Notes

- The 3D hero canvas uses `dpr={[1, 1.75]}` — capped at 1.75× for mobile battery life.
- All 3D components are `dynamic(() => import(...), { ssr: false })` to avoid hydration mismatches.
- Three.js geometry is built inside `useMemo` to prevent re-creation on each render.
- `Stars` and `Environment` are wrapped in `<Suspense>` so they don't block the first paint.
- The `@react-three/postprocessing` package is installed but not active by default — uncomment bloom in `HeroScene.tsx` if you want the extra glow (costs ~5 fps on low-end devices).

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| 3D | Three.js + @react-three/fiber + @react-three/drei |
| Animation | Framer Motion |
| Forms | React Hook Form + Zod |
| Fonts | Bunny Fonts CDN (Space Grotesk, Inter, JetBrains Mono) |

---

Made with passion in Nepal 🇳🇵
