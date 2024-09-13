import Link from 'next/link'
import { TreePineIcon } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white text-[#0d2600] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <TreePineIcon className="h-10 w-10 text-[#0d2600]" />
          <span className="ml-2 text-xl font-bold">OutdoorSwap</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/list-permit" className="hover:text-[#3c3833]">List Permit</Link></li>
            <li><Link href="/login" className="hover:text-[#3c3833]">Login/Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}