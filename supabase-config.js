
const SUPABASE_URL = "https://zpritguaadtqikrpkavt.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_90LT7v3x6VA_Yhcr6iUC4w_T61Rx04o";

window.mathxSupabaseConfig = {
  url: SUPABASE_URL,
  key: SUPABASE_PUBLISHABLE_KEY
};

const { createClient } = supabase;

window.mathxSupabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
