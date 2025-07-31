import { createClient } from "@supabase/supabase-js"

// Check if we're in a browser environment and have the required environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// For demo purposes, we'll use a mock client if environment variables are not set
let supabase: any

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} else {
  // Mock Supabase client for demo purposes
  console.warn("Supabase environment variables not found. Using mock client for demo.")

  supabase = {
    auth: {
      signUp: async () => ({
        data: { user: null, session: null },
        error: new Error("Demo mode - Supabase not configured"),
      }),
      signInWithPassword: async () => ({
        data: { user: null, session: null },
        error: new Error("Demo mode - Supabase not configured"),
      }),
      signOut: async () => ({ error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: null, error: new Error("Demo mode") }) }) }),
      insert: () => ({ select: () => ({ single: async () => ({ data: null, error: new Error("Demo mode") }) }) }),
      update: () => ({
        eq: () => ({ select: () => ({ single: async () => ({ data: null, error: new Error("Demo mode") }) }) }),
      }),
      delete: () => ({ eq: async () => ({ error: new Error("Demo mode") }) }),
      order: () => ({ eq: async () => ({ data: [], error: new Error("Demo mode") }) }),
    }),
  }
}

export { supabase }

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          html: string
          css: string
          js: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          html?: string
          css?: string
          js?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          html?: string
          css?: string
          js?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
