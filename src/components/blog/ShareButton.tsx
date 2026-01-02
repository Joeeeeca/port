import { useState } from "react"
import {
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Link2,
  Check,
} from "lucide-react"

interface ShareButtonProps {
  url: string
  title: string
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const shareOptions = [
    {
      name: "Twitter",
      icon: Twitter,
      onClick: () => {
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        )
        setIsOpen(false)
      },
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      onClick: () => {
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        )
        setIsOpen(false)
      },
    },
    {
      name: "Facebook",
      icon: Facebook,
      onClick: () => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        )
        setIsOpen(false)
      },
    },
    {
      name: "Email",
      icon: Mail,
      onClick: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(`Check out this article: ${url}`)}`
        setIsOpen(false)
      },
    },
    {
      name: copied ? "Copied!" : "Copy link",
      icon: copied ? Check : Link2,
      onClick: async () => {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => {
          setCopied(false)
          setIsOpen(false)
        }, 2000)
      },
    },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs text-muted-foreground transition hover:border-primary hover:text-primary"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-border bg-card shadow-xl">
            <div className="p-2">
              {shareOptions.map((option) => {
                const Icon = option.icon
                return (
                  <button
                    key={option.name}
                    onClick={option.onClick}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-2 text-sm text-foreground transition hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                    {option.name}
                  </button>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
