// components/SplashScreen.tsx
"use client"; // هذا مهم لأننا نستخدم تفاعلية (useEffect و useRef)

import { useEffect, useRef } from "react";
import gsap from "gsap";
import logo from './images/logo.png'; // استيراد الصورة

// تعريف نوع الـ Props
interface SplashScreenProps {
  onFinish: () => void; // دالة لا تأخذ وسائط ولا تُرجع أي شيء
}

const SplashScreen = ({ onFinish }: SplashScreenProps) => {
  // استخدام useRef للوصول إلى عناصر DOM
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // إنشاء تسلسل زمني (timeline) باستخدام GSAP
    const tl = gsap.timeline();

    // تأثيرات الظهور
    if (containerRef.current && titleRef.current && subtitleRef.current && logoRef.current) {
      tl.from(containerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .from(titleRef.current, {
          y: -50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          logoRef.current,
          {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.5"
        );
    }

    // إخفاء الشاشة بعد 3 ثوانٍ
    const timer = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: onFinish, // تنفيذ onFinish بعد انتهاء animation
        });
      }
    }, 3000);

    // تنظيف المؤقت وإيقاف animation عند إغلاق المكون
    return () => {
      clearTimeout(timer);
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <h1
        ref={titleRef}
        className="text-4xl font-bold text-white"
      >
        مرحبًا بك في موقعنا
      </h1>
      <p
        ref={subtitleRef}
        className="text-xl text-white mt-4"
      >
        نحن نسعد بزيارتك
      </p>
      <img
        ref={logoRef}
        src={logo.src} // استخدام الصورة المستوردة
        alt="شعار الموقع"
        className="w-48 h-24 mt-8"
      />
    </div>
  );
};

export default SplashScreen;