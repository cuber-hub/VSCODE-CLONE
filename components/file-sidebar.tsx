"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ChevronRight,
  ChevronDown,
  FileText,
  Folder,
  FolderOpen,
  Plus,
  Trash2,
  Edit,
  Code,
  Palette,
  Zap,
  ImageIcon,
  FileCode,
} from "lucide-react"
import type { FileTreeItem } from "../types/file"

interface FileSidebarProps {
  files: FileTreeItem[]
  activeFileId: string | null
  onFileSelect: (fileId: string) => void
  onFileCreate: (name: string, type: "file" | "folder", parentId?: string) => void
  onFileDelete: (fileId: string) => void
  onFileRename: (fileId: string, newName: string) => void
}

export function FileSidebar({
  files,
  activeFileId,
  onFileSelect,
  onFileCreate,
  onFileDelete,
  onFileRename,
}: FileSidebarProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["root"]))
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<FileTreeItem | null>(null)
  const [newItemName, setNewItemName] = useState("")
  const [newItemType, setNewItemType] = useState<"file" | "folder">("file")

  const getFileIcon = (fileName: string, type: "file" | "folder", isExpanded = false) => {
    if (type === "folder") {
      return isExpanded ? (
        <FolderOpen className="w-4 h-4 text-blue-400" />
      ) : (
        <Folder className="w-4 h-4 text-blue-400" />
      )
    }

    const extension = fileName.split(".").pop()?.toLowerCase()
    switch (extension) {
      case "html":
        return <Code className="w-4 h-4 text-orange-400" />
      case "css":
        return <Palette className="w-4 h-4 text-blue-400" />
      case "js":
      case "ts":
        return <Zap className="w-4 h-4 text-yellow-400" />
      case "json":
        return <FileCode className="w-4 h-4 text-green-400" />
      case "png":
      case "jpg":
      case "jpeg":
      case "gif":
      case "svg":
        return <ImageIcon className="w-4 h-4 text-purple-400" />
      default:
        return <FileText className="w-4 h-4 text-gray-400" />
    }
  }

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const handleCreateFile = () => {
    if (!newItemName.trim()) return

    const extension = newItemType === "file" && !newItemName.includes(".") ? ".txt" : ""

    onFileCreate(newItemName + extension, newItemType, selectedItem?.type === "folder" ? selectedItem.id : undefined)
    setNewItemName("")
    setIsCreateDialogOpen(false)
    setSelectedItem(null)
  }

  const handleRenameFile = () => {
    if (!newItemName.trim() || !selectedItem) return

    onFileRename(selectedItem.id, newItemName)
    setNewItemName("")
    setIsRenameDialogOpen(false)
    setSelectedItem(null)
  }

  const renderFileTree = (items: FileTreeItem[], level = 0) => {
    return items.map((item) => (
      <div key={item.id}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div
              className={`flex items-center gap-2 px-2 py-1 text-sm cursor-pointer hover:bg-gray-700 ${
                activeFileId === item.id ? "bg-gray-700 text-white" : "text-gray-300"
              }`}
              style={{ paddingLeft: `${level * 12 + 8}px` }}
              onClick={() => {
                if (item.type === "folder") {
                  toggleFolder(item.id)
                } else {
                  onFileSelect(item.id)
                }
              }}
            >
              {item.type === "folder" && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleFolder(item.id)
                  }}
                  className="p-0 hover:bg-transparent"
                >
                  {expandedFolders.has(item.id) ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                </button>
              )}
              {getFileIcon(item.name, item.type, expandedFolders.has(item.id))}
              <span className="truncate">{item.name}</span>
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent className="bg-gray-800 border-gray-700">
            <ContextMenuItem
              onClick={() => {
                setSelectedItem(item)
                setNewItemType("file")
                setIsCreateDialogOpen(true)
              }}
              className="text-gray-300 focus:bg-gray-700 focus:text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              New File
            </ContextMenuItem>
            {item.type === "folder" && (
              <ContextMenuItem
                onClick={() => {
                  setSelectedItem(item)
                  setNewItemType("folder")
                  setIsCreateDialogOpen(true)
                }}
                className="text-gray-300 focus:bg-gray-700 focus:text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Folder
              </ContextMenuItem>
            )}
            <ContextMenuItem
              onClick={() => {
                setSelectedItem(item)
                setNewItemName(item.name)
                setIsRenameDialogOpen(true)
              }}
              className="text-gray-300 focus:bg-gray-700 focus:text-white"
            >
              <Edit className="w-4 h-4 mr-2" />
              Rename
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => onFileDelete(item.id)}
              className="text-red-400 focus:bg-red-600 focus:text-white"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        {item.type === "folder" &&
          item.children &&
          expandedFolders.has(item.id) &&
          renderFileTree(item.children, level + 1)}
      </div>
    ))
  }

  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      <div className="p-3 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">Explorer</h3>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              setSelectedItem(null)
              setNewItemType("file")
              setIsCreateDialogOpen(true)
            }}
            className="h-6 w-6 p-0 text-gray-400 hover:text-white"
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-1">{renderFileTree(files)}</div>
      </ScrollArea>

      {/* Create File/Folder Dialog */}
      <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Create New {newItemType === "file" ? "File" : "Folder"}</DialogTitle>
            <DialogDescription className="text-gray-400">Enter a name for the new {newItemType}.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="item-name" className="text-gray-300">
                {newItemType === "file" ? "File" : "Folder"} Name
              </Label>
              <Input
                id="item-name"
                placeholder={newItemType === "file" ? "index.html" : "components"}
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateFile()
                  }
                }}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsCreateDialogOpen(false)}
                className="border-gray-600 text-gray-300"
              >
                Cancel
              </Button>
              <Button onClick={handleCreateFile} className="bg-blue-600 hover:bg-blue-700">
                Create
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Rename Dialog */}
      <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
        <DialogContent className="bg-gray-800 border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-white">Rename {selectedItem?.type}</DialogTitle>
            <DialogDescription className="text-gray-400">
              Enter a new name for "{selectedItem?.name}".
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="rename-input" className="text-gray-300">
                New Name
              </Label>
              <Input
                id="rename-input"
                value={newItemName}
                onChange={(e) => setNewItemName(e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleRenameFile()
                  }
                }}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setIsRenameDialogOpen(false)}
                className="border-gray-600 text-gray-300"
              >
                Cancel
              </Button>
              <Button onClick={handleRenameFile} className="bg-blue-600 hover:bg-blue-700">
                Rename
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
