'use client'

import { APP_NAME, GITHUB_URL } from '@/utils/constants'
import { Github, Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            Logo
          </div>
          <span className="text-lg">{APP_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/discover"
            className="border-b-2 border-primary pb-1 font-medium text-primary"
          >
            Discover
          </Link>
          <Link
            href="/calendar"
            className="text-muted hover:text-foreground"
          >
            Calendar
          </Link>
          <Link
            href="/map"
            className="text-muted hover:text-foreground"
          >
            Map View
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={GITHUB_URL}
            target="_blank"
            className="text-muted hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col gap-4 px-4 py-4 text-foreground">
            <Link href="/discover">Discover</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/map">Map View</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
