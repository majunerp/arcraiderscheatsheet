'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-cyan-500/30 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 backdrop-blur-md supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-slate-950/95 supports-[backdrop-filter]:via-blue-950/95 supports-[backdrop-filter]:to-slate-950/95 overflow-hidden relative shadow-[0_4px_30px_rgba(0,229,255,0.15)]">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true"></div>
      {/* Gradient overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-950/20"
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
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Home
          </Link>
          <Link
            href="/#items"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Item Database
          </Link>
          <Link
            href="/loot"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Loot Guide
          </Link>
          <Link
            href="/recycling"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Recycling
          </Link>
          <Link
            href="/skills"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Skill Tree
          </Link>
          <Link
            href="/map"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Map
          </Link>
          <Link
            href="/quests"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Quests
          </Link>
          <Link
            href="/workshop"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Workshop
          </Link>
          <Link
            href="/guides"
            className="text-sm font-medium text-cyan-100 transition-all hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]"
          >
            Guides
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-100 hover:text-cyan-300 transition-colors"
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
        <div className="md:hidden border-t-2 border-cyan-500/30 bg-gradient-to-b from-slate-950 to-blue-950">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#items"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Item Database
            </Link>
            <Link
              href="/loot"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Loot Guide
            </Link>
            <Link
              href="/recycling"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Recycling
            </Link>
            <Link
              href="/skills"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skill Tree
            </Link>
            <Link
              href="/map"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Map
            </Link>
            <Link
              href="/quests"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quests
            </Link>
            <Link
              href="/workshop"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Workshop
            </Link>
            <Link
              href="/guides"
              className="block text-sm font-medium text-cyan-100 hover:text-cyan-300 transition-colors"
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
