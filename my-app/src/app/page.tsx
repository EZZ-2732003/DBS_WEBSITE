// app/page.tsx أو pages/index.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import Layout from "./layout";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WideBoxSection from "./components/WideBoxSection";
import CoursesSummarySection from "./components/CoursesSummarySection";
import TrophySliderSection from "./components/TrophySliderSection";
import PhotoSlider from "./components/PhotoSlider";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; // استيراد مكون SplashScreen
import gsap from "gsap";

const HomePage = () => {
  const [showSplash, setShowSplash] = useState(true); // حالة التحكم في عرض شاشة الترحيب
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showSplash && contentRef.current) {
      // بدء ظهور الصفحة الرئيسية أثناء اختفاء شاشة الترحيب
      gsap.from(contentRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [showSplash]);

  return (
    <Layout>
      {showSplash ? (
        // عرض شاشة الترحيب إذا كانت showSplash تساوي true
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        // عرض بقية الصفحة إذا كانت showSplash تساوي false
        <div ref={contentRef}>
          <Navbar />
          <HeroSection />
          <WideBoxSection />
          <CoursesSummarySection />
          <TrophySliderSection />
          <PhotoSlider />
          <Footer />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;