import { TreePineIcon } from 'lucide-react';
import Link from 'next/link';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <TreePineIcon className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Your App Name</span>
            </Link>
          </div>
          {/* Add your navigation items or other header content here */}
        </div>
      </div>
    </header>
  );
}

export default Header;