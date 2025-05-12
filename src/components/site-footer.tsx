import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
        <div className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} random JS question. All rights reserved.
        </div>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <a
            href="https://github.com/VladimirDmytriienko"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
