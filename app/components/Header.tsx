"use client";

import { motion } from "framer-motion";

export default function Header() {
  const phoneNumber = "+966549038626"; 

  const trackConversion = (url: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).gtag) {
      const callback = () => {
        window.location.href = url;
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17841696051/KeXLCJe6mcQcELPayrtC",
        value: 1.0,
        currency: "SAR",
        event_callback: callback,
      });

      setTimeout(callback, 500);
    } else {
      window.location.href = url;
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2 sm:py-3"
      style={{ direction: "rtl" }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-8">
        
        {/* 1. الطرف الأيمن: اللوجو */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center cursor-pointer shrink-0"
        >
          <img
            src="/aaa.png"
            alt="اللوجو"
            className="w-11 h-11 sm:w-16 sm:h-16 object-contain" // تقليص حجم اللوجو في الجوال ليصبح نحيفاً
          />
        </div>

        {/* 2. المنتصف: خيارات التنقل (شغالة شاشات كبيرة وجوال في صف واحد نحيف) */}
        <nav className="flex items-center gap-3 sm:gap-8 font-bold text-gray-600 text-[11px] sm:text-sm mx-2 overflow-x-auto no-scrollbar">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-amber-600 whitespace-nowrap">الرئيسية</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-amber-600 whitespace-nowrap">خدماتنا</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-amber-600 whitespace-nowrap">لماذا نحن</button>
          <button onClick={() => scrollToSection('booking')} className="text-amber-600 whitespace-nowrap font-black">احجز الآن</button>
        </nav>

        {/* 3. الطرف الأيسر: زر اتصل الآن */}
        <motion.a
          href={`tel:${phoneNumber}`}
          onClick={(e) => {
            e.preventDefault();
            trackConversion(`tel:${phoneNumber}`);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-3 py-2 sm:px-5 sm:py-2.5
            font-bold rounded-md shadow-sm shrink-0
            bg-gradient-to-r from-green-500 to-green-600
            text-white text-[11px] sm:text-sm
            hover:from-green-600 hover:to-green-700
            transition-all duration-300
          "
        >
          اتصل الآن
        </motion.a>

      </div>
    </motion.header>
  );
}