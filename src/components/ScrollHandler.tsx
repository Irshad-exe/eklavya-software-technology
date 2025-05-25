'use client';

import { useState, useEffect } from 'react';
import DevBar from './DevBar';
import Navbar from './Navbar';

export default function ScrollHandler() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <DevBar className={isScrolled ? 'hidden' : ''} />
      <Navbar className={isScrolled ? 'fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm w-full' : ''} />
    </div>
  );
}
