"use client"; // تأكد من إضافة هذا السطر لأننا نستخدم تفاعلات
import Layout from "../layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Image from "next/image"; // استيراد مكون Image لاستخدام الصور

const SectionContent = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24" dir="rtl">
      {/* قسم الصورة والعنوان */}
      <div className="flex flex-col items-center mb-8 text-right">
        {/* صورة البروفايل */}
        <Image
          src="/CVPIC.png" // المسار النسبي للصورة
          alt="غانم سيد "
          width={150}
          height={150}
          className="rounded-full border-4 border-white mb-4"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
          غانم سيد - السيرة الذاتية
        </h1>
      </div>

      {/* قسم المحتوى الأساسي */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
        {/* قسم المعلومات الشخصية */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">المعلومات الشخصية</h3>
          <ul className="list-disc list-inside text-white text-sm md:text-base">
            <li>الاسم: غانم سيد </li>
            <li>تاريخ الميلاد: 1 يناير 1984</li>
            <li>الجنسية: مصري</li>
            <li>العنوان: العاشر من رمضان الشرقية مصر</li>
            <li>أرقام الهواتف: 01026684476 / 01030090556</li>
          </ul>
        </div>

        {/* قسم المؤهلات العلمية */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6">
          <h3 className="text-xl font-bold text-white mb-4">المؤهلات العلمية</h3>
          <ul className="list-disc list-inside text-white text-sm md:text-base">
            <li>بكالوريوس علوم زراعية - جامعة القاهرة</li>
            <li>شهادة ICDL - جامعة عين شمس</li>
            <li>مدرب رقمي عبر الإنترنت - جامعة عين شمس</li>
          </ul>
        </div>

        {/* قسم الشهادات المهنية */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">الشهادات المهنية</h3>
          <ul className="list-disc list-inside text-white text-sm md:text-base">
            <li>مدرب مستقبل متخصص (CFPT) - مركز التدريب الكندي</li>
            <li>برنامج مصغر في إدارة الأعمال - مركز التدريب الكندي</li>
            <li>دبلوم صغير في الصحة النفسية - الأكاديمية الأوروبية</li>
            <li>دبلوم دولي TOT - الأكاديمية الأوروبية</li>
            <li>إدارة الضغوط النفسية - الأكاديمية الأوروبية</li>
            <li>مهارات قيادة ناجحة - الأكاديمية الأوروبية</li>
            <li>قوة التغيير الإيجابي - الأكاديمية الأوروبية</li>
            <li>إدارة الغضب - الأكاديمية الأوروبية</li>
            <li>إدارة الأزمات وحل المشكلات - الأكاديمية الأوروبية</li>
            <li>مهارات التواصل - أكاديمية الاستمرارية</li>
            <li>الآداب والمعاملات - الأكاديمية الأوروبية</li>
            <li>الحافز ومهارات الإقناع - الأكاديمية الأوروبية</li>
          </ul>
        </div>

        {/* قسم البرامج المتخصصة */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">البرامج المتخصصة</h3>
          <ul className="list-disc list-inside text-white text-sm md:text-base">
            <li>مدرب معتمد لبرنامج مهارات العقل الرقمي - برنامج DBS</li>
            <li>مدرب معتمد للتنمية الذهنية - الاتحاد الدولي للتنمية الذهنية</li>
            <li>عضو بلجنة التدريب - وزارة التضامن الاجتماعي</li>
            <li>مدرب معتمد لمهارات العقل الرقمي - وزارة التضامن الاجتماعي</li>
            <li>مدرب برامج تنمية المجتمع منذ عام 2018 - مركز تنمية ثقافة المجتمع</li>
            <li>مدرب حساب ذهني معتمد - معهد MasterMind</li>
            <li>مدرب تعلم ذكي معتمد - معهد Smart Learning</li>
            <li>مدرب تنمية ذات معتمد - الجمعية الوطنية للتنمية الذاتية</li>
            <li>مدرب معتمد للترتيبات الدولية - الأكاديمية العربية</li>
            <li>حالياً في طور الحصول على اعتماد كمدرب حياة - الجامعة الأم</li>
          </ul>
        </div>

        {/* قسم الخبرة العملية */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">الخبرة العملية</h3>
          <p className="text-white text-sm md:text-base text-right">
            معلم ومدرب ذو خبرة في مجال مهارات العقل الرقمي، التنمية الذهنية، والتطوير الذاتي.
            مختص في تقديم ورش عمل حول القيادة، التواصل، إدارة الضغوط، والتغيير الإيجابي.
            سجل حافل في برامج تنمية المجتمع والمبادرات التعليمية.
          </p>
        </div>

        {/* قسم بيان الرؤية */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl p-6 col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold text-white mb-4">بيان الرؤية</h3>
          <p className="text-white text-sm md:text-base text-right">
            متخصص في تمكين الأفراد من خلال مناهج تدريبية مبتكرة وتعزيز النمو الشخصي، المرونة
            الذهنية، والوعي الرقمي. ملتزم بدعم التقدم المجتمعي من خلال سد الفجوات في التعليم
            والمهارات.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function GhanemProfilePage() {
  return (
    <Layout>
      <Head>
        <title>غانم سيد حسن - السيرة الذاتية</title>
        <meta name="description" content="صفحة السيرة الذاتية لغانم سيد حسن" />
      </Head>
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden" dir="rtl">
        <SectionContent />
      </div>
      <Footer />
    </Layout>
  );
}