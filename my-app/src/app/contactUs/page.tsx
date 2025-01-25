"use client";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaPaperPlane,
  
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
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
import Layout from "../layout";
import Navbar from "../components/Navbar";

export default function ContactUsPage() {
  const floatingIconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && floatingIconsRef.current) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const icons = floatingIconsRef.current.children;
      const iconSize = 80;

      const getRandomPosition = (index: number) => {
        let x, y;
        let overlap;
        let attempts = 0;
        const maxAttempts = 100;

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

          attempts++;
          if (attempts > maxAttempts) {
            break;
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
    <Layout>
      <Navbar />
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 pt-40 pb-16 relative overflow-hidden min-h-screen"
      >
        {/* الأيقونات الطافية */}
        <div
          ref={floatingIconsRef}
          className="absolute inset-0 pointer-events-none z-0"
        >
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white mb-12 text-shadow">
            تواصل معنا
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* معلومات التواصل */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
               
                {/* الهاتف */}
                <div className="flex items-center">
                  <FaPhone className="text-2xl text-green-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">الهاتف</h3>
                    <p className="text-white">+20 10 30090556</p>
                  </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="flex items-center">
                  <FaEnvelope className="text-2xl text-green-500 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">البريد الإلكتروني</h3>
                    <p className="text-white">digitalbrainskills@gmail.com</p>
                  </div>
                </div>

                {/* وسائل التواصل الاجتماعي */}
                <div className="flex items-center space-x-6">
                  <a
                    href="https://www.facebook.com/DBS.TR.ghanem"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition duration-200"
                  >
                    <div className="flex flex-col items-center">
                      <FaFacebook className="text-4xl" />
                      <span className="text-sm mt-2">Facebook</span>
                    </div>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition duration-200"
                  >
                    <div className="flex flex-col items-center">
                      <FaInstagram className="text-4xl" />
                      <span className="text-sm mt-2">Instagram</span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/201030090556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition duration-200"
                  >
                    <div className="flex flex-col items-center">
                      <FaWhatsapp className="text-4xl" />
                      <span className="text-sm mt-2">WhatsApp</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* نموذج التواصل */}
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">أرسل لنا رسالة</h2>
              <form className="space-y-6">
                {/* حقل الاسم */}
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-white">
                    الاسم
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                    placeholder="أدخل اسمك"
                  />
                </div>

                {/* حقل البريد الإلكتروني */}
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-white">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>

                {/* حقل الرسالة */}
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-white">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200"
                    placeholder="أدخل رسالتك"
                  />
                </div>

                {/* زر الإرسال */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-200"
                  >
                    <FaPaperPlane className="text-xl mr-2" />
                    إرسال الرسالة
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}