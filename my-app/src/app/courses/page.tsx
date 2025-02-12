"use client";
import Footer from "../components/Footer";
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
  FaBrain,
  FaLightbulb,
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
import TeacherTrainingProgram from "../components/TeacherTrainingProgram"; 

export default function CoursesPage() {
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

  const courses = [
    {
      id: "mental-arithmetic",
      title: "كورس الحساب الذهني",
      description:
        "تعلم الحساب الذهني باستخدام أحدث الأساليب العلمية لتنمية مهاراتك في الرياضيات.",
      objectives: [
        "تحسين سرعة ودقة الحسابات الذهنية.",
        "تنمية مهارات التركيز والذاكرة.",
        "تعلم تقنيات متقدمة للحساب الذهني.",
      ],
      duration: "8 أسابيع",
      icon: <FaCalculator className="text-6xl text-red-500 mb-4" />, // تغيير اللون إلى الأحمر
      details: {
        benefits: [
          "تحسين القدرة على حل المسائل الرياضية بسرعة.",
          "زيادة الثقة في التعامل مع الأرقام.",
          "تطوير مهارات التفكير المنطقي والتحليلي.",
        ],
        components: [
          "تعلم أساسيات الحساب الذهني.",
          "تقنيات متقدمة للجمع والطرح والضرب والقسمة.",
          "تمارين عملية لتحسين السرعة والدقة.",
        ],
        competitions: [
          {
            name: "بطولة أفريقيا للحساب الذهني",
            description: "مسابقة سنوية تجمع أفضل المواهب في الحساب الذهني من أفريقيا.",
          },
          {
            name: "كأس العالم للحساب الذهني",
            description: "مسابقة عالمية تقام كل عامين في ألمانيا.",
          },
        ],
      },
    },
    {
      id: "rubiks-cube",
      title: "كورس حل مكعبات الروبيك",
      description:
        "اكتشف أسرار حل مكعبات الروبيك بسرعة وفعالية مع أفضل المدربين.",
      objectives: [
        "تعلم خوارزميات حل مكعبات الروبيك.",
        "تحسين سرعة حل المكعبات.",
        "تنمية مهارات التفكير المنطقي.",
      ],
      duration: "6 أسابيع",
      icon: <FaCube className="text-6xl text-green-500 mb-4" />,
      details: {
        benefits: [
          "تحسين القدرة على حل الألغاز المعقدة.",
          "زيادة التركيز والانتباه.",
          "تنمية المهارات البصرية والحركية.",
        ],
        components: [
          "التعرف على أجزاء المكعب وحركاته.",
          "تعلم خوارزميات حل المكعب بأقل من دقيقتين.",
          "تمارين عملية لتحسين السرعة والدقة.",
        ],
        competitions: [
          {
            name: "بطولة حل مكعبات الروبيك في مصر",
            description: "مسابقة محلية تجمع محبي حل المكعبات.",
          },
          {
            name: "كأس العالم لحل مكعبات الروبيك",
            description: "مسابقة عالمية تقام في مختلف الدول.",
          },
        ],
      },
    },
    {
      id: "memory",
      title: "كورس الذاكرة",
      description:
        "طور ذاكرتك وقدراتك العقلية من خلال تمارين وتقنيات متقدمة.",
      objectives: [
        "تحسين القدرة على تذكر المعلومات.",
        "تعلم تقنيات الذاكرة الفوتوغرافية.",
        "تنمية مهارات التركيز والانتباه.",
      ],
      duration: "4 أسابيع",
      icon: <FaBrain className="text-6xl text-purple-500 mb-4" />,
      details: {
        benefits: [
          "تحسين القدرة على تذكر الأسماء والأرقام والمعلومات.",
          "زيادة سرعة استرجاع المعلومات.",
          "تقليل النسيان وتحسين الأداء اليومي.",
        ],
        components: [
          "تعلم تقنيات الذاكرة الفوتوغرافية.",
          "تمارين لتحسين التركيز والانتباه.",
          "تطبيقات عملية لتنشيط الذاكرة.",
        ],
        competitions: [
          {
            name: "مسابقة الذاكرة العالمية",
            description: "مسابقة تقام كل عام لتحدي قدرات الذاكرة.",
          },
          {
            name: "بطولة الذاكرة العربية",
            description: "مسابقة تجمع المواهب العربية في مجال الذاكرة.",
          },
        ],
      },
    },
    {
      id: "problem-solving",
      title: "كورس حل المشكلات",
      description:
        "تعلم كيفية تحليل المشكلات وإيجاد حلول إبداعية وفعالة.",
      objectives: [
        "تحسين مهارات التحليل والتفكير النقدي.",
        "تعلم تقنيات حل المشكلات بطرق إبداعية.",
        "تنمية مهارات اتخاذ القرار.",
      ],
      duration: "5 أسابيع",
      icon: <FaLightbulb className="text-6xl text-yellow-500 mb-4" />,
      details: {
        benefits: [
          "تحسين القدرة على تحليل المشكلات المعقدة.",
          "زيادة الإبداع في إيجاد الحلول.",
          "تنمية مهارات العمل الجماعي.",
        ],
        components: [
          "تعلم تقنيات حل المشكلات الإبداعية.",
          "تمارين عملية لتحليل المشكلات.",
          "تطبيقات عملية في الحياة اليومية.",
        ],
        competitions: [
          {
            name: "مسابقة حل المشكلات العربية",
            description: "مسابقة تجمع المواهب العربية في حل المشكلات.",
          },
          {
            name: "كأس العالم لحل المشكلات",
            description: "مسابقة عالمية تقام كل عام.",
          },
        ],
      },
    },
  ];

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
            تفاصيل الكورسات
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <div className="p-8 text-center">
                  <div className="flex justify-center">{course.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {course.title}
                  </h2>
                  <p className="text-white mb-6">{course.description}</p>

                  <h3 className="text-2xl font-bold text-white mb-4">الأهداف</h3>
                  <ul className="list-disc list-inside text-white mb-6">
                    {course.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">الاستفادة</h3>
                  <ul className="list-disc list-inside text-white mb-6">
                    {course.details.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">المكونات</h3>
                  <ul className="list-disc list-inside text-white mb-6">
                    {course.details.components.map((component, index) => (
                      <li key={index}>{component}</li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">المسابقات</h3>
                  <ul className="list-disc list-inside text-white mb-6">
                    {course.details.competitions.map((competition, index) => (
                      <li key={index}>
                        <strong>{competition.name}:</strong> {competition.description}
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-2xl font-bold text-white mb-4">المدة</h3>
                  <p className="text-white">{course.duration}</p>
                </div>
              </div>
              
            ))}
            <div className="md:col-span-2 flex justify-center">
              <TeacherTrainingProgram />
            </div>
           
          </div>
        
        </div>
      </div>
      <Footer />
    </Layout>
  );
}