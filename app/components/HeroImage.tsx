"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <section className="w-full px-4 flex justify-center">
      <div className="
        relative w-full max-w-6xl 
        h-[380px] sm:h-[450px] md:h-[520px] 
        rounded-3xl overflow-hidden shadow-xl
        bg-gray-900 dark:bg-gray-800
      ">

        {/* الصورة */}
        <img
          src="/hero3.jpg"
          alt="صورة المركز"
          className="w-full h-full object-cover object-center scale-110 brightness-[0.85] dark:brightness-75"
        />

        {/* تدرج راقي */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent dark:from-black/80 dark:via-black/40"></div>

        {/* النص على اليمين */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="
            absolute top-1/2 right-6 sm:right-10 
            -translate-y-1/2 text-white 
            max-w-xs sm:max-w-sm md:max-w-md 
            text-right px-2
          "
        >
          {/* العنوان */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-lg">
            استرخِ…  
            <span className="text-amber-300">راحة جسمك</span> تبدأ من هنا
          </h1>

          {/* النص العادي */}
          <p className="mt-3 text-sm sm:text-lg md:text-xl opacity-90 leading-relaxed">
            نؤمن أن الراحة ليست رفاهية، بل ضرورة.  
            لهذا صممنا تجارب مساج عصرية تُعيد لجسدك قوته ولعقلك صفاءه،  
            ليصبح كل وقت تقضيه معنا استثمارًا في راحتك وجودة حياتك.
          </p>
        </motion.div>

        {/* جملة تسويقية بخط كبير وشفاف مع Fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="
            absolute bottom-6 left-1/2 -translate-x-1/2 
            text-white/60 dark:text-white/50 
            text-base sm:text-2xl md:text-3xl 
            font-extrabold tracking-wide 
            text-center px-4 sm:px-0
            drop-shadow-xl
          "
        >
          نصل إليك في جميع أحياء الرياض بخدمة سبا منزلية على مدار اليوم
        </motion.div>

      </div>
    </section>
  );
}
