'use client';

import Link from 'next/link';
import { useNavigation } from '../contexts/NavigationContext';

export default function Navigation() {
  const { isOpen, toggleMenu, closeMenu } = useNavigation();

  return (
    <>
      {/* Subtle Blur Effect */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-[1px] z-30 transition-all duration-300"
          onClick={closeMenu}
        />
      )}

      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          // X Icon
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Slide-out Menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 pt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Navigation</h2>
          
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/work-experience"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                About
              </Link>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Built with Next.js & React
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
