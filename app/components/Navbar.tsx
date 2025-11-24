"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Wallet } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 User/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow">
              <Wallet className="w-5 h-5 text-white" />
            </div>
            <Link href="/">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent cursor-pointer">
                Pocket AI
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="hover:text-gray-900">How It Works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign In</button>
            <button className="px-5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg text-sm font-medium hover:from-emerald-700 hover:to-teal-700 shadow-sm">Get Started</button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden User border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Features</a>
            <a href="#how-it-works" className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900">How It Works</a>
            <a href="#pricing" className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="w-full py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50">Sign In</button>
            <button className="w-full py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg text-sm font-medium">Get Started</button>
          </div>
        </div>
      )}
    </header>
  );
}
