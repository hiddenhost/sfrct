"use client";
import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: ["सर्वजन का", "सर्वजन के लिए", "सर्वजन के द्वारा"],
      image: "/group-photo.jpg",
    },
    {
      title: [
        "सुपर फास्ट रिलीफ चेरिटेबल",
        "टीम (SFRCT) उत्तर प्रदेश",
        "Help For Helpless",
      ],
      image: "/group-photo.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const changeSlide = (newSlide) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newSlide);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
          {/* Mobile Layout (< 640px) */}
          <div className="sm:hidden">
            {/* Logo and Register Button Row */}
            <div className="flex items-center justify-between mb-3">
              <Link
                href="/register"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="bg-yellow-400 rounded-full p-1.5">
                  <div className="w-3 h-3 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                </div>
                <div className="text-base font-serif italic">Register Now</div>
              </Link>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-600">Helpline: </span>
                  <span className="font-semibold">+91 9756441626</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-600">Email: </span>
                  <span className="font-semibold">SFRCTUP@gmail.com</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold">Vill. Rampur Safedbaaf</div>
                  <div className="text-gray-600">
                    Tehsil- Nowgawan Sadat, Post- JamnaKhas (Amroha)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Layout (640px - 1024px) */}
          <div className="hidden sm:flex lg:hidden flex-col gap-3">
            <div className="flex items-center justify-between">
              <Link
                href="/register"
                className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
              >
                <div className="bg-yellow-400 rounded-full p-2">
                  <div className="w-4 h-4 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-serif italic">
                  Register Now
                </div>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Helpline
                  </div>
                  <div className="font-semibold">+91 9756441626</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Send email
                  </div>
                  <div className="font-semibold">SFRCTUP@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <div className="text-xs md:text-sm">
                  <div className="font-semibold">Vill. Rampur Safedbaaf</div>
                  <div>Tehsil- Nowgawan Sadat, Post- JamnaKhas (Amroha)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout (>= 1024px) */}
          <div className="hidden lg:flex items-center justify-between">
            <Link
              href="/register"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-yellow-400 rounded-full p-2">
                <div className="w-4 h-4 border-2 border-black rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                </div>
              </div>
              <div className="text-xl xl:text-2xl font-serif italic">
                Register Now
              </div>
            </Link>

            <div className="flex items-center gap-6 xl:gap-8 text-base">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-sm text-gray-600">Helpline</div>
                  <div className="font-semibold">+91 9756441626</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <div>
                  <div className="text-sm text-gray-600">Send email</div>
                  <div className="font-semibold">SFRCTUP@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-2 max-w-xs">
                <MapPin className="w-5 h-5" />
                <div className="text-sm">
                  <div className="font-semibold">Vill. Rampur Safedbaaf</div>
                  <div>Tehsil- Nowgawan Sadat, Post- JamnaKhas (Amroha)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#2d4a3e] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
            {/* Left Content */}
            <div className="text-white w-full lg:w-1/2 z-10 text-center lg:text-left">
              <div className="relative mb-4 sm:mb-6 md:mb-8">
                {slides[currentSlide].title.map((line, index) => (
                  <div
                    key={`${currentSlide}-${index}`}
                    className="overflow-visible mb-1 sm:mb-1.5 md:mb-2"
                  >
                    <h1
                      className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight animate-slide-in"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        paddingTop: "0.1em",
                        paddingBottom: "0.1em",
                      }}
                    >
                      {currentSlide === 0 ? (
                        <>
                          <span className="text-white">
                            {line.split(" ")[0]}{" "}
                          </span>
                          <span className="text-yellow-400">
                            {line.split(" ").slice(1).join(" ")}
                          </span>
                        </>
                      ) : index === 2 ? (
                        <span className="text-white font-bold text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl">
                          {line}
                        </span>
                      ) : (
                        <>
                          <span className="text-white">
                            {line
                              .replace("(SFRCT)", "")
                              .replace("उत्तर प्रदेश", "")}
                          </span>
                          {line.includes("(SFRCT)") && (
                            <span className="text-yellow-400"> (SFRCT) </span>
                          )}
                          {line.includes("उत्तर प्रदेश") && (
                            <span className="text-white">उत्तर प्रदेश</span>
                          )}
                        </>
                      )}
                    </h1>
                  </div>
                ))}
              </div>

              <p
                className="text-yellow-400 text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl mb-6 sm:mb-8 opacity-0 animate-fade-in-up leading-relaxed font-semibold"
                style={{ animationDelay: "0.7s" }}
              >
                द्वारा संचालित- सुपर फास्ट रिलीफ चेरिटेबल ट्रस्ट, रजि0न0 64/2025
              </p>

              <a
                href="/register"
                className="inline-flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="bg-yellow-400 rounded-full p-2 sm:p-2.5">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-serif italic">
                  Register Now
                </div>
              </a>
            </div>

            {/* Right Image */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] overflow-hidden">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-contain rounded-lg shadow-2xl transition-all duration-1000 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-1 xs:left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 sm:gap-3 md:gap-4 z-30">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="bg-white/20 backdrop-blur-sm p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="bg-white/20 backdrop-blur-sm p-1.5 xs:p-2 sm:p-2.5 md:p-3 rounded-full hover:bg-white/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-3 xs:bottom-4 sm:bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                disabled={isAnimating}
                className={`h-1.5 xs:h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500 ease-in-out disabled:cursor-not-allowed ${
                  index === currentSlide
                    ? "bg-yellow-400 w-5 xs:w-6 sm:w-8 md:w-10"
                    : "bg-white/50 w-1.5 xs:w-2 sm:w-2.5 md:w-3 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromTop {
          0% {
            transform: translateY(-50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideInFromTop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (max-width: 375px) {
          .xs\:text-2xl {
            font-size: 1.25rem;
          }
          .xs\:w-64 {
            width: 14rem;
          }
          .xs\:h-64 {
            height: 14rem;
          }
        }
      `}</style>
    </div>
  );
}
