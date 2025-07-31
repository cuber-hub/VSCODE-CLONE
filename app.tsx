"use client"

import { useState, useEffect } from "react"
import { LoginForm } from "./components/login-form"
import { Dashboard } from "./components/dashboard"
import CodeEditor from "./code-editor"
import { AuthService } from "./lib/auth"
import { DatabaseService } from "./lib/database"
import type { User, Project } from "./types/project"
import { Loader2 } from "lucide-react"

export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      try {
        const currentUser = await AuthService.getCurrentUser()
        if (currentUser) {
          setUser(currentUser)
        }
      } catch (error) {
        console.error("Auth check error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()

    // Listen for auth state changes
    const {
      data: { subscription },
    } = AuthService.onAuthStateChange((user) => {
      setUser(user)
      if (!user) {
        setCurrentProject(null)
      }
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])

  const handleLogin = (userData: User) => {
    setUser(userData)
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentProject(null)
  }

  const handleOpenProject = (project: Project) => {
    setCurrentProject(project)
  }

  const handleBackToDashboard = () => {
    setCurrentProject(null)
  }

  const handleSaveProject = async (updatedProject: Project) => {
    if (!user) return

    try {
      const savedProject = await DatabaseService.updateProject(updatedProject.id, updatedProject, user.id)
      setCurrentProject(savedProject)
    } catch (error) {
      console.error("Save project error:", error)
      // You might want to show an error message to the user here
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="flex items-center gap-2 text-white">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  if (!user) {
    return <LoginForm onLogin={handleLogin} />
  }

  if (currentProject) {
    return (
      <CodeEditor
        project={currentProject}
        user={user}
        onBackToDashboard={handleBackToDashboard}
        onSaveProject={handleSaveProject}
      />
    )
  }

  return <Dashboard user={user} onLogout={handleLogout} onOpenProject={handleOpenProject} />
}
