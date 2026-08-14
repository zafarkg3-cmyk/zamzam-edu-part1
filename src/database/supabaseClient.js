import { createClient } from "@supabase/supabase-js";

// Cloud database connection (Supabase). Set these in `.env` — see
// `.env.example`. The anon key only grants what the RLS policies in
// `database/schema.sql` allow, so it's safe to ship in client code.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Missing Supabase credentials. Copy .env.example to .env and fill in " +
      "VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY from your Supabase project settings."
  );
}

// IMPORTANT: force every request this client makes to skip the browser's
// HTTP cache entirely. Without this, some browsers (especially on mobile,
// or when the app is installed as a PWA) can silently serve a cached copy
// of a GET response instead of hitting Supabase again — which looks
// exactly like "the leaderboard isn't updating" even though the database
// itself is correct and up to date.
const noCacheFetch = (input, init = {}) =>
  fetch(input, { ...init, cache: "no-store" });

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "", {
  global: { fetch: noCacheFetch },
});
