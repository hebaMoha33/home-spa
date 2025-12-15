"use client";

import { motion } from "framer-motion";

export default function MarketingTicker() {
  const text =
    "لم تعد بحاجة لمغادرة منزلك أو فندقك لتستمتع بتجربة استرخاء متكاملة نقدم لك خدمة مساج منزلي وفندقي راقية مصممة خصيصًا لتمنحك الراحة في المكان الذي تختاره";

  return (
    <div className="relative w-full overflow-hidden h-6 pb-2">
      {/* Fade من الأطراف */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* النص المتحرك */}
      <motion.div
        className="flex whitespace-nowrap text-gray-500 text-sm font-medium"
        style={{ direction: "rtl" }}
        initial={{ x: 0 }}
        animate={{ x: "50%" }} // من اليسار إلى اليمين
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <span className="mx-8" dir="rtl">{text}</span>
        <span className="mx-8" dir="rtl">{text}</span>
        <span className="mx-8" dir="rtl">{text}</span>
        <span className="mx-8" dir="rtl">{text}</span>
      </motion.div>
    </div>
  );
}
