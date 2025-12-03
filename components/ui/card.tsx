import * as React from "react"
import { cn } from "../../lib/utils"

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Base setup
        "rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-background-card)] text-card-foreground transition-all duration-300",

        // 💡 Light mode shadow (force-applied)
        "!shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:!shadow-[0_12px_36px_rgba(0,0,0,0.12)]",

        // 🌙 Dark mode shadow removed
        "dark:!shadow-none dark:hover:!shadow-none",

        className
      )}
      {...props}
    />
  )
}

/* ---------------------------------------------
   Card Header
--------------------------------------------- */
export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  )
}

/* ---------------------------------------------
   Card Content
--------------------------------------------- */
export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("px-6 pb-6", className)} {...props} />
  )
}

/* ---------------------------------------------
   Card Footer
--------------------------------------------- */
export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center px-6 pb-6 pt-0", className)}
      {...props}
    />
  )
}
