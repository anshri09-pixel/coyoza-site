import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://raw.githubusercontent.com/anshri09-pixel/cma3-brochure/main/logo.png"
              alt="CMA3 Solutions Logo"
              className="h-16 w-auto max-w-xs"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"%3E%3Crect fill="%230891b2" width="64" height="64" rx="8"/%3E%3Ctext x="32" y="44" font-family="Arial" font-size="28" font-weight="bold" fill="white" text-anchor="middle"%3ECMA3%3C/text%3E%3C/svg%3E';
              }}
            />
            <span className="text-lg font-bold text-gray-900 hidden sm:block max-w-xs">
              Coyoza Maiden A3 Solution
            </span>
          </Link>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-cyan-600 border-b-2 border-cyan-600'
                    : 'text-gray-700 hover:text-cyan-600'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-cyan-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-gray-700 hover:bg-gray-50'
                } block px-3 py-2 text-base font-medium rounded-md`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
