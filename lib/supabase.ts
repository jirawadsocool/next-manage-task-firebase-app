import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create mock or real client based on environment
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    if (typeof window === 'undefined') {
      // Server-side: return mock client if no env vars
      console.warn('Supabase credentials not found during SSR, using mock client');
      return {
        storage: {
          from: () => ({
            upload: async () => ({ data: null, error: new Error('Mock client') }),
            getPublicUrl: () => ({ data: { publicUrl: '' } })
          })
        }
      };
    }
    // Client-side: require env vars
    throw new Error('Missing Supabase credentials in client');
  }
  // Create real client when env vars exist
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();
