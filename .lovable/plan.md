

# Add About Us, Contact pages + Footer with copyright

## What will be built

### 1. New route: `/about` (`src/routes/about.tsx`)
A dedicated About Us page with the same dark futuristic aesthetic (uses `Navbar`, `Footer`, `CursorGlow`):
- Hero band: "About SalesGen" with tagline
- "Our Story" section — origins of the platform
- "Mission & Values" — 3-card grid (Performance, Transparency, Global Reach) using existing glass/glow styling
- "By the Numbers" — stats row (Affiliates, Countries, Commission paid, Platform fee 5%)
- Per-route SEO `head()` with unique title, description, og:title, og:description

### 2. New route: `/contact` (`src/routes/contact.tsx`)
Contact details + a simple contact form (UI only, no backend wiring this turn):
- Heading + intro copy
- Contact info cards: Email (`hello@salesgen.com`), Support (`support@salesgen.com`), Business hours, HQ address placeholder
- Social links row (LinkedIn, X/Twitter, GitHub) using `lucide-react` icons
- Contact form: Name, Email, Subject, Message with Send button (toast success on submit, no API call)
- Per-route SEO `head()`

### 3. Expanded `Footer.tsx` (replaces current minimal footer)
4-column layout on desktop, stacked on mobile, with bottom "All rights reserved" bar:
- **Brand column**: SALESGEN logo + short tagline + social icons
- **Product**: Mission, Infrastructure, Vision (hash links to `/`)
- **Company**: About (`/about`), Contact (`/contact`), Careers (placeholder `#`)
- **Legal**: Privacy, Terms, Cookies (placeholders `#`)
- Divider
- Bottom bar: `© {year} SalesGen. All rights reserved.` on the left, "Built for the future of affiliate performance" on the right
- Keep existing top gradient line + dark theme

### 4. Navbar update (`src/components/Navbar.tsx`)
Add **About** and **Contact** as `<Link>` items in the desktop nav (alongside Mission/Infrastructure/Vision) and in the mobile menu, so the new pages are reachable from every page.

### 5. Fix existing build errors
`src/routes/signup/affiliate.tsx` and `src/routes/signup/client.tsx` currently do:
```ts
import { createClient } from "@/integrations/supabase/client";
```
But the client file only exports `supabase`. Fix by changing both imports to:
```ts
import { supabase } from "@/integrations/supabase/client";
```
and replacing any `const supabase = createClient()` calls inside those files with direct use of the imported `supabase` instance.

## Technical notes
- All new routes use `createFileRoute` with the flat naming convention (`about.tsx`, `contact.tsx`) — TanStack Router auto-generates `routeTree.gen.ts`, no manual edit.
- Each route renders `<Navbar />` + page content + `<Footer />` + `<CursorGlow />` to match the index page shell.
- Reuse existing design tokens: `glass`, `glow-border`, `text-gradient`, `bg-dot-grid`, `font-heading`, primary `oklch` accent.
- Contact form uses local `useState` + `sonner` toast (already used in Navbar) — no Supabase write this turn.
- No new dependencies required.

## Files
**Create**: `src/routes/about.tsx`, `src/routes/contact.tsx`
**Modify**: `src/components/Footer.tsx`, `src/components/Navbar.tsx`, `src/routes/signup/affiliate.tsx`, `src/routes/signup/client.tsx`

