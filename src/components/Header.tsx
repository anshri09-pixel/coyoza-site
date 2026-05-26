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
    { path: '/careers', label: 'Careers' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-3 min-w-0">

  <img
    src="https://raw.githubusercontent.com/anshri09-pixel/cma3-brochure/refs/heads/main/CMA3_logo%20(1).png"
    alt="Coyoza Maiden A3 Solution Logo"
    className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
  />

  <div className="flex flex-col leading-tight">
  <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
    Coyoza Maiden A3 Solution Private Limited
  </span>
  <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
    Accuracy • Assurance • Accountability
  </span>
</div>

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
