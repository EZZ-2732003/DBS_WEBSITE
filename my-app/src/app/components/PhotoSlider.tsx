"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

// قائمة بالصور
const images = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
  "/photo7.jpg",
  "/photo8.jpg",
  "/photo9.jpg",
  "/photo10.jpg",
  "/photo11.jpg",
  "/photo12.jpg",
  "/photo13.jpg",
  "/photo14.jpg",
  "/photo15.jpg",
  "/photo16.jpg",
  "/photo17.jpg",
  "/photo18.jpg",
];

const PhotoSlider: React.FC = () => {
  const iconsRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // حالة للتحكم في التشغيل/الإيقاف
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // دالة لتحريك الشريط
  const moveSlider = (direction: "prev" | "next") => {
    if (!sliderRef.current) return;

    const containerWidth = sliderRef.current.offsetWidth;
    const newCurrentIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;

    setCurrentIndex(newCurrentIndex);

    gsap.to(sliderRef.current, {
      x: `-${newCurrentIndex * containerWidth}px`,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        // إذا وصلنا إلى النهاية، نعيد الشريط إلى البداية بشكل سلس
        if (newCurrentIndex === 0 && direction === "next") {
          gsap.set(sliderRef.current, { x: `-${containerWidth * images.length}px` });
        }
      },
    });
  };

  // بدء التمرير التلقائي
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying && sliderRef.current) {
      interval = setInterval(() => {
        moveSlider("next");
      }, 10000); // تغيير الصورة كل 10 ثوانٍ
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, currentIndex]);

  // تأثيرات الأيقونات العائمة
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
    <div className="w-full flex items-center justify-center min-h-[500px] py-12 relative bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
      {/* العناصر الطافية */}
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
      {/* الشريط المتحرك */}
      <div className="w-full relative z-10">
        <div
          ref={sliderRef}
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* تكرار الصور بشكل غير منتهٍ */}
          {[...images, ...images, ...images].map((image, index) => (
            <div
              key={index}
              className="w-[300px] h-[200px] flex-shrink-0 mx-2 relative"
            >
              <Image
                src={image}
                alt={`Photo ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
        {/* أزرار التحكم */}
        <div className="flex justify-between absolute bottom--10 w-full px-4">
          <button
            onClick={() => moveSlider("prev")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            السابق
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            {isPlaying ? "إيقاف" : "تشغيل"}
          </button>
          <button
            onClick={() => moveSlider("next")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
          >
            التالي
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;