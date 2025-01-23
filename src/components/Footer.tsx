import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white z-40 ">
    <div className="container px-6 py-16 mx-auto">
      <div className="flex flex-col md:flex-row text-center md:text-left space-y-8 md:space-y-0 md:space-x-16">
        <div className="md:w-1/4 w-full px-4">
          <h2 className="text-lg font-bold mb-4">Blogs</h2>
          <p>
            Venture into the world of Blogs and uncover the groundbreaking innovations shaping the future.
          </p>
        </div>
        <div className="md:w-1/4 w-full px-24">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <nav className="list-none space-y-2">
            <li>
              <Link href={"/"} className="text-white hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/blog"} className="text-white hover:text-gray-200">
                Our Blogs
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="text-white hover:text-gray-200">
                About
              </Link>
            </li>
          </nav>
        </div>
        <div className="md:w-1/4 w-full px-4">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <nav className="list-none space-y-2">
            <li>
              <p className="cursor-pointer">
                Email: xyz@gmail.com
              </p>
            </li>
            <li>
              <p className="cursor-pointer">
                Phone: +92 123 456 7890
              </p>
            </li>
          </nav>
        </div>
        <div className="md:w-1/4 w-full px-4">
          <h2 className="text-lg font-bold mb-4">Subscribe To Our Newsletter</h2>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              placeholder="Enter your email"
              className="w-full sm:w-48 px-3 py-2 text-sm text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 ease-in-out"
            />
            <button className="bg-indigo-600 px-6 py-2 rounded-xl text-white hover:bg-indigo-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t border-black pt-6">
        <div className="flex space-x-3 mb-4   md:mb-0">
          <Link href={""} className="text-gray-300 hover:text-gray-400">
            <FaFacebookF className="w-6 h-6" />
          </Link>
          <Link href={""} className="text-gray-300 hover:text-gray-400">
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link href={"https://www.linkedin.com/in/hafiz-abdullah-4239a62a4/"} className="text-gray-300 hover:text-gray-400">
            <FaLinkedinIn className="w-6 h-6" />
          </Link>
        </div>
        
      </div>
      <div>
      <p className="text-gray-200 text-center -mt-1 ">
          Build By Abdullah Naeem | All Rights Reserved | 2025
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
