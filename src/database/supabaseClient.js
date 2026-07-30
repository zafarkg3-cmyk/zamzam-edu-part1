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

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "");
