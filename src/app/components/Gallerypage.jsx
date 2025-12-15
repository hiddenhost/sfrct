"use client";
import React from 'react';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 py-16 relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-4 left-8 w-6 h-6 bg-yellow-600 rounded-full"></div>
          <div className="absolute top-8 right-12 w-8 h-8 bg-yellow-600 rounded-full"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-gray-800 text-center">
            Our Gallery
          </h1>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Featured Image
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          {/* Image Container */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="p-6">
              <img
                src="/galleryimage1.jpg"
                alt="Gallery Image"
                className="w-full h-auto rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback if image doesn't load */}
              <div className="hidden flex-col items-center justify-center bg-gray-100 rounded-lg p-12 text-center">
                <svg className="w-24 h-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 text-lg">
                  Image not found at <span className="font-mono bg-gray-200 px-2 py-1 rounded">/image.jpg</span>
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Please make sure the image is saved in your public folder
                </p>
              </div>
            </div>
          </div>

          {/* Optional Description */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Explore our collection and moments captured in time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}