# Church In The Valley — Website

Modern website rebuild for The Church In The Valley, Milton, WV.

## Stack
- Next.js 16, React 19, Tailwind CSS 4, TypeScript
- Fonts: Bebas Neue (headings) + Inter (body) via next/font/google
- Utilities: clsx (classnames), zod (form validation)

## Color Palette (Warm Burgundy + Gold)
| Token | Hex | Usage |
|-------|-----|-------|
| `church-maroon` | #5C1A22 | Nav/footer bg (darkest) |
| `church-burgundy` | #722F37 | Primary dark |
| `church-burgundy-light` | #8B3A42 | Lighter burgundy |
| `church-gold` | #C5963A | Primary accent/CTAs |
| `church-gold-light` | #D4A84B | Hover state |
| `church-gold-pale` | #F5E6C8 | Light gold bg |
| `church-cream` | #FDF8F0 | Page background |
| `church-white` | #FEFDFB | White sections |
| `church-text` | #2A1A1E | Body text |
| `church-muted` | #6B5A5E | Secondary text |

## Architecture
- `app/(marketing)/` route group wraps all pages with Nav + Footer
- `lib/constants.ts` centralizes all site data (contact, nav links, service times)
- `components/ui/` for reusable Button + SectionHeader
- `hooks/` for useScrollPosition (nav) + useIntersection (scroll animations)
- All home sections in `components/home/`
- Inner page components in `components/{page-name}/`

## Pages
| Route | Status |
|-------|--------|
| `/` | Complete — hero, welcome, service times, ministry cards, CTA |
| `/events` | Placeholder events grid |
| `/leadership` | Placeholder team grid (Joel providing content) |
| `/past-services` | Placeholder video archive |
| `/church-ordinances` | Placeholder content (Joel providing) |
| `/salvation-plan` | Placeholder content (Joel providing) |
| `/visit` | Complete — service times, map, contact form |

## Pending Content
- Leadership team names, roles, photos
- Real event data
- Church Ordinances page content (from Joel)
- Salvation Plan page content (from Joel)
- Past services videos/links
- Church exterior photo → `public/images/church-exterior.jpg`

## Deploy
Target: Vercel. Repo: TBD (not on GitHub yet).
