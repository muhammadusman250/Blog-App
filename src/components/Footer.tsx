import Link from "next/link";
import { FaGithub, FaGoogle, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-black text-white z-40 bg-gradient-to-r from-slate-600 to-emerald-600">
    <div className="container px-6 py-16 mx-auto">
      <div className="flex flex-col md:flex-row justify-around text-center md:text-left space-y-8 md:space-y-0 md:space-x-16">
        <div className="md:w-1/4 w-full px-4">
          <h2 className="text-lg font-bold mb-4">My-Blogs</h2>
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
                Email: abc@gmail.com
              </p>
            </li>
            <li>
              <p className="cursor-pointer">
                Phone: +92 123 456 7890
              </p>
            </li>
          </nav>
        </div>
      </div> 
      <div className="flex justify-center gap-6 mb-10 pt-20">
          <a
             href="https://github.com/muhammadusman250"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-color-01 transition duration-700"
           >
             <FaGithub size={40} />
           </a>
           <a
             href="https://www.linkedin.com/in/muhammad-usman----/"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-color-01 transition duration-700"
           >
             <FaLinkedin size={40} />
           </a>
           <a
             href="mailto:muhammadusmanmemon2008@gmail.com"
             className="hover:text-color-01 transition duration-700"
           >
             <FaGoogle size={40} />
           </a>
         </div>
         <div className="text-center">
           <hr className="my-8 border-gray-600" />
           <p className="text-sm">
             &copy; 2025 Muhammad Usman Farooq. All rights reserved.
           </p>
         </div>
    </div>
  </footer>
);

export default Footer;


