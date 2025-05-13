import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { CodeIcon } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="flex justify-center px-2 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <CodeIcon className="h-6 w-6" />
          <Link href="/" className="font-bold">
            random JS question
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          {/* <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/resources" className="text-sm font-medium transition-colors hover:text-primary">
            Resources
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link> */}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}
