'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar({ className = '' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`w-full bg-gradient-to-r from-blue-500/40 via-white/30 to-blue-500/40 backdrop-blur-md shadow-lg border-b border-white/20 text-sm ${className}`}>
      <nav className=" container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* <Image
                src="/logo.png"
                alt="Saif Logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              /> */}
              <span className="text-xl font-bold text-[#2563eb]">Eklavya Software</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex md:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#6b7280] hover:text-[#2563eb] transition-colors duration-300 font-medium flex items-center h-full"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors duration-300 font-medium hidden md:block h-full flex items-center">
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-[#6b7280] hover:text-[#2563eb]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-[#6b7280] hover:text-[#2563eb] hover:bg-[#f3f4f6] rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-orange-500 via-blue-500 to-green-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-colors duration-300 font-medium w-full">
              <span>Get Started</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}