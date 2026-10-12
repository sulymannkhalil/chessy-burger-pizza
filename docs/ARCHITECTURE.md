# Chessy Pizza and Burger — Architecture

## Folder structure

```text
cheesy-burger-pizza/
├── public/
│   ├── branding/
│   ├── images/{hero,popular,menu,about,gallery}/
│   └── videos/
├── src/
│   ├── app/                  # App Router pages & metadata
│   ├── components/
│   │   ├── ui/               # Reusable presentational primitives
│   │   ├── layout/           # Navbar, Footer, SiteShell
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   └── menu/
│   │   └── motion/           # Lenis, Reveal, curtains
│   ├── config/               # Restaurant + design tokens
│   ├── data/                 # Menu, nav, gallery, reviews, copy
│   ├── hooks/
│   ├── lib/
│   └── types/
└── docs/
```

The App Router lives under `src/app`. `public/` remains at the project root.

## Component responsibilities

### UI (`components/ui`)

- `Button`, `Container`, `SectionHeading`, `MediaPlaceholder`, `FoodCard`, `Logo`, `NavigationLink`, `SectionWrapper`

### Layout (`components/layout`)

- `Navbar` / `MobileNavigation` — shared chrome + glass scroll state  
- `Footer` — mega footer from shared config  
- `SiteShell` — wraps pages with smooth scroll + chrome  

### Home sections

`Hero`, `PopularItems`, `MenuPreview`, `About`, `Gallery`, `GoogleReviews`, `LocationContact`

### Menu sections

`MenuHero`, `MenuCategories`, `MenuListing`, `MenuContactCTA`

## Shared UI architecture

- Brand colors exposed as Tailwind tokens (`brand-primary`, etc.) via CSS variables in `globals.css`.
- Typography utilities: `font-display`, `font-accent`, `font-body`.
- `cn()` merges `clsx` + `tailwind-merge`.
- Pages compose sections; they do not own section markup.

## Data management

| File | Purpose |
|---|---|
| `config/restaurant.ts` | Name, contact, hours, socials, maps/reviews URLs |
| `config/design.ts` | Brand/motion/layout reference constants |
| `data/menu.ts` | Categories, items, popular/featured selectors |
| `data/navigation.ts` | Main + footer links |
| `data/gallery.ts` | Gallery placeholder slots |
| `data/reviews.ts` | Reviews integration boundary (`isLive`) |
| `data/content.ts` | Section copy + hero/about media labels |

Components must not hardcode business facts. Update config/data only.

## Server / Client boundaries

**Server Components (default):** pages, most section shells that only compose data (`MenuPreview`, `MenuListing`, `LocationContact`, docs-driven copy).

**Client Components:** interaction/animation only —

- Navbar / MobileNavigation / NavigationLink  
- SmoothScroll, Reveal, ImageRevealCurtain  
- Hero, PopularItems, About, Gallery, MenuCategories  
- `error.tsx`

## Animation architecture

- **Lenis** + GSAP ticker sync in `SmoothScroll`.
- **ScrollTrigger** for reveals, curtains, parallax.
- **Embla** for popular carousel drag/swipe.
- CSS transitions for hover/focus.
- `usePrefersReducedMotion` disables/simplifies motion.
- Effects clean up via `gsap.context` / killed tweens / unsubscribed listeners.

## Media handling

- `MediaPlaceholder` preserves aspect ratio, shows branded placeholder when `src` is absent, and swaps to `next/image` or video when assets exist.
- About uses a single placeholder from `aboutContent.media`.

## Integration boundaries

- Google Reviews: `data/reviews.ts` with `isLive: false` until credentials/listing confirmed. No client-exposed secrets.
- Maps: embed/directions URLs only from `config/restaurant.ts`.

## Maintainability decisions

- `src/` migration for clearer separation from tooling configs.
- Typed menu/review models in `types/`.
- Placeholder strings prefixed with `PENDING` or `ATTACH THE IMAGE` so incomplete content is obvious.
- No ordering/cart abstractions introduced.
