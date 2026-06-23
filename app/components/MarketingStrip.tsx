"use client";

import { motion } from "framer-motion";

export default function MarketingTicker() {
  const text =
    "لم تعد بحاجة لمغادرة منزلك أو فندقك لتستمتع بتجربة استرخاء متكاملة نقدم لك خدمة مساج منزلي وفندقي راقية مصممة خصيصًا لتمنحك الراحة في المكان الذي تختاره";

  return (
    <div className="relative w-full overflow-hidden h-6 bg-white flex items-center">
      {/* تأثير الفيد (Fade) من الأطراف لإعطاء مظهر احترافي */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* الحاوية المتحركة باستخدام Framer Motion */}
      <motion.div
        className="flex whitespace-nowrap text-gray-500 text-sm font-medium gap-16"
        initial={{ x: "0%" }}
        animate={{ x: "100%" }} // التحريك باتجاه اليمين بما يتناسب مع القراءة العربية
        transition={{
          duration: 25, // سرعة مريحة للقراءة
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ display: "flex" }}
      >
        {/* نكرر النص مرتين فقط لملء الفراغ وضمان استمرار الحركة اللانهائية بشكل سلس */}
        <span dir="rtl" className="pl-4">{text}</span>
        <span dir="rtl" className="pl-4">{text}</span>
      </motion.div>
    </div>
  );
}