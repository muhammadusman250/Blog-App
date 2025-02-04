/* eslint-disable react/no-unescaped-entities */
import React from "react";

function page() {
  return (
    <div className="container max-w-3xl mx-auto py-28">
      <div className="md:text-4xl text-2xl text-center font-bold py-9 bg-gradient-to-r from-green-300 via-orange-300 to-red-300">
        <h1 className="text-gray-900 py-3 font-bold tracking-wider text-4xl">
          About Us
        </h1>
        <h2 className="text-gray-600 text-4xl font-medium mt-4">
          Welcome To Muhammad Usman's Blog Website!
        </h2>
      </div>
      <div className="text-[16px] sm:text-2xl text-gray-700 md:leading-10 leading-[25px]">
        <div className="bg-white p-6 mb-6 shadow-lg rounded-lg">
          <p className="text-lg sm:text-xl text-slate-900">
          Welcome to Our Blog!
          Dive into a world of ideas, inspiration, and exploration. Here, you'll find a treasure trove of insightful articles, engaging stories, and practical tips tailored just for you. Whether you're seeking advice, entertainment, or creative fuel, our diverse topics will spark your curiosity. Join us on this journey of discovery and let’s connect through the power of words!
          </p>
        </div>

        <div className="bg-white p-6 mb-6 shadow-lg rounded-lg">
          <p className="text-lg sm:text-xl text-slate-900">
            We believe that knowledge should be accessible to all, and our blog aims to offer thought provoking articles, practical advice, and in-depth analysis to help you stay informed and make better decisions. Whether you're eager to learn something new, seek advice on a specific topic, or just enjoy interesting content, we have something for you.
            We value your feedback and encourage you to connect with us through comments and social media.
          </p>
        </div>

        <div className="bg-white p-6 mb-6 shadow-lg rounded-lg">
          <p className="text-lg sm:text-xl text-slate-900">
            Thank you for visiting, and we hope you enjoy exploring our blog! 🤗
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
/* eslint-enable react/no-unescaped-entities */
