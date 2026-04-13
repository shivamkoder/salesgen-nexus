

# Supabase Authentication Setup for SalesGen

## Current State
- Signup (`/signup`) and Login (`/login`) pages exist with full UI but no backend logic
- No Supabase client library is installed
- No auth integration files exist yet
- You confirmed: no profile table needed, just basic auth

## What I Will Build

### 1. Install Supabase client library
Add `@supabase/supabase-js` as a dependency.

### 2. Create Supabase client file
Create `src/integrations/supabase/client.ts` that initializes the Supabase browser client using `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` environment variables (these should already be available from your Vercel-Supabase integration).

### 3. Create auth helper hooks
Create `src/hooks/use-auth.ts` with:
- `useAuth()` hook that tracks the current user session via `onAuthStateChange`
- Exposes `user`, `session`, `isLoading`, `signUp`, `signIn`, `signOut`

### 4. Wire up the Signup page (`/signup/index.tsx`)
- Add controlled state for all form fields (first name, last name, email, password)
- On submit: call `supabase.auth.signUp({ email, password })` with `emailRedirectTo`
- Show loading state on the button, display error/success toast messages
- Disable submit until terms checkbox is agreed

### 5. Wire up the Login page (`/login.tsx`)
- Add controlled state for email and password
- On submit: call `supabase.auth.signInWithPassword({ email, password })`
- Show loading/error feedback
- On success: redirect to `/` (or a future dashboard)

### 6. Update Navbar with auth-aware state
- Show "Log out" button when user is signed in, "Log in / Get Started" when not
- Use the `useAuth` hook

### 7. Add toast notifications
Install `sonner` (already likely available via the existing Sonner component) for success/error feedback on auth actions.

---

## Technical Details

**Supabase client setup:**
```typescript
// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)
```

**Auth hook pattern:**
```typescript
// src/hooks/use-auth.ts
// Uses onAuthStateChange listener (set up BEFORE getSession)
// Returns { user, session, isLoading, signUp, signIn, signOut }
```

**Signup call:**
```typescript
await supabase.auth.signUp({
  email,
  password,
  options: { emailRedirectTo: window.location.origin }
})
```

**Login call:**
```typescript
await supabase.auth.signInWithPassword({ email, password })
```

**Files to create:**
- `src/integrations/supabase/client.ts`
- `src/hooks/use-auth.ts`

**Files to modify:**
- `src/routes/signup/index.tsx` (wire form to signUp)
- `src/routes/login.tsx` (wire form to signIn)
- `src/components/Navbar.tsx` (auth-aware buttons)

