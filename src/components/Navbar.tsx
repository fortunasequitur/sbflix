import React, { useState } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">SBFlix</h1>
            <div className="hidden md:ml-8 md:flex md:space-x-6">
              <a href="#" className="text-white hover:text-red-500">Home</a>
              <a href="#" className="text-gray-300 hover:text-red-500">Movies</a>
              <a href="#" className="text-gray-300 hover:text-red-500">TV Shows</a>
              <a href="#" className="text-gray-300 hover:text-red-500">My List</a>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <button className="text-gray-300 hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <User className="h-5 w-5" />
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a href="#" className="block px-3 py-2 text-white hover:bg-red-600 rounded-md">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-red-600 hover:text-white rounded-md">Movies</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-red-600 hover:text-white rounded-md">TV Shows</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-red-600 hover:text-white rounded-md">My List</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}