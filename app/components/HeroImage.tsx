"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <section className="w-full px-4 py-10 flex justify-center">
      <div className="relative w-full max-w-6xl h-[420px] rounded-3xl overflow-hidden shadow-xl">

        {/* الصورة */}
        <img
          src="/hero3.jpg"
          alt="صورة المركز"
          className="w-full h-full object-cover object-center scale-110 brightness-[0.85]"
        />

        {/* تدرج راقي */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/30 to-transparent"></div>

        {/* النص على اليمين */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 right-10 -translate-y-1/2 text-white max-w-sm text-right"
        >
          <h1 className="text-4xl font-bold leading-snug drop-shadow-lg">
            استرخِ…  
            <span className="text-amber-300">راحة جسمك</span> تبدأ من هنا
          </h1>

          <p className="mt-3 text-lg opacity-90 leading-relaxed">نؤمن أن الراحة  ليست  رفاهية ، بل ضرورة  
لهذا صممنا تجارب مساج عصرية تُعيد لجسدك قوته ولعقلك صفاءه ، ليصبح كل وقت تقضيه معنا استثمارًا في راحتك وجودة حياتك
          </p>
        </motion.div>

      </div>
    </section>
  );
}
