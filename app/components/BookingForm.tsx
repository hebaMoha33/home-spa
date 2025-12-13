"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("جاري الإرسال...");

  const res = await fetch("/api/book", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.redirect) {
    // فتح واتساب إذا كان السيرفر أعطى رابط تحويل
    window.open(data.redirect, "_blank");
    setStatus("جارٍ تحويلك إلى واتساب...");
  } else {
    // إظهار رسالة نجاح أو خطأ
    setStatus(data.message);
  }

  if (data.success) {
    // مسح الفورم بعد النجاح
    setForm({ name: "", phone: "", email: "", message: "" });
  }
};
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-16 flex flex-col items-center"
    >
      {/* صورة الهيرو */}
      <div className="w-full max-w-4xl h-[260px] sm:h-[300px] md:h-[360px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/download.jpg"
          alt="قسم الحجز"
          className="w-full h-full object-cover object-center scale-105 brightness-90 transition-all duration-700 hover:scale-110"
        />
      </div>

      {/* الفورم الشفاف فوق الصورة */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full max-w-3xl 
          -mt-24 sm:-mt-28 
          bg-white/20 
          backdrop-blur-xl 
          shadow-2xl 
          border border-white/40 
          rounded-3xl 
          p-8 
          text-right
        "
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
          احجز جلستك الآن
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* الاسم */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="اكتب اسمك الكامل"
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 transition text-right placeholder:text-right"
            required
          />

          {/* الهاتف */}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="text"
            placeholder="مثال: 0555555555"
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 transition text-right placeholder:text-right"
          />

          {/* البريد */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="البريد الإلكتروني (اختياري)"
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 transition text-right placeholder:text-right"
          />

          {/* الرسالة */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="اكتب التفاصيل أو نوع الجلسة المطلوبة"
            className="w-full p-3 h-32 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 transition text-right placeholder:text-right"
            required
          ></textarea>

          {/* زر الإرسال */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-400 text-white text-lg font-bold rounded-xl shadow-2xl hover:brightness-110 transition-all"
          >
            إرسال الطلب
          </motion.button>
        </form>

        {status && <p className="mt-4 text-center font-medium text-green-600">{status}</p>}
      </motion.div>
    </motion.section>
  );
}
