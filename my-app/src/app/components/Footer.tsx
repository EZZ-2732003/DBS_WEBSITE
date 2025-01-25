// components/Footer.tsx
import { FaFacebook,  FaInstagram, } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* معلومات الاتصال */}
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
            
            <p className="text-gray-400">+20 10 30090556</p>
            <p className="text-gray-400">digitalbrainskiils@gmail.com</p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/aboutUs" className="text-gray-400 hover:text-white">
                  من نحن
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-400 hover:text-white">
                  الكورسات
                </a>
              </li>
              <li>
                <a href="/contactUs" className="text-gray-400 hover:text-white">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;