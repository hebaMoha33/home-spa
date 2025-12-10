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
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
        خدماتنا
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
