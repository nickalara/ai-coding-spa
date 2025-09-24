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

      {/* Resume Download Button */}
      <div className="fixed top-4 right-4 sm:top-8 sm:right-8 z-50 flex flex-col items-center">
        <a
          href="https://docs.google.com/document/d/1YOwrbKghd-zTJjFXpL1uR6G7o3qp0fic/export?format=pdf"
          download="Nick-Lara-Resume.pdf"
          className="flex flex-col items-center text-blue-500 hover:text-blue-600 hover:scale-105 transition-all duration-200"
          style={{
            animation: 'bulge 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-sm sm:text-base font-bold">Download Resume</span>
        </a>
      </div>

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
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-blue-50 to-blue-100 shadow-2xl transform transition-all duration-300 ease-in-out z-40 ${
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
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-200 rounded-lg transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/work-experience"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-200 rounded-lg transition-all duration-300"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-200 rounded-lg transition-all duration-300"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-200 rounded-lg transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/demos"
                onClick={closeMenu}
                className="block px-4 py-3 text-lg text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-200 rounded-lg transition-all duration-300"
              >
                Demos
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
