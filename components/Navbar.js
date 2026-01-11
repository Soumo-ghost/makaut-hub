import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-gray-200">
          MAKAUT Hub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/notices" className="hover:text-yellow-400">Notices</Link>
          <Link href="/calculator" className="hover:text-yellow-400">Calculator</Link>
          <Link href="/notes" className="hover:text-yellow-400">Notes</Link>
          <Link href="/pyq" className="hover:text-yellow-400">PYQ</Link>
          <Link href="/books" className="hover:text-yellow-400">Books</Link>
        </div>

        {/* Mobile Menu Button (Simplified for now) */}
        <div className="md:hidden">
            <span className="text-sm">Menu</span>
        </div>
      </div>
    </nav>
  );
}