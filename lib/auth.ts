import { supabase } from "./supabase"
import type { User } from "../types/project"

// Check if Supabase is properly configured
const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export class AuthService {
  static async signUp(email: string, password: string, name: string) {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - simulate successful signup
        const demoUser = {
          id: `demo-${Date.now()}`,
          email,
          name,
        }

        // Store in localStorage for demo
        localStorage.setItem("demo-user", JSON.stringify(demoUser))

        return {
          user: demoUser,
          session: { access_token: "demo-token" },
        }
      }

      // Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (authError) throw authError

      if (authData.user) {
        // Create user profile in our users table
        const { error: profileError } = await supabase.from("users").insert({
          id: authData.user.id,
          email,
          name,
        })

        if (profileError) throw profileError

        return {
          user: {
            id: authData.user.id,
            email,
            name,
          },
          session: authData.session,
        }
      }

      throw new Error("Failed to create user")
    } catch (error) {
      console.error("Sign up error:", error)
      throw error
    }
  }

  static async signIn(email: string, password: string) {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - simulate successful signin
        const demoUser = {
          id: `demo-${email.replace("@", "-").replace(".", "-")}`,
          email,
          name: email.split("@")[0],
        }

        // Store in localStorage for demo
        localStorage.setItem("demo-user", JSON.stringify(demoUser))

        return {
          user: demoUser,
          session: { access_token: "demo-token" },
        }
      }

      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) throw authError

      if (authData.user) {
        // Get user profile from our users table
        const { data: profile, error: profileError } = await supabase
          .from("users")
          .select("*")
          .eq("id", authData.user.id)
          .single()

        if (profileError) throw profileError

        return {
          user: {
            id: profile.id,
            email: profile.email,
            name: profile.name,
          },
          session: authData.session,
        }
      }

      throw new Error("Failed to sign in")
    } catch (error) {
      console.error("Sign in error:", error)
      throw error
    }
  }

  static async signOut() {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - clear localStorage
        localStorage.removeItem("demo-user")
        localStorage.removeItem("demo-projects")
        return
      }

      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error("Sign out error:", error)
      throw error
    }
  }

  static async getCurrentUser(): Promise<User | null> {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - get from localStorage
        const demoUser = localStorage.getItem("demo-user")
        return demoUser ? JSON.parse(demoUser) : null
      }

      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session?.user) return null

      const { data: profile, error } = await supabase.from("users").select("*").eq("id", session.user.id).single()

      if (error) throw error

      return {
        id: profile.id,
        email: profile.email,
        name: profile.name,
      }
    } catch (error) {
      console.error("Get current user error:", error)
      return null
    }
  }

  static onAuthStateChange(callback: (user: User | null) => void) {
    if (!isSupabaseConfigured) {
      // Demo mode - check localStorage periodically
      const checkAuth = () => {
        const demoUser = localStorage.getItem("demo-user")
        callback(demoUser ? JSON.parse(demoUser) : null)
      }

      checkAuth() // Initial check

      // Return a mock subscription
      return {
        data: {
          subscription: {
            unsubscribe: () => {},
          },
        },
      }
    }

    return supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        try {
          const { data: profile, error } = await supabase.from("users").select("*").eq("id", session.user.id).single()

          if (error) throw error

          callback({
            id: profile.id,
            email: profile.email,
            name: profile.name,
          })
        } catch (error) {
          console.error("Auth state change error:", error)
          callback(null)
        }
      } else {
        callback(null)
      }
    })
  }
}
