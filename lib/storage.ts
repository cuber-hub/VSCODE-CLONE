import type { Project, User } from "../types/project"

const STORAGE_KEYS = {
  USER: "code-editor-user",
  PROJECTS: "code-editor-projects",
  CURRENT_PROJECT: "code-editor-current-project",
}

export class StorageManager {
  // User management
  static saveUser(user: User): void {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
  }

  static getUser(): User | null {
    const userData = localStorage.getItem(STORAGE_KEYS.USER)
    return userData ? JSON.parse(userData) : null
  }

  static removeUser(): void {
    localStorage.removeItem(STORAGE_KEYS.USER)
  }

  // Project management
  static saveProject(project: Project): void {
    const projects = this.getProjects()
    const existingIndex = projects.findIndex((p) => p.id === project.id)

    if (existingIndex >= 0) {
      projects[existingIndex] = { ...project, updatedAt: new Date().toISOString() }
    } else {
      projects.push(project)
    }

    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))
  }

  static getProjects(): Project[] {
    const projectsData = localStorage.getItem(STORAGE_KEYS.PROJECTS)
    return projectsData ? JSON.parse(projectsData) : []
  }

  static getProject(id: string): Project | null {
    const projects = this.getProjects()
    return projects.find((p) => p.id === id) || null
  }

  static deleteProject(id: string): void {
    const projects = this.getProjects().filter((p) => p.id !== id)
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects))

    // Clear current project if it's the one being deleted
    const currentProject = this.getCurrentProject()
    if (currentProject?.id === id) {
      this.clearCurrentProject()
    }
  }

  static setCurrentProject(projectId: string): void {
    localStorage.setItem(STORAGE_KEYS.CURRENT_PROJECT, projectId)
  }

  static getCurrentProject(): Project | null {
    const currentProjectId = localStorage.getItem(STORAGE_KEYS.CURRENT_PROJECT)
    return currentProjectId ? this.getProject(currentProjectId) : null
  }

  static clearCurrentProject(): void {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_PROJECT)
  }

  // Utility functions
  static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  static createDefaultProject(name = "Untitled Project"): Project {
    return {
      id: this.generateId(),
      name,
      description: "",
      html: "",
      css: "",
      js: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
  }
}
