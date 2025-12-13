"use client";

import { motion } from "framer-motion";

export default function Services() {
  const items = [
    {
      title: "مساج سويدي رجالي",
      text: "جلسة تنشيط الدورة الدموية وإزالة التوتر",
      image: "/gg.jpg",
    },
    {
      title: "مساج علاجي رجالي",
      text: "يعالج آلام العضلات المزمنة ويحسن الحركة",
      image: "/СПОРТИВНЫЙ МАССАЖ.jpg",
    },
    {
      title: "مساج استرخائي رجالي",
      text: "أجواء تساعد على صفاء الذهن والراحة",
      image: "/Book Massage _ Scandinave Spa Old Montreal.jpg",
    },
    {
      title: "مساج عميق للعضلات",
      text: "يخفف التوتر العميق ويزيد مرونة العضلات",
      image: "/deep_muscle_massage.jpg",
    },
    {
      title: "مساج الرأس والكتف",
      text: "يساعد على الاسترخاء وتخفيف الصداع",
      image: "/head_shoulder_massage.jpg",
    },
  ];

  return (
    <section className="w-full py-12 px-4 bg-transparent">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
        خدماتنا
      </h2>

      {/* Carousel أفقي تلقائي */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-50%", "0%"] }} // الحركة معكوسة الآن من اليسار إلى اليمين
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5, // سرعة الحركة
            ease: "linear",
          }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="min-w-[300px] md:min-w-[350px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-lg"
            >
              {/* الصورة */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-60 object-cover"
              />

              {/* النص داخل الصورة على اليمين */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-right bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-sm md:text-base text-white mt-1">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
