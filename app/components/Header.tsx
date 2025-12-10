"use client";

import { motion } from "framer-motion";

export default function Header() {
  const phoneNumber = "0550000000"; // ضع الرقم هنا

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-20 flex items-center justify-between px-8 bg-white shadow-md"
    >
      {/* زر الاتصال على اليسار */}
      <motion.a
        href={`tel:${phoneNumber}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="
          px-6 py-2
          border-2 border-green-500
          text-green-500 font-bold
          rounded-xl
          bg-transparent
          shadow-md
          hover:bg-green-500 hover:text-white
          transition-all duration-300
        "
      >
        اتصل الآن
      </motion.a>

      {/* النص في الوسط */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-900 font-extrabold text-2xl sm:text-3xl text-center"
      >
        هوم سبا للرجال
      </motion.div>

      {/* اللوجو على اليمين */}
      <div className="w-14 h-14">
        <img src="/aaa.png" alt="Logo" className="w-full h-full object-contain" />
      </div>
    </motion.header>
  );
}
