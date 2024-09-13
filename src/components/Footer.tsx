import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#3c3833] text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">OutdoorSwap</h3>
          <p>Swap outdoor permits with ease</p>
        </div>
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul>
            <li><Link href="/about" className="hover:text-[#d0ef9a]">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-[#d0ef9a]">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-[#d0ef9a]">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#d0ef9a]">Facebook</a>
            <a href="#" className="hover:text-[#d0ef9a]">Twitter</a>
            <a href="#" className="hover:text-[#d0ef9a]">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}