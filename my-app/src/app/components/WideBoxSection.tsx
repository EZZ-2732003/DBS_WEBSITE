"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaBook,
  FaCalculator,
  FaPencilAlt,
  FaChild,
  FaStar,
  FaHeart,
  FaSmile,
  FaGraduationCap,
  FaCube,
  FaDice,
} from "react-icons/fa";
import {
  GiBrain,
  GiAbacus,
  GiBookshelf,
  GiTeacher,
  GiCube,
  GiSpinningTop,
} from "react-icons/gi";
import Link from "next/link"; // لربط الزر بصفحة الدورات

const WideBoxSection = () => {
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && iconsRef.current) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const icons = iconsRef.current.children;
      const iconSize = 80;

      const getRandomPosition = (index: number) => {
        let x, y;
        let overlap;
        do {
          overlap = false;
          x = Math.random() * (screenWidth - iconSize);
          y = Math.random() * (screenHeight - iconSize);

          for (let i = 0; i < index; i++) {
            const otherIcon = icons[i] as HTMLElement;
            const otherX = parseFloat(otherIcon.style.left);
            const otherY = parseFloat(otherIcon.style.top);

            if (
              Math.abs(x - otherX) < iconSize &&
              Math.abs(y - otherY) < iconSize
            ) {
              overlap = true;
              break;
            }
          }
        } while (overlap);

        return { x, y };
      };

      Array.from(icons).forEach((icon, index) => {
        const { x, y } = getRandomPosition(index);
        gsap.set(icon, {
          position: "absolute",
          left: x,
          top: y,
          opacity: 0,
        });

        gsap.to(icon, {
          opacity: 1,
          duration: 1,
          delay: 1 + index * 0.3,
          ease: "power2.out",
        });

        gsap.to(icon, {
          x: `+=${Math.random() * 40 - 20}`,
          y: `+=${Math.random() * 40 - 20}`,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });
    }
  }, []);

  return (
    // إضافة dir="rtl" للعنصر الخارجي لضمان عرض النص من اليمين إلى اليسار
    <div
      className="flex justify-center items-center min-h-[400px] py-16 relative bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden"
      dir="rtl"
    >
      {/* الأيقونات المتحركة */}
      <div ref={iconsRef} className="absolute inset-0 pointer-events-none">
        <FaBook className="text-6xl text-yellow-400 opacity-30" />
        <FaCalculator className="text-6xl text-green-400 opacity-30" />
        <GiBrain className="text-6xl text-red-400 opacity-30" />
        <GiAbacus className="text-6xl text-pink-400 opacity-30" />
        <FaPencilAlt className="text-6xl text-teal-400 opacity-30" />
        <FaChild className="text-6xl text-orange-400 opacity-30" />
        <FaStar className="text-6xl text-yellow-200 opacity-30" />
        <FaHeart className="text-6xl text-red-200 opacity-30" />
        <FaSmile className="text-6xl text-blue-200 opacity-30" />
        <FaGraduationCap className="text-6xl text-purple-200 opacity-30" />
        <GiBookshelf className="text-6xl text-green-200 opacity-30" />
        <GiTeacher className="text-6xl text-teal-200 opacity-30" />
        <FaCube className="text-6xl text-indigo-400 opacity-30" />
        <FaDice className="text-6xl text-cyan-400 opacity-30" />
        <GiCube className="text-6xl text-amber-400 opacity-30" />
        <GiSpinningTop className="text-6xl text-lime-400 opacity-30" />
      </div>

      {/* المحتوى الرئيسي */}
      <div
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full mx-4 relative z-10"
        dir="rtl"
      >
        <h2 className="text-4xl font-bold text-blue-600 mb-6 text-right">
          ما تقدمه الأكاديمية التعليمية
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed text-right">
          في أكاديميتنا، نقدم مجموعة واسعة من البرامج التعليمية المبتكرة والمصممة خصيصًا لتنمية المهارات العقلية والحساب الذهني للأطفال والمراهقين. برامجنا تشمل:
        </p>
        <ul className="mt-6 text-lg text-gray-700 list-disc list-inside space-y-2 text-right">
          <li>تعليم الحساب الذهني باستخدام أحدث الأساليب العلمية.</li>
          <li>تنمية المهارات العقلية مثل التركيز والذاكرة والإبداع.</li>
          <li>دورات متخصصة في الرياضيات والعلوم للأطفال من سن 3 إلى 17 عامًا.</li>
          <li>أنشطة تفاعلية ومسابقات لتحفيز التعلم والتفكير الإبداعي.</li>
        </ul>
        <div className="mt-8 text-center">
          {/* زر "تعرف أكثر" مرتبط بصفحة الدورات */}
          <Link href="/courses" passHref>
            <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:scale-105 transition-transform duration-300">
              تعرف أكثر
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WideBoxSection;
