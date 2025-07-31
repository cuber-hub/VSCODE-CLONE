export interface FileTab {
  id: string
  name: string
  language: string
  content: string
  isActive: boolean
  isDirty: boolean
}

export interface FileTreeItem {
  id: string
  name: string
  type: "file" | "folder"
  language?: string
  children?: FileTreeItem[]
  isExpanded?: boolean
}
