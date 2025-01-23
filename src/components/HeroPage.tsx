'use client';
import React from "react";

/* eslint-disable react/no-unescaped-entities */
function HeroPage() {
  return (
    <div className="px-3 pt-32 bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 text-white mx-auto">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 py-3">
          "Explore Our Blog Universe!"
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl lg:w-3/5 mx-auto mb-5">
          Embark on a Tech Journey🔍Uncover Breakthroughs🚀Defining Tomorrow🌐
        </p>
        <div>
          <button
            onClick={() => alert("Welcome")}
            className="px-6 py-3 mb-8 text-lg font-medium bg-white text-blue-500 rounded-full shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-200 transform hover:translate-y-0 hover:scale-105"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable react/no-unescaped-entities */

export default HeroPage;
