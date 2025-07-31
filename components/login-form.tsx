"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { User, Mail, Lock, Code, AlertCircle, Info } from "lucide-react"
import { AuthService } from "../lib/auth"
import type { User as UserType } from "../types/project"

interface LoginFormProps {
  onLogin: (user: UserType) => void
}

// Check if Supabase is configured
const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export function LoginForm({ onLogin }: LoginFormProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      if (isLogin) {
        const { user } = await AuthService.signIn(formData.email, formData.password)
        onLogin(user)
      } else {
        const { user } = await AuthService.signUp(formData.email, formData.password, formData.name)
        onLogin(user)
      }
    } catch (error: any) {
      console.error("Auth error:", error)
      if (!isSupabaseConfigured) {
        // In demo mode, any error means we should still proceed
        const demoUser = {
          id: `demo-${formData.email.replace("@", "-").replace(".", "-")}`,
          email: formData.email,
          name: isLogin ? formData.email.split("@")[0] : formData.name,
        }
        onLogin(demoUser)
      } else {
        setError(error.message || "An error occurred during authentication")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600 rounded-full">
              <Code className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-white">{isLogin ? "Welcome Back" : "Create Account"}</CardTitle>
          <CardDescription className="text-gray-400">
            {isLogin ? "Sign in to access your projects" : "Sign up to start coding"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSupabaseConfigured && (
            <Alert className="mb-4 bg-blue-900/20 border-blue-800 text-blue-400">
              <Info className="h-4 w-4" />
              <AlertDescription>
                Demo Mode: Supabase not configured. Data will be stored locally in your browser.
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="mb-4 bg-red-900/20 border-red-800 text-red-400">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={isSupabaseConfigured ? "Enter your email" : "demo@example.com"}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={isSupabaseConfigured ? "Enter your password" : "any password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  required
                  minLength={isSupabaseConfigured ? 6 : 1}
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
              {isLoading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(!isLogin)
                  setError(null)
                  setFormData({ name: "", email: "", password: "" })
                }}
                className="ml-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              {isSupabaseConfigured
                ? isLogin
                  ? "Use your email and password to sign in"
                  : "Create an account to save your projects"
                : "Demo mode - enter any email/password to continue"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
