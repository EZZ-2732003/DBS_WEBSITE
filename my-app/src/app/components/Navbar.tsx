"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import logo from './images/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // حالة لتتبع التمرير
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logoRef.current && linksRef.current) {
      gsap.set([logoRef.current, linksRef.current.children], {
        opacity: 0,
        y: 20,
      });

      gsap.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.to(linksRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }

    // إضافة تأثير التمرير
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div
        className={`bg-white/10 backdrop-blur-md rounded-lg shadow-lg w-full max-w-4xl mx-4 transition-all duration-300 ${
          isScrolled ? 'bg-white/20 backdrop-blur-md shadow-lg' : 'bg-white/10 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              ref={logoRef}
              href="/"
              className="flex items-center"
            >
              <Image
                src={logo} // المسار إلى صورة الشعار
                alt="Logo"
                width={150} // عرض الصورة
                height={60} // ارتفاع الصورة
                className="object-contain" // للحفاظ على نسبة العرض إلى الارتفاع
              />
            </Link>

            {/* Hamburger Menu Icon (للأجهزة الصغيرة) */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/s"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>

            {/* Navigation Links (للأجهزة الكبيرة) */}
            <div
              ref={linksRef}
              className={`lg:flex lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
            >
              <Link
                href="/aboutUs"
                className="block lg:inline-block text-gray-700 hover:text-blue-600 text-lg font-semibold transition duration-300 transform hover:scale-105 py-2 lg:py-0"
              >
                من نحن
              </Link>
              <Link
                href="/courses"
                className="block lg:inline-block text-gray-700 hover:text-blue-600 text-lg font-semibold transition duration-300 transform hover:scale-105 py-2 lg:py-0"
              >
                الدورات
              </Link>
              <Link
                href="/contactUs"
                className="block lg:inline-block text-gray-700 hover:text-blue-600 text-lg font-semibold transition duration-300 transform hover:scale-105 py-2 lg:py-0"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}