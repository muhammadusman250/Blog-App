'use client';

import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggle() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-gradient-to-r  from-green-300 via-orange-300 to-red-300 z-50 text-white fixed top-0 left-0 right-0 shadow-lg">
      <nav className="py-5 max-w-7xl mx-auto flex justify-between items-center">
        <Link className="text-black text-3xl font-bold letter-spacing-2 max-md:px-4" href="/">
          My-Blogs 
        </Link>

        {/* Desktop Nav */}
        <ul className="md:flex gap-8 text-lg hidden">
          <li className="text-slate-900 hover:text-slate-300 transition duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-slate-900 hover:text-slate-300 transition duration-300">
            <Link href="/about">About Us</Link>
          </li>
          <li className="text-slate-900 hover:text-slate-300 transition duration-300">
            <Link href="/blog">Our Blogs</Link>
          </li>
          <li className="text-slate-900 hover:text-slate-300 transition duration-300">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Signup and Login Buttons */}
        <div className="text-white md:block hidden">
          <Link
            className="py-2 px-4 border border-black mx-2 rounded-md text-black hover:text-slate-300 transition duration-300"
            href="#"
          >
            Signup
          </Link>
          <Link
            className="py-2 px-4 border border-black mx-2 rounded-md text-black hover:text-slate-300 transition duration-300"
            href="#"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden max-md:px-2">
          <button onClick={toggle} className="cursor-pointer">
            {isMenuOpen ? (
              <FaXmark className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="">
        <ul
          className={`md:hidden text-lg block space-y-4 px-6 py-6 mt-16 bg-yellow-900 text-white shadow-xl rounded-lg ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all duration-200 ease-out z-60" : "hidden"}`}
        >
          <li className="hover:text-slate-300 transition duration-300">
            <Link onClick={toggle} href="/">Home</Link>
          </li>
          <li className="hover:text-slate-300 transition duration-300">
            <Link onClick={toggle} href="/about">About Us</Link>
          </li>
          <li className="hover:text-slate-300 transition duration-300">
            <Link onClick={toggle} href="/blog">Our Blogs</Link>
          </li>
          
          <li className=" hover:text-slate-300 transition duration-300">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
