"use client"
import { Button } from "@/components/ui/button"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme()
  const handleThemeToggle = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("light")
    }
  }

  return (
    <div className="fixed  right-0 top-1.5">
      <Button variant="secondary">
        <label htmlFor="theme-toggle" className="relative inline-block cursor-pointer">
          <div className="dot h-6 w-6 transform transition-transform">
            {theme === "light" ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
          </div>

          <input
            type="checkbox"
            id="theme-toggle"
            className="sr-only"
            checked={theme === "dark"}
            onChange={handleThemeToggle}
          />
        </label>
      </Button>
    </div>
  )
}
