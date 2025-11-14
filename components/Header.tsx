'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <nav className="container mx-auto flex h-16 items-center justify-center px-4 md:px-8">
        <div className="flex items-center gap-8 md:gap-12">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl md:text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                ARC RAIDERS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/#items"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Item Database
            </Link>
            <Link
              href="/quests"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Quests
            </Link>
            <Link
              href="/workshop"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Workshop
            </Link>
            <Link
              href="/guides"
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
            >
              Guides
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4 text-zinc-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-800 bg-black">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium text-zinc-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#items"
              className="block text-sm font-medium text-zinc-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Item Database
            </Link>
            <Link
              href="/quests"
              className="block text-sm font-medium text-zinc-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quests
            </Link>
            <Link
              href="/workshop"
              className="block text-sm font-medium text-zinc-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshop
            </Link>
            <Link
              href="/guides"
              className="block text-sm font-medium text-zinc-300 hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Guides
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
