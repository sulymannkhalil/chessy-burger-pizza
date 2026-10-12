# Chessy Pizza and Burger — Product Requirements

## Project overview

Professional restaurant showcase website for **Chessy Pizza and Burger**. Visitors explore the brand, browse popular food and the full menu structure, learn about the restaurant, view Google Reviews (when connected), and find contact/location details.

This is **not** an e-commerce or ordering application.

## Website goals

- Present a bold, modern fast-food brand identity.
- Make menu exploration and visit intent easy.
- Keep content maintainable through centralized config/data.
- Remain production-ready while client media and business details are pending.

## Approved scope

### In scope

- Homepage (`/`) with nine sections (navbar through mega footer).
- Full Menu page (`/menu`).
- Shared navbar and mega footer.
- Brand design system (four colors, three fonts).
- Media placeholders until authentic assets arrive.
- GSAP + ScrollTrigger, Lenis, Embla Carousel interactions.
- SEO fundamentals, accessibility, responsive layouts.
- Documentation (`docs/PRD.md`, `docs/ARCHITECTURE.md`).

### Out of scope

- Shopping cart, add to cart, online ordering, checkout, payments.
- Customer registration/login, order tracking.
- Admin dashboard or database.
- Fabricated restaurant facts presented as real.

## Pages and sections

### Homepage `/`

1. Navbar  
2. Hero  
3. Popular Items  
4. Menu Preview  
5. About the Restaurant (exactly one media asset)  
6. Food & Restaurant Gallery  
7. Google Reviews  
8. Location & Contact  
9. Mega Footer  

### Full Menu `/menu`

1. Shared Navbar  
2. Menu Hero  
3. Category Navigation  
4. Complete Menu Listings  
5. Visit / Contact CTA  
6. Shared Mega Footer  

## Visitor flows

1. Land on hero → Explore Menu / Visit Us.  
2. Browse popular items carousel.  
3. Preview categories → open `/menu`.  
4. Read about story (single media).  
5. View gallery.  
6. See reviews section (placeholder until live).  
7. Use location/contact details / directions when supplied.  

## Brand specifications

| Token | HEX |
|---|---|
| Primary (Yellow) | `#FFC928` |
| Secondary (Red) | `#D83B32` |
| Dark (Charcoal) | `#24201E` |
| Supporting (Light Red) | `#FDE8E5` |

Fonts:

- **Archivo Black** — headings / hero / oversized words  
- **Bubblegum Sans** — accent phrases  
- **Quicksand** — body, nav, buttons  

## Media requirements

- No stock/AI/fabricated photography.
- Use styled `ATTACH THE IMAGE` / `ATTACH THE VIDEO` placeholders.
- About section: **exactly one** media asset.
- Assets land under `public/images/**` and `public/videos/`.

## Interaction requirements

- Transparent → glass navbar on scroll.
- Hero layered intro + parallax.
- Embla carousel for popular items.
- Scroll reveals, image curtains, gallery parallax.
- Sticky category nav on menu page.
- Prefer `prefers-reduced-motion` support.

## Responsive requirements

- Desktop reference ~1440px.
- Mobile reference ~390px.
- Recompose layouts; prevent horizontal overflow.

## SEO, accessibility, performance

- Page titles, meta descriptions, Open Graph.
- `robots.ts` + `sitemap.ts`.
- Semantic HTML, keyboard access, focus states.
- Next.js fonts + Image when real assets exist.
- Client JS only where interaction requires it.

## Missing client information

Replace placeholders in config/data only when verified:

- Street address, city, phone, email, WhatsApp.
- Opening hours.
- Social profile URLs.
- Google Maps embed + directions URL.
- Google Reviews URL / live integration credentials.
- Real menu categories, item names, descriptions, prices.
- Authentic images/videos and logo artwork.
- Optional structured data fields.
