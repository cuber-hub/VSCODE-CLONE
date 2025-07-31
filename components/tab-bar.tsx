"use client"

import { Button } from "@/components/ui/button"
import { X, Code, Palette, Zap, FileText, Circle, ExternalLink } from "lucide-react"
import type { FileTab } from "../types/file"

interface TabBarProps {
  tabs: FileTab[]
  activeTabId: string | null
  onTabSelect: (tabId: string) => void
  onTabClose: (tabId: string) => void
}

export function TabBar({ tabs, activeTabId, onTabSelect, onTabClose }: TabBarProps) {
  const getTabIcon = (language: string) => {
    switch (language) {
      case "html":
        return <Code className="w-3 h-3" />
      case "css":
        return <Palette className="w-3 h-3" />
      case "javascript":
        return <Zap className="w-3 h-3" />
      case "preview":
        return <ExternalLink className="w-3 h-3" />
      default:
        return <FileText className="w-3 h-3" />
    }
  }

  if (tabs.length === 0) {
    return (
      <div className="bg-gray-800 border-b border-gray-700 h-10 flex items-center px-4">
        <span className="text-gray-500 text-sm">No files open</span>
      </div>
    )
  }

  return (
    <div className="bg-gray-800 border-b border-gray-700 flex items-center overflow-x-auto">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center gap-2 px-3 py-2 border-r border-gray-700 cursor-pointer group min-w-0 ${
            activeTabId === tab.id
              ? "bg-gray-700 text-white border-b-2 border-blue-400"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
          onClick={() => onTabSelect(tab.id)}
        >
          {getTabIcon(tab.language)}
          <span className="text-sm truncate max-w-32">{tab.name}</span>
          {tab.isDirty && <Circle className="w-2 h-2 fill-current text-yellow-400" />}
          {tab.id !== "preview" && (
            <Button
              size="sm"
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab.id)
              }}
              className="h-4 w-4 p-0 opacity-0 group-hover:opacity-100 hover:bg-gray-600 ml-1"
            >
              <X className="w-3 h-3" />
            </Button>
          )}
        </div>
      ))}
    </div>
  )
}
