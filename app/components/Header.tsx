"use client";

import { motion } from "framer-motion";

export default function Header() {
  const phoneNumber = "0548920707";

  // ✅ تتبع التحويل الصحيح
  const trackConversion = (url: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== "undefined" && (window as any).gtag) {
      const callback = () => {
        window.location.href = url;
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag("event", "conversion", {
        send_to: "AW-17841696051/sjCWCJv79fcbELPayrtC",
        value: 1.0,
        currency: "SAR",
        event_callback: callback,
      });

      // fallback احتياطي
      setTimeout(callback, 800);
    } else {
      window.location.href = url;
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-4 z-50 w-full flex justify-center"
    >
      <div className="w-full max-w-4xl bg-white/50 backdrop-blur-lg shadow-2xl rounded-full flex items-center justify-between px-6 py-3">

        {/* ✅ زر الاتصال مع تتبع صحيح */}
        <motion.a
          href={`tel:${phoneNumber}`}
          onClick={(e) => {
            e.preventDefault();
            trackConversion(`tel:${phoneNumber}`);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-4 py-2 sm:px-5 sm:py-2.5
            font-semibold rounded-full shadow-lg
            bg-gradient-to-r from-green-400 to-green-600
            text-white text-xs sm:text-sm
            hover:from-green-500 hover:to-green-700
            transition-all duration-300
          "
        >
          اتصل الآن
        </motion.a>

        {/* النص في المنتصف */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-900 font-bold text-sm sm:text-base md:text-lg flex-1 mx-4"
        >
          هوم سبا خدمة مساج منزلي وفندقي
        </motion.div>

        {/* اللوجو */}
        <div className="flex items-center">
          <img
            src="/aaa.png"
            alt="Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
        </div>

      </div>
    </motion.header>
  );
}