"use client"; // تأكد من إضافة هذا السطر إذا كنت تستخدم تفاعلات مثل hover

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCalculator, FaCube, FaBrain, FaLightbulb } from "react-icons/fa";
import {
  FaBook,
  FaPencilAlt,
  FaChild,
  FaStar,
  FaHeart,
  FaSmile,
  FaGraduationCap,
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

const CoursesSummarySection = () => {
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

  const courses = [
    {
      title: "كورس الحساب الذهني",
      icon: <FaCalculator className="text-6xl text-blue-600" />,
      description:
        "تعلم الحساب الذهني باستخدام أحدث الأساليب العلمية لتنمية مهاراتك في الرياضيات.",
    },
    {
      title: "كورس حل مكعبات الروبيك",
      icon: <FaCube className="text-6xl text-green-600" />,
      description:
        "اكتشف أسرار حل مكعبات الروبيك بسرعة وفعالية مع أفضل المدربين.",
    },
    {
      title: "كورس الذاكرة",
      icon: <FaBrain className="text-6xl text-purple-600" />,
      description:
        "طور ذاكرتك وقدراتك العقلية من خلال تمارين وتقنيات متقدمة.",
    },
    {
      title: "كورس حل المشكلات",
      icon: <FaLightbulb className="text-6xl text-yellow-600" />,
      description:
        "تعلم كيفية تحليل المشكلات وإيجاد حلول إبداعية وفعالة.",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-[500px] py-16 relative bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full mx-4 relative z-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 group relative overflow-hidden"
          >
            {/* الأيقونة */}
            <div className="mb-4">{course.icon}</div>

            {/* العنوان */}
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {course.title}
            </h3>

            {/* التفاصيل (تظهر عند الهوفر) */}
            <div className="absolute inset-0 bg-white rounded-3xl p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <p className="text-lg text-gray-700">{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSummarySection;