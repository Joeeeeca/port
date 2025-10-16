"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/buttons";

export function ThemeToggle() {
const [theme, setTheme] = React.useState<"light" | "dark">("dark");

React.useEffect(() => {
  const root = window.document.documentElement;
  const body = window.document.body;

  // Remove both theme classes everywhere
  root.classList.remove("light", "dark");
  body.classList.remove("light", "dark");

  // Add the new one
  root.classList.add(theme);
  body.classList.add(theme);
}, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
