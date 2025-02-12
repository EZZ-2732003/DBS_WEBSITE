"use client"; // تأكد من إضافة هذا السطر لأننا نستخدم تفاعلات
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaLightbulb,
  FaUsers,
  FaTrophy,
  FaHandsHelping,
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
import Layout from "../layout"; // استيراد Layout إذا كان موجودًا
import Navbar from "../components/Navbar"; // تعديل مسار الاستيراد إلى المسار الصحيح

export default function AboutUsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const floatingIconsRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // تفعيل الأنيميشن عند ظهور المكون
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // أنيميشن للنصوص
            gsap.from(textRefs.current, {
              opacity: 0,
              y: 50,
              stagger: 0.3, // تأخير ظهور كل نص
              duration: 1,
              ease: "power2.out",
            });

            // أنيميشن للأيقونات
            gsap.from(iconRefs.current, {
              opacity: 0,
              y: 50,
              stagger: 0.3, // تأخير ظهور كل أيقونة
              duration: 1,
              ease: "power2.out",
            });
          }
        });
      },
      { threshold: 0.5 } // تفعيل الأنيميشن عند ظهور 50% من المكون
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    // حركة الأيقونات الطافية
    if (typeof window !== "undefined" && floatingIconsRef.current) {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const icons = floatingIconsRef.current.children;
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

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <Layout>
      <Navbar />
      {/* زيادة المساحة من فوق باستخدام pt-32 أو pt-40 */}
      <div
        className="bg-gradient-to-r from-blue-500 to-purple-600 pt-40 pb-16 relative overflow-hidden"
        ref={sectionRef}
      >
        {/* الأيقونات الطافية */}
        <div ref={floatingIconsRef} className="absolute inset-0 pointer-events-none">
          {/* الأيقونات الأصلية */}
          <FaBook className="text-6xl text-yellow-400 opacity-30" />
          <FaCalculator className="text-6xl text-green-400 opacity-30" />
          <GiBrain className="text-6xl text-red-400 opacity-30" />
          <GiAbacus className="text-6xl text-pink-400 opacity-30" />
          <FaPencilAlt className="text-6xl text-teal-400 opacity-30" />
          <FaChild className="text-6xl text-orange-400 opacity-30" />

          {/* الأيقونات الجديدة */}
          <FaStar className="text-6xl text-yellow-200 opacity-30" />
          <FaHeart className="text-6xl text-red-200 opacity-30" />
          <FaSmile className="text-6xl text-blue-200 opacity-30" />
          <FaGraduationCap className="text-6xl text-purple-200 opacity-30" />
          <GiBookshelf className="text-6xl text-green-200 opacity-30" />
          <GiTeacher className="text-6xl text-teal-200 opacity-30" />

          {/* أيقونات إضافية */}
          <FaCube className="text-6xl text-indigo-400 opacity-30" />
          <FaDice className="text-6xl text-cyan-400 opacity-30" />
          <GiCube className="text-6xl text-amber-400 opacity-30" />
          <GiSpinningTop className="text-6xl text-lime-400 opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl font-bold text-center text-white mb-12 text-shadow">
            من نحن
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* النص */}
            <div className="space-y-8">
              <div
                ref={(el) => {
                  if (el) textRefs.current[0] = el;
                }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8"
              >
                <p className="text-xl text-white leading-relaxed text-shadow">
                  نحن أكاديمية متخصصة في تنمية مهارات العقل الرقمية  والحساب الذهني للنشء من عمر 4 الي18 سنة
                  . نقدم برامج تعليمية مبتكرة ومصممة بعناية لتنمية القدرات
                  الذهنية وتعزيز الإبداع والتفكير المنطقي. تأسست الأكاديمية بهدف
                  تمكين الأجيال القادمة من خلال توفير أدوات تعليمية متقدمة وبيئة
                  محفزة للتعلم والنمو.
                </p>
              </div>
              <div
                ref={(el) => {
                  if (el) textRefs.current[1] = el;
                }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8"
              >
                <p className="text-xl text-white leading-relaxed text-shadow">
                  نؤمن بأن كل طفل لديه القدرة على تحقيق الإنجازات الكبيرة إذا تم
                  توجيهه بشكل صحيح. لذلك، نعمل على تطوير برامجنا باستمرار لتلبية
                  احتياجات الطلاب وأولياء الأمور. نقدم دورات في الحساب الذهني،
                  والذاكرة، وحل المشكلات، بالإضافة إلى أنشطة تفاعلية ومسابقات لتحفيز
                  التعلم والتفكير الإبداعي.
                </p>
              </div>
              <div
                ref={(el) => {
                  if (el) textRefs.current[2] = el;
                }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8"
              >
                <p className="text-xl text-white leading-relaxed text-shadow">
                  تتميز أكاديميتنا بفريق من المدربين المحترفين والمتخصصين في مجال
                  التعليم وتنمية المهارات العقلية. نحتفل بإنجازات طلابنا في المسابقات
                  المحلية والدولية، ونسعى دائمًا لتحقيق التميز في كل ما نقدمه.
                </p>
              </div>
            </div>

            {/* الأيقونات المتحركة */}
            <div className="grid grid-cols-2 gap-8">
              <div
                ref={(el) => {
                  if (el) iconRefs.current[0] = el;
                }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 inner-shadow"
              >
                <FaLightbulb className="text-6xl text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white-800 mb-4">الإبداع</h3>
                <p className="text-white-600">
                  نعزز الإبداع والتفكير خارج الصندوق.
                </p>
              </div>
              <div
                ref={(el) => {
                  if (el) iconRefs.current[1] = el;
                }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 inner-shadow"
              >
                <FaUsers className="text-6xl text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white-800 mb-4">الفريق</h3>
                <p className="text-white-600">
                  فريق من المدربين المحترفين والمتخصصين.
                </p>
              </div>
              <div
                ref={(el) => {
                  if (el) iconRefs.current[2] = el;
                }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 inner-shadow"
              >
                <FaTrophy className="text-6xl text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white-800 mb-4">الإنجازات</h3>
                <p className="text-white-600">
                  نحتفل بإنجازات طلابنا في المسابقات المحلية والدولية.
                </p>
              </div>
              <div
                ref={(el) => {
                  if (el) iconRefs.current[3] = el;
                }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 inner-shadow"
              >
                <FaHandsHelping className="text-6xl text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white-800 mb-4">الدعم</h3>
                <p className="text-white-600">
                  نقدم الدعم الكامل للطلاب وأولياء الأمور.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <Footer />
    </Layout>
  );
}