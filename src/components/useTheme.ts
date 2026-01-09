import { useEffect, useMemo, useState } from "react"

export type ThemeMode = "light" | "dark"

function getPreferredTheme(): ThemeMode {
  const stored = localStorage.getItem("theme") as ThemeMode | null
  if (stored === "light" || stored === "dark") return stored

  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches

  return prefersDark ? "dark" : "light"
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    try {
      return getPreferredTheme()
    } catch {
      return "dark"
    }
  })

  const isDark = useMemo(() => theme === "dark", [theme])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    try {
      localStorage.setItem("theme", theme)
    } catch {
      // ignore
    }
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return { theme, setTheme, toggleTheme, isDark }
}
