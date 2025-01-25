"use client";

import { useEffect, useRef } from "react";
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
import Head from "next/head"; // لإضافة عناصر SEO
import Link from "next/link"; // لربط الزر بصفحة التواصل

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // التأكد من أن الكود يعمل فقط على العميل
    if (typeof window !== "undefined") {
      // التحقق من وجود العناصر قبل تطبيق الرسوم المتحركة
      if (titleRef.current && buttonRef.current && iconsRef.current) {
        // Animation for the title
        gsap.from(titleRef.current, {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.out",
        });

        // Animation for the button
        gsap.from(buttonRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 0.5,
          ease: "power2.out",
        });

        // تحديد مساحة الشاشة المتاحة
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // قائمة الأيقونات
        const icons = iconsRef.current.children;

        // حجم الأيقونة (نفس الحجم لجميع الأيقونات)
        const iconSize = 80; // 80px

        // وظيفة لتحديد مواضع عشوائية دون تداخل
        const getRandomPosition = (index: number) => {
          let x, y;
          let overlap;
          do {
            overlap = false;
            x = Math.random() * (screenWidth - iconSize); // موضع أفقي عشوائي
            y = Math.random() * (screenHeight - iconSize); // موضع رأسي عشوائي

            // التحقق من التداخل مع الأيقونات الأخرى
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

        // تعيين مواضع عشوائية لكل أيقونة
        Array.from(icons).forEach((icon, index) => {
          const { x, y } = getRandomPosition(index);
          gsap.set(icon, {
            position: "absolute",
            left: x,
            top: y,
            opacity: 0,
          });

          // ظهور الأيقونة
          gsap.to(icon, {
            opacity: 1,
            duration: 1,
            delay: 1 + index * 0.3, // تأخير ظهور كل أيقونة
            ease: "power2.out",
          });

          // تحريك الأيقونة بشكل عشوائي
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
    }
  }, []);

  return (
    <>
      {/* إضافة عناصر SEO */}
      <Head>
        <title>تعلم المهارات العقلية والحساب الذهني - أكاديمية التطوير الذهني</title>
        <meta
          name="description"
          content="اكتشف منصة تعليمية متخصصة في تنمية المهارات العقلية والحساب الذهني للأطفال من سن 3 إلى 17 عامًا. انضم إلينا الآن!"
        />
        <meta
          name="keywords"
          content="مهارات عقلية, حساب ذهني, تعليم الأطفال, تنمية الذكاء, دورات تعليمية"
        />
        <meta name="author" content="أكاديمية التطوير الذهني" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>

      {/* الهيرو سكشن */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
        {/* الأيقونات المتحركة */}
        <div ref={iconsRef} className="absolute inset-0 pointer-events-none">
          {/* الأيقونات الأصلية */}
          <FaBook className="text-6xl text-yellow-400 opacity-30" aria-label="كتاب" />
          <FaCalculator className="text-6xl text-green-400 opacity-30" aria-label="آلة حاسبة" />
          <GiBrain className="text-6xl text-red-400 opacity-30" aria-label="دماغ" />
          <GiAbacus className="text-6xl text-pink-400 opacity-30" aria-label="عداد" />
          <FaPencilAlt className="text-6xl text-teal-400 opacity-30" aria-label="قلم" />
          <FaChild className="text-6xl text-orange-400 opacity-30" aria-label="طفل" />

          {/* الأيقونات الجديدة */}
          <FaStar className="text-6xl text-yellow-200 opacity-30" aria-label="نجمة" />
          <FaHeart className="text-6xl text-red-200 opacity-30" aria-label="قلب" />
          <FaSmile className="text-6xl text-blue-200 opacity-30" aria-label="ابتسامة" />
          <FaGraduationCap className="text-6xl text-purple-200 opacity-30" aria-label="قبعة تخرج" />
          <GiBookshelf className="text-6xl text-green-200 opacity-30" aria-label="رف كتب" />
          <GiTeacher className="text-6xl text-teal-200 opacity-30" aria-label="معلم" />

          {/* أيقونات إضافية */}
          <FaCube className="text-6xl text-indigo-400 opacity-30" aria-label="مكعب" />
          <FaDice className="text-6xl text-cyan-400 opacity-30" aria-label="نرد" />
          <GiCube className="text-6xl text-amber-400 opacity-30" aria-label="مكعب" />
          <GiSpinningTop className="text-6xl text-lime-400 opacity-30" aria-label="دوامة" />
        </div>

        {/* العنوان */}
        <h1
          ref={titleRef}
          className="text-6xl font-bold mb-8 text-center z-10 text-shadow"
        >
          تعلم المهارات العقلية والحساب الذهني
        </h1>

        {/* الوصف */}
        <p className="text-xl mb-12 text-center z-10 text-shadow">
          منصة تعليمية مخصصة للأطفال من سن 3 إلى 17 عامًا
        </p>

        {/* الزر */}
        <Link href="/contactUs" passHref>
          <button
            ref={buttonRef}
            className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-lg z-10 hover:scale-105 transition-transform duration-300"
            aria-label="ابدأ الآن"
          >
            ابدأ الآن
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;