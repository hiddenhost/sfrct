"use client";
import React from 'react';
import Link from "next/link";

export default function FRCTHeroSection() {
      
  return (
    <div className="relative h-[600px] md:h-[700px] w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <img 
        src="https://i.pinimg.com/736x/cc/7a/6a/cc7a6a42aaf69403067c4b1123362eec.jpg" 
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main Heading */}
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
          <span className="text-white">SFRCT</span> का रजिस्ट्रेशन करने के लिए ट्रस्ट को 100 रुपए वार्षिक दान करें।
        </h1>

        {/* Account Details */}
        <div className="space-y-2 mb-8">
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
            NAME - SUPER FAST RELIEF CHARITABLE TRUST
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
            ACCOUNT No - 925020055869690
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
            IFSC - UTIB0005215
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
            Cust id - 979335991
          </p>
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold tracking-wide">
            BRANCH - MORADABAD
          </p>
        </div>

      
    <Link href="/register">
  <button
    className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-gray-800 font-bold text-base md:text-lg px-10 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
  >
    REGISTER NOW
  </button>
</Link>
   
      </div>

      {/* Scroll Indicator (Optional) */}
      <div className="absolute bottom-8 right-8 z-10">
        <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:bg-yellow-500 transition-colors shadow-lg">
          <svg 
            className="w-6 h-6 text-gray-800" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}