import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black/90 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <Youtube className="h-6 w-6" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-400">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">Cookie Preferences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400">Download</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-white">iOS App</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">Android App</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white">TV Apps</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} SBFlix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}