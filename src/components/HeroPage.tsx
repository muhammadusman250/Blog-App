"use client";
import React from "react";

/* eslint-disable react/no-unescaped-entities */
function HeroPage() {
  return (
    <div className="px-3 pt-32 bg-gradient-to-r from-green-300 via-orange-300 to-red-300 text-white mx-auto">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 py-3">
          "Explore the Universe of Our Blogs!"
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl lg:w-3/5 mx-auto mb-5">
          🚀 Dive into the Future of Tech 🔍 Explore Innovations 🌐 Shape What's
          Next!{" "}
        </p>
        <div>
          <button
            onClick={() => alert("Welcome")}
            className="px-6 py-3 mb-8 text-lg font-medium bg-slate-300 text-blue-500 rounded-2xl shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200 transform hover:translate-y-0 hover:scale-105"
          >
            Explore Now !!!
          </button>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable react/no-unescaped-entities */

export default HeroPage;
