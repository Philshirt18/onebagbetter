'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface NavigationProps {
  currentPage?: 'home' | 'add' | 'community' | 'stats';
  onNavigate?: (page: string) => void;
}

export default function Navigation({ currentPage = 'home', onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navigation background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠', active: currentPage === 'home' },
    { id: 'add', label: 'Add Entry', icon: '➕', active: currentPage === 'add' },
    { id: 'community', label: 'Community', icon: '👥', active: currentPage === 'community' },
    { id: 'stats', label: 'Stats', icon: '📊', active: currentPage === 'stats' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate?.(pageId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div 
          className={cn(
            'pill-nav px-8 py-4 transition-all duration-300',
            isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95'
          )}
        >
          <ul className="flex items-center space-x-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'flex items-center gap-2 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-full',
                    item.active
                      ? 'text-lime-600 font-semibold bg-lime-50'
                      : 'text-gray-700 hover:text-lime-600 hover:bg-gray-50'
                  )}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={cn(
            'pill-nav p-4 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 transition-all duration-300',
            isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95',
            isMenuOpen ? 'bg-lime-50' : ''
          )}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={cn(
                'block w-5 h-0.5 bg-gray-700 transition-all duration-300',
                isMenuOpen ? 'rotate-45 translate-y-1' : ''
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300',
                isMenuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'block w-5 h-0.5 bg-gray-700 mt-1 transition-all duration-300',
                isMenuOpen ? '-rotate-45 -translate-y-1' : ''
              )}
            />
          </div>
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            'absolute top-20 right-0 pill-nav p-6 min-w-56 transition-all duration-300 transform origin-top-right',
            isMenuOpen 
              ? 'opacity-100 scale-100 translate-y-0' 
              : 'opacity-0 scale-95 -translate-y-2 pointer-events-none',
            isScrolled ? 'bg-white/98 shadow-lg' : 'bg-white/95'
          )}
        >
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={cn(
                    'flex items-center gap-3 w-full text-left text-sm font-medium transition-all duration-200 py-3 px-4 rounded-lg',
                    item.active
                      ? 'text-lime-600 font-semibold bg-lime-50'
                      : 'text-gray-700 hover:text-lime-600 hover:bg-gray-50'
                  )}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-opacity duration-300',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}