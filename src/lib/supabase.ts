import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Marketing site Supabase client. Talks only to the isolated `quote_requests`
// table (public insert-only via RLS) in the knod-event-import project.
// Env vars are trimmed to avoid trailing-whitespace bugs.
const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL ?? "").trim();
const supabaseAnonKey = (import.meta.env.VITE_SUPABASE_ANON_KEY ?? "").trim();

// Guard: if env is missing (e.g. not set on a deploy), export null instead of
// throwing at import time, so a misconfig never white-screens the whole site.
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export interface QuoteRequest {
  name: string;
  email: string;
  organization?: string;
  website?: string;
  event_type?: string;
  event_duration?: string;
  attendee_count?: string;
  plan?: string;
  source?: string;
}

// Inserts a quote request. Returns an error message string on failure, or null on success.
export async function submitQuoteRequest(payload: QuoteRequest): Promise<string | null> {
  if (!supabase) {
    return "Our quote form is temporarily unavailable. Please email sales@knod.ai.";
  }
  const { error } = await supabase.from("quote_requests").insert(payload);
  if (error) {
    return "Something went wrong submitting your request. Please try again or email sales@knod.ai.";
  }
  return null;
}

export interface DemoRequest {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  message?: string;
  source?: string;
}

// Inserts a demo request. Returns an error message string on failure, or null on success.
export async function submitDemoRequest(payload: DemoRequest): Promise<string | null> {
  if (!supabase) {
    return "Our demo form is temporarily unavailable. Please email sales@knod.ai.";
  }
  const { error } = await supabase.from("demo_requests").insert(payload);
  if (error) {
    return "Something went wrong submitting your request. Please try again or email sales@knod.ai.";
  }
  return null;
}
