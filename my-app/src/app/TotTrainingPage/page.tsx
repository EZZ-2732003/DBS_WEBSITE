import React from "react";
import Layout from "../layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TotTrainingPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 pt-40 pb-16 relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" dir="rtl">
          {/* عنوان الصفحة */}
          <h1 className="text-5xl font-bold text-center text-white mb-12">
            كورس تدريب مدربين (TOT)
          </h1>
          {/* محتوى الصفحة داخل صندوق بتأثير blur وخلفية شفافة */}
          <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-8 text-white text-right">
            <p className="mb-6 text-lg">
              في المهارات العقلية، الحساب الذهني، ومكعب الروبيك
            </p>
            <p className="mb-6 text-base">
              هل ترغب في أن تصبح مدربًا معتمدًا في تنمية المهارات العقلية والحساب الذهني وحل مكعب الروبيك؟ الآن لديك الفرصة للانضمام إلى دورة تدريب المدربين (TOT) المتخصصة التي تؤهلك لنقل هذه المهارات الفريدة للطلاب والمتدربين بأساليب احترافية وعلمية حديثة.
            </p>
            <h2 className="text-2xl font-bold mb-4">محتوى الكورس:</h2>
            <ul className="list-disc list-inside mb-6 text-base">
              <li>✅ أساسيات التدريب والتدريس الفعّال: كيف تصبح مدربًا متميزًا وتتعامل مع مختلف الفئات العمرية.</li>
              <li>✅ مهارات الحساب الذهني: تعلم الأساليب المتقدمة في الحساب السريع وتحفيز القدرات الذهنية.</li>
              <li>✅ تقنيات مكعب الروبيك: فهم الطرق السريعة لحله وتعليمها بأسلوب ممتع وشيق.</li>
              <li>✅ التطبيقات العملية: استراتيجيات تعليمية عملية لضمان إيصال المعلومات بفعالية.</li>
              <li>✅ التقييم والشهادة: اختبارات عملية ونظرية مع شهادة معتمدة عند اجتياز الدورة بنجاح.</li>
            </ul>
            <h2 className="text-2xl font-bold mb-4">مزايا الكورس:</h2>
            <ul className="list-disc list-inside text-base">
              <li>✔ تدريب عملي مكثف على تقنيات الحساب الذهني ومكعب الروبيك.</li>
              <li>✔ مواد تدريبية متكاملة تساعدك في بدء مسيرتك التدريبية.</li>
              <li>✔ الحصول على شهادة معتمدة تؤهلك للتدريب في المؤسسات التعليمية والمراكز التدريبية.</li>
              <li>✔ دعم مستمر بعد الكورس لمساعدتك في تطبيق المهارات المكتسبة.</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default TotTrainingPage;
