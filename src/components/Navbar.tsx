"use client"

import Link from 'next/link'
import { useAuth } from '@/lib/hooks/useAuth'
import { useState } from 'react'
import { Bell, User } from 'lucide-react'

const Navbar = () => {
  const { user, logout } = useAuth()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  if (!user) return null

  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/list-permit" className="text-white hover:bg-primary-dark hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                List permit
              </Link>
              <Link href="/my-swaps" className="text-white hover:bg-primary-dark hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                My swaps
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-full text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white transition duration-150 ease-in-out">
              <Bell className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <div>
                <button 
                  onClick={() => setDropdownOpen(!dropdownOpen)} 
                  className="p-2 rounded-full text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white transition duration-150 ease-in-out"
                >
                  <User className="h-6 w-6" />
                </button>
              </div>
              {dropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-10">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                    Profile
                  </Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-150 ease-in-out">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar