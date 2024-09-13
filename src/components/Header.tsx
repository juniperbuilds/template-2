import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white text-[#0d2600] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
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