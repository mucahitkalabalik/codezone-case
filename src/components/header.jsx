import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="absolute top-0 left-0 w-full h-20 bg-[#1212120c] z-50 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Logo"
          width={240}
          height={60}
    
        />

        {/* Desktop Navigation */}
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

        {/* Desktop Search & Login */}
        <div className="hidden md:flex items-center space-x-8">
          <img
            src="/images/search.png"
            alt="Search"
            width={22}
            height={20}
        
          />
          <button className="px-4 py-2 bg-white text-black rounded-md font-saira font-medium">
            Giriş
          </button>
        </div>

        {/* Mobile Menu */}
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
