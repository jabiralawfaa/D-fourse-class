import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-black text-white p-4 z-50 shadow-lg rounded-b-lg">
      {/* Logo */}
      <div className="text-lg font-bold font-dfourse">
        <a href="#home">
          d<span className="font-semibold font-sans">-</span>fourse
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-white">
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links - hidden on small screens and shown on larger screens */}
      <div className="hidden md:flex items-center justify-center space-x-4 font-future">
        <a href="#home" className="relative group hover:text-gray-300 text-lg">
          Beranda
          <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
        <a href="#pengurus" className="relative group hover:text-gray-300 text-lg">
          Pengurus
          <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
        <a href="#anggota" className="relative group hover:text-gray-300 text-lg">
          Mahasiswa
          <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
        <a href="#post" className="relative group hover:text-gray-300 text-lg">
          Our Post
          <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
        <a href="#feedback" className="relative group hover:text-gray-300 text-lg">
          Keluh Kesah
          <span className="absolute left-0 bottom-0 h-1 w-full bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>

        {/* Follow Us Button */}
        <a href="https://www.instagram.com/d_fourse/" className="relative inline-block px-4 py-2 text-black bg-white rounded-md group">
          Follow Us
          <span className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-blue-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
        </a>
      </div>

      {/* Mobile Menu - shown when menuOpen is true */}
      <div
        className={`absolute top-16 left-0 w-full bg-black p-4 md:hidden transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4 font-future">
          <a href="#home" className="hover:text-gray-300">
            Beranda
          </a>
          <a href="#pengurus" className="hover:text-gray-300">
            Pengurus
          </a>
          <a href="#anggota" className="hover:text-gray-300">
            Mahasiswa
          </a>
          <a href="#post" className="hover:text-gray-300">
            Our Post
          </a>
          <a href="#feedback" className="hover:text-gray-300">
            Keluh Kesah
          </a>

          {/* Follow Us Button in Mobile Menu */}
          <a href="https://www.instagram.com/d_fourse/" className="relative inline-block px-4 py-2 text-black bg-white rounded-md group">
            Follow Us
            <span className="absolute left-0 bottom-0 h-1 w-full bg-gradient-to-r from-blue-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </a>
        </div>
      </div>
    </nav>
  );
}
