import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full h-20 bg-[#1212120c] z-50 backdrop-blur border-b border-[#2A2A2A]">
      <div className="container mx-auto flex items-center justify-between h-full px-6 bg-[#1212120c]">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" width={240} height={60} />
        </Link>

        <nav className="hidden md:flex space-x-24 font-saira text-white">
          <a href="#" className="hover:text-gray-300">
            Haberler
          </a>
          <a href="#" className="hover:text-gray-300">
            Etkinlikler
          </a>
          <a href="#" className="hover:text-gray-300">
            Videolar
          </a>
          <a href="#" className="hover:text-gray-300">
            İletişim
          </a>
        </nav>
        <div className="hidden md:flex items-center space-x-8">
          <img src="/images/search.png" alt="Search" width={22} height={20} />
          <button className="px-4 py-2 bg-white text-black rounded-md font-saira font-medium">
            Giriş
          </button>
        </div>
        <div className="md:hidden">
          <img
            src="/images/mobile-menu.png"
            alt="Mobile Menu"
            width={24}
            height={24}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
