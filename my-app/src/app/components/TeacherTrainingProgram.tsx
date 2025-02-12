import React, { useRef } from "react";
import Link from "next/link"; // استيراد Link من next/link
import Animation from "./Animation2"; // تأكد من مسار الاستيراد الصحيح للمكون

const TeacherTrainingProgram = () => {
  const buttonRef = useRef(null); // إنشاء المرجع إذا كنت بحاجة إليه

  return (
    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg border w-full max-w-md mx-auto backdrop-blur-md bg-white/30">
      {/* صف يحتوي على الفيديو المتحرك والعنوان */}
      <div className="flex items-center mb-6">
        {/* تغليف مكون Animation لتحديد حجمه بحيث يحاكي أيقونة */}
        <div className="w-12 h-12 mr-4">
          <Animation />
        </div>
        <h3 className="text-base md:text-xl font-semibold text-white whitespace-nowrap">
          يمكنك الانضمام أيضًا إلى برنامج تدريب المعلمين
        </h3>
      </div>
      {/* الزر */}
      <Link href="/TotTrainingPage" passHref>
        <button
          ref={buttonRef}
          className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="ابدأ الآن"
        >
          التفاصيل
        </button>
      </Link>
    </div>
  );
};

export default TeacherTrainingProgram;
