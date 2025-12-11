"use client";

import { motion } from "framer-motion";

export default function Header() {
  const phoneNumber = "0550000000"; // ضع الرقم هنا

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        w-full 
        h-16 sm:h-20 
        flex items-center justify-between 
        px-4 sm:px-8 
        bg-white shadow-md
      "
    >
      {/* زر الاتصال على اليسار */}
      <motion.a
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          px-3 py-1 sm:px-6 sm:py-2
          border-2 border-green-500
          text-green-500 font-bold
          rounded-lg sm:rounded-xl
          bg-transparent
          shadow-md
          hover:bg-green-500 hover:text-white
          transition-all duration-300
          text-sm sm:text-base
        "
      >
        اتصل الآن
      </motion.a>

      {/* النص في الوسط */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="
          text-gray-900 font-extrabold 
          text-base sm:text-xl md:text-2xl 
          text-center leading-tight px-2
        "
      >
        هوم سبا للرجال الرياض – خدمة مساج رجالي في المنزل
      </motion.div>

      {/* اللوجو على اليمين */}
      <div className="w-10 h-10 sm:w-14 sm:h-14">
        <img src="/aaa.png" alt="Logo" className="w-full h-full object-contain" />
      </div>
    </motion.header>
  );
}
