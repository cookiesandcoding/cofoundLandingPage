'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-full fixed z-60">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-2xl font-bold text-transparent">
              COFOUND
            </span>
          </Link>

          <div className="hidden items-center space-x-4 lg:flex">
            <Link
              href="/login"
              className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-700 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-700 px-6 py-2.5 font-medium text-white transition-all duration-200 hover:shadow-lg"
            >
              <span>Sign Up</span>
            </Link>
          </div>

          <button
            className="rounded-lg p-2 transition-colors duration-200 hover:bg-muted lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-background/95 py-4 shadow-xl backdrop-blur-lg lg:hidden">
            <div className="space-y-2 px-4 py-2">
              <Link
                href="/login"
                className="block w-full rounded-lg py-2.5 text-center font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block w-full rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 py-2.5 text-center font-medium text-white transition-all duration-200 hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
