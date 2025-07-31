import { supabase } from "./supabase"
import type { Project } from "../types/project"

// Check if Supabase is properly configured
const isSupabaseConfigured = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export class DatabaseService {
  static async getProjects(userId: string): Promise<Project[]> {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - use localStorage
        const demoProjects = localStorage.getItem(`demo-projects-${userId}`)
        const projects = demoProjects ? JSON.parse(demoProjects) : []
        return projects.sort(
          (a: Project, b: Project) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
        )
      }

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("user_id", userId)
        .order("updated_at", { ascending: false })

      if (error) throw error

      return data.map((project) => ({
        id: project.id,
        name: project.name,
        description: project.description || "",
        html: project.html,
        css: project.css,
        js: project.js,
        createdAt: project.created_at,
        updatedAt: project.updated_at,
      }))
    } catch (error) {
      console.error("Get projects error:", error)
      throw error
    }
  }

  static async getProject(projectId: string, userId: string): Promise<Project | null> {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - use localStorage
        const demoProjects = localStorage.getItem(`demo-projects-${userId}`)
        const projects = demoProjects ? JSON.parse(demoProjects) : []
        return projects.find((p: Project) => p.id === projectId) || null
      }

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", projectId)
        .eq("user_id", userId)
        .single()

      if (error) throw error

      return {
        id: data.id,
        name: data.name,
        description: data.description || "",
        html: data.html,
        css: data.css,
        js: data.js,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      }
    } catch (error) {
      console.error("Get project error:", error)
      return null
    }
  }

  static async createProject(
    project: Omit<Project, "id" | "createdAt" | "updatedAt">,
    userId: string,
  ): Promise<Project> {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - use localStorage
        const newProject: Project = {
          id: this.generateId(),
          name: project.name,
          description: project.description || "",
          html: project.html,
          css: project.css,
          js: project.js,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }

        const demoProjects = localStorage.getItem(`demo-projects-${userId}`)
        const projects = demoProjects ? JSON.parse(demoProjects) : []
        projects.push(newProject)
        localStorage.setItem(`demo-projects-${userId}`, JSON.stringify(projects))

        return newProject
      }

      const { data, error } = await supabase
        .from("projects")
        .insert({
          user_id: userId,
          name: project.name,
          description: project.description || null,
          html: project.html,
          css: project.css,
          js: project.js,
        })
        .select()
        .single()

      if (error) throw error

      return {
        id: data.id,
        name: data.name,
        description: data.description || "",
        html: data.html,
        css: data.css,
        js: data.js,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      }
    } catch (error) {
      console.error("Create project error:", error)
      throw error
    }
  }

  static async updateProject(projectId: string, updates: Partial<Project>, userId: string): Promise<Project> {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - use localStorage
        const demoProjects = localStorage.getItem(`demo-projects-${userId}`)
        const projects = demoProjects ? JSON.parse(demoProjects) : []
        const projectIndex = projects.findIndex((p: Project) => p.id === projectId)

        if (projectIndex === -1) {
          throw new Error("Project not found")
        }

        const updatedProject = {
          ...projects[projectIndex],
          ...updates,
          updatedAt: new Date().toISOString(),
        }

        projects[projectIndex] = updatedProject
        localStorage.setItem(`demo-projects-${userId}`, JSON.stringify(projects))

        return updatedProject
      }

      const { data, error } = await supabase
        .from("projects")
        .update({
          name: updates.name,
          description: updates.description,
          html: updates.html,
          css: updates.css,
          js: updates.js,
          updated_at: new Date().toISOString(),
        })
        .eq("id", projectId)
        .eq("user_id", userId)
        .select()
        .single()

      if (error) throw error

      return {
        id: data.id,
        name: data.name,
        description: data.description || "",
        html: data.html,
        css: data.css,
        js: data.js,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      }
    } catch (error) {
      console.error("Update project error:", error)
      throw error
    }
  }

  static async deleteProject(projectId: string, userId: string): Promise<void> {
    try {
      if (!isSupabaseConfigured) {
        // Demo mode - use localStorage
        const demoProjects = localStorage.getItem(`demo-projects-${userId}`)
        const projects = demoProjects ? JSON.parse(demoProjects) : []
        const filteredProjects = projects.filter((p: Project) => p.id !== projectId)
        localStorage.setItem(`demo-projects-${userId}`, JSON.stringify(filteredProjects))
        return
      }

      const { error } = await supabase.from("projects").delete().eq("id", projectId).eq("user_id", userId)

      if (error) throw error
    } catch (error) {
      console.error("Delete project error:", error)
      throw error
    }
  }

  static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  static createDefaultProject(name = "Untitled Project"): Omit<Project, "id" | "createdAt" | "updatedAt"> {
    return {
      name,
      description: "",
      html: "",
      css: "",
      js: "",
    }
  }
}
