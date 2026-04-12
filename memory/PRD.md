# SalesGen Nexus - PRD

## Original Problem Statement
User requested:
1. Client signup page when clicking "Hire for Scale" button
2. Affiliate signup page when clicking "Apply for Scale" button
3. Affiliate dashboard inspired by a reference screenshot

## Architecture
- **Tech Stack:** Vite + React 19 + TypeScript + TanStack Router + Tailwind CSS + shadcn/ui
- **Deployment Target:** Vercel (via Nitro plugin) + originally Cloudflare Workers
- **Type:** Frontend-only application (no backend)
- **Package Manager:** Bun (originally), Yarn (in Emergent env)

## Core Requirements
- Landing page with CTA buttons linking to role-specific signup pages
- Client signup form with company-focused fields
- Affiliate signup form with individual-focused fields
- Affiliate dashboard with financial overview, campaigns, and activity feed

## What's Been Implemented (Jan 12, 2026)

### Session 1: Signup Pages
- Created `/signup/client` - Client signup page (Company Name, Business Email, Contact Person, Phone, Company Size, Industry, Password)
- Created `/signup/affiliate` - Affiliate signup page (First/Last Name, Email, Phone, Experience Level, Area of Expertise, LinkedIn/Portfolio URL, Password)
- Updated CTA buttons in CtaSection.tsx to use TanStack Router `<Link>` components
- Fixed routing: Converted `/signup` to a layout route with `<Outlet />` and moved generic signup to `/signup/index.tsx`

### Session 2: Vercel Deployment Fix
- Disabled Cloudflare Workers plugin in vite config
- Added Nitro plugin for Vercel-compatible SSR output
- Configured `NITRO_PRESET=vercel` for build

### Session 3: Affiliate Dashboard
- Created `/dashboard/affiliate` - Full affiliate dashboard inspired by reference screenshot
- Sections: Available Balance, Request Payout, Payout Schedule, Weekly Conversion Trend chart, High-Yield Campaigns, Priority Support, Platform Updates
- Bottom navigation bar with HOME, CAMPAIGNS, PAYOUTS, SUPPORT tabs
- Floating action button (FAB)
- Mobile-first responsive design with dark theme
- Uses recharts for bar chart visualization

## File Structure
```
/app/src/routes/
├── __root.tsx           # Root layout
├── index.tsx            # Landing page
├── login.tsx            # Login page
├── signup.tsx           # Signup layout (renders Outlet)
├── signup/
│   ├── index.tsx        # Generic signup page
│   ├── client.tsx       # Client signup form
│   └── affiliate.tsx    # Affiliate signup form
└── dashboard/
    └── affiliate.tsx    # Affiliate dashboard
```

## Prioritized Backlog

### P0 (Critical)
- N/A - Core features implemented

### P1 (High)
- Backend API integration for form submissions
- User authentication (login/signup functionality)
- Client dashboard page

### P2 (Medium)
- Campaign management pages
- Payout history and tracking
- Real-time data for dashboard charts
- Admin panel

### P3 (Low/Future)
- Email notifications
- Dark/light theme toggle
- Multi-language support
- Mobile app (React Native)

## Next Tasks
1. Push latest changes to GitHub for Vercel deployment
2. Add backend API for signup form submissions
3. Implement authentication flow
4. Build client dashboard
5. Add campaign management features
