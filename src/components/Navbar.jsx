import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-indigo-100">
      <Link
        to="/"
        className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent flex items-center gap-2"
      >
        🚀 QualiGen AI
      </Link>
      <div className="space-x-8 font-medium text-gray-700">
        <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
        <Link to="/solutions" className="hover:text-indigo-600 transition">Solutions</Link>
        <Link to="/about" className="hover:text-indigo-600 transition">About</Link>
        <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
      </div>
    </nav>
  );
}
