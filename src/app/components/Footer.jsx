"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description Section */}
          <div className="space-y-6">
            {/* <div className="w-32 h-32">
              <Image
                src="/logo.png"
                alt="SFRCT Logo"
                width={128}
                height={128}
                className="object-contain"
              />
            </div> */}
            <p className="text-gray-300 leading-relaxed">
              SFRCT सर्वजन का, सर्वजन के लिए, सर्वजन के द्वारा बनाया गया स्थल
              सहयोगता समूह है। SFRCT ने चुड़ै हुए नैभानिक संदस्य के असाधारिक
              मुख होने पर उनके परिवार को पारदर्शी तरीके से आर्थिक सहायता
              कराया जाएगा....
            </p>
            <Link href="/register" >
              <button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-colors duration-300 flex items-center gap-2">
              <span className="text-lg">♥</span>
              REGISTER NOW
            </button></Link>
          
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/member-list" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Member List
                </Link>
              </li>
              <li>
                <Link href="/beti-vivah-sahyog-suchi" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Beti Vivah Sahyog Suchi
                </Link>
              </li>
              <li>
                <Link href="/sahyog-list" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Sahyog List
                </Link>
              </li>
              <li>
                <Link href="/niyamawali" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Niyamawali
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/reset-admin" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Reset Admin
                </Link>
              </li>
              <li>
                <Link href="/sub-admin" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Sub Admin
                </Link>
              </li>
              <li>
                <Link href="/district-president-list" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  district President List
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 font-medium mb-2">Head office:</p>
                <p className="text-gray-400">Village- Rampur Safedbaaf</p>
                <p className="text-gray-400">Tehsil- Nowgawan Sadat</p>
                <p className="text-gray-400">Post- JamnaKhas (Amroha)</p>
              </div>

             

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-yellow-500">
                  <Mail size={18} />
                  <a href="mailto:SFRCTup@gmail.com" className="hover:text-yellow-400 transition-colors">
                    SFRCTUP@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone size={18} />
                  <span>9756441626, 9258868740</span>
                </div>
              
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-zinc-900 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            Copyright © 2024 Fast Relief Charitable Trust All Rights Reserved Design By{' '}
            <a 
              href="https://abligtechnologies.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              Ablig Technologies
            </a>
          </p>
          <div className="flex gap-4">
            <Link href="/refund-policy" className="hover:text-yellow-500 transition-colors">
              Refund Policy
            </Link>
            <span>|</span>
            <Link href="/privacy-policy" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-yellow-500 transition-colors">
              Term And Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-yellow-500 hover:bg-yellow-600 text-black p-4 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;