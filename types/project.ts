export interface Project {
  id: string
  name: string
  description?: string
  html: string
  css: string
  js: string
  createdAt: string
  updatedAt: string
}

export interface User {
  id: string
  name: string
  email: string
}
