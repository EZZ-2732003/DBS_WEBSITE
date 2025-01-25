"use client"; // تأكد من إضافة هذا السطر لأننا نستخدم تفاعلات

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // استيراد مكون Image من next/image
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

// Define the Trophy interface
interface Trophy {
  logo: string; // اللوجو الخاص بالمسابقة
  title: string;
  description: string;
  achievements?: string;
  details: string; // محتوى تعريفي تفصيلي
}

// Define the props interface for TrophyCard
interface TrophyCardProps {
  trophy: Trophy;
  index: number;
}

// مكون فرعي لعرض كل مسابقة
const TrophyCard: React.FC<TrophyCardProps> = ({ trophy, index }) => {
  return (
    <div
      key={index}
      className="flex-shrink-0 w-full h-screen flex items-center justify-center p-8 snap-start relative z-10"
    >
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 relative p-8">
        {/* اللوجو في الزاوية العليا من اليمين */}
        <div className="absolute top-8 right-8 w-16 h-16">
          <Image
            src={trophy.logo}
            alt={`Logo for ${trophy.title}`}
            width={64} // تحديد عرض اللوجو
            height={64} // تحديد ارتفاع اللوجو
            objectFit="contain"
            className="rounded-full"
            quality={50} // تقليل جودة اللوجو لتقليل الحجم
          />
        </div>
        <div className="mt-16">
          {" "}
          {/* إضافة هامش أعلى لنص المسابقة */}
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {trophy.title}
          </h3>
          <p className="text-gray-600 text-lg mb-6">{trophy.description}</p>
          {trophy.achievements && (
            <p className="text-gray-600 font-semibold text-lg mb-6">
              الإنجازات: {trophy.achievements}
            </p>
          )}
          {/* المحتوى التعريفي التفصيلي */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 text-lg">{trophy.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// المكون الرئيسي
const TrophyScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // الحركة التلقائية
  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const nextIndex = (currentIndex + 1) % trophies.length;
        setCurrentIndex(nextIndex);

        // التمرير إلى المربع التالي
        containerRef.current.scrollTo({
          left: window.innerWidth * nextIndex,
          behavior: "smooth",
        });
      }
    }, 5000); // تغيير المربع كل 5 ثواني

    return () => clearInterval(interval); // تنظيف الـ interval عند إلغاء المكون
  }, [currentIndex]);

  // حركة الأيقونات العشوائية
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

  const trophies: Trophy[] = [
    {
      logo: "/Picture1.png", // لوجو المسابقة الأولى
      title: "بطولة أفريقيا للحساب الذهني وتنمية المهارات",
      description:
        "تم التأهل من تصفيات بطولة أفريقيا وانضمام 14 لاعب من البرنامج إلى المنتخب المصري ليصبح إجمالي عدد اللاعبين في المنتخب المصري من البرنامج 25 لاعب.",
      achievements: "تم حصاد المركز الأول في بطولة الروبيك.",
      details:
        "هذه البطولة هي واحدة من أبرز المسابقات في مجال الحساب الذهني في أفريقيا. شارك فيها أفضل اللاعبين من مختلف الدول الأفريقية، وتميزت بالتنافس الشديد والإنجازات الكبيرة. تم تدريب اللاعبين بشكل مكثف لتحقيق أفضل النتائج.",
    },
    {
      logo: "/Picture2.png", // لوجو المسابقة الثانية
      title: "بطولة الجمهورية من الاتحاد المصري لتنمية الذهنية للنشء",
      description: "تم حصد المراكز الأولى في المستويات الثلاثة.",
      achievements: "",
      details:
        "بطولة الجمهورية هي مسابقة وطنية تهدف إلى تنمية المهارات الذهنية لدى النشء في مصر. شارك فيها طلاب من مختلف المحافظات، وتميزت بالتنظيم الجيد والمستوى العالي للمشاركين. تم تقديم جوائز قيمة للفائزين.",
    },
    {
      logo: "/Picture3.png", // لوجو المسابقة الثالثة
      title: "البطولة العربية لاتحاد العربي لرياضة الذهنية",
      description:
        "تم حصد المركز الأول في المستوى الأول والثالث، والمركز الثالث في المستوى الثاني.",
      achievements: "",
      details:
        "البطولة العربية هي مسابقة إقليمية تجمع أفضل اللاعبين من الدول العربية. تميزت بالتنافس الشريف والإنجازات الكبيرة. تم تنظيم البطولة في دولة الإمارات العربية المتحدة، وحضرها عدد كبير من الجمهور.",
    },
    {
      logo: "/Picture4.png", // لوجو المسابقة الرابعة
      title: "بطولة الاتحاد الدولي للعداد",
      description: "تم حصد المراكز الأولى.",
      achievements: "",
      details:
        "بطولة الاتحاد الدولي هي واحدة من أبرز المسابقات العالمية في مجال الحساب الذهني. شارك فيها لاعبون من جميع أنحاء العالم، وتميزت بالمستوى العالي والتنظيم الدقيق. تم تقديم جوائز قيمة للفائزين.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden min-h-screen">
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
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory h-screen scroll-smooth scrollbar-hide relative z-10"
      >
        {trophies.map((trophy, index) => (
          <TrophyCard key={index} trophy={trophy} index={index} />
        ))}
      </div>
    </div>
  );
};

export default TrophyScrollSection;