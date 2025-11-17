'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-gradient-to-r from-black via-zinc-900 to-black backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-black/95 supports-[backdrop-filter]:via-zinc-900/95 supports-[backdrop-filter]:to-black/95 overflow-hidden relative">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true"></div>
      {/* Gradient overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"
        aria-hidden="true"
      ></div>

      <nav className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 relative z-10">
        <Link
          href="/"
          className="flex h-16 items-center relative group"
          aria-label="ARC Raiders home"
        >
          {/* Logo with soft edges - no hard border */}
          <div className="relative px-4 py-2">
            <Image
              src="/raider.png"
              alt="ARC Raiders logo"
              width={200}
              height={64}
              className="h-full w-auto object-contain relative z-10 transition-all"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-100 transition-colors hover:text-white drop-shadow-md"
          >
            Home
          </Link>
          <Link
            href="/#items"
            className="text-sm font-medium text-zinc-100 transition-colors hover:text-white drop-shadow-md"
          >
            Item Database
          </Link>
          <Link
            href="/quests"
            className="text-sm font-medium text-zinc-100 transition-colors hover:text-white drop-shadow-md"
          >
            Quests
          </Link>
          <Link
            href="/workshop"
            className="text-sm font-medium text-zinc-100 transition-colors hover:text-white drop-shadow-md"
          >
            Workshop
          </Link>
          <Link
            href="/guides"
            className="text-sm font-medium text-zinc-100 transition-colors hover:text-white drop-shadow-md"
          >
            Guides
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-100"
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
