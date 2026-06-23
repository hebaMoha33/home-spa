"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface WindowWithGtag extends Window {
  gtag?: (...args: unknown[]) => void;
}

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    duration: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("جاري إرسال الطلب...");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
  const globalWindow = window as WindowWithGtag;

  if (globalWindow.gtag) {
    globalWindow.gtag("event", "conversion", {
      send_to: "AW-17841696051/100SCKyUjMQcELPayrtC",
      value: 1,
      currency: "SAR",
      event_callback: () => {
        window.location.href = "/thank-you";
      },
    });

    setTimeout(() => {
      window.location.href = "/thank-you";
    }, 1000);
  } else {
    window.location.href = "/thank-you";
  }

  setForm({
    name: "",
    phone: "",
    service: "",
    duration: "",
    message: "",
  });
} else {
        setStatus(data.message || "حدث خطأ أثناء الإرسال");
      }
    } catch {
      setStatus("حدث خطأ أثناء الإرسال");
    }
  };

  return (
    <motion.section
      id="booking"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-16 flex flex-col items-center"
    >
      <div className="w-full max-w-4xl h-[260px] sm:h-[300px] md:h-[360px] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src="/download.jpg"
          alt="قسم الحجز"
          className="w-full h-full object-cover object-center scale-105 brightness-90 transition-all duration-700 hover:scale-110"
        />
      </div>

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
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="الاسم الكامل"
            required
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 text-right"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="رقم الجوال"
            required
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 text-right"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 text-right"
          >
            <option value="">اختر نوع المساج</option>
            <option value="مساج سويدي">مساج سويدي</option>
            <option value="مساج تايلندي">مساج تايلندي</option>
            <option value="مساج VIP فاخر">مساج VIP فاخر</option>
            <option value="مساج أحجار ساخنة">مساج أحجار ساخنة</option>
            <option value="كاسات هواء">كاسات هواء</option>
          </select>

          <select
            name="duration"
            value={form.duration}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 text-right"
          >
            <option value="">مدة الجلسة</option>
            <option value="60 دقيقة">60 دقيقة</option>
            <option value="90 دقيقة">90 دقيقة</option>
            <option value="120 دقيقة">120 دقيقة</option>
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="الحي أو الفندق وأي ملاحظات إضافية"
            rows={4}
            className="w-full p-3 rounded-xl bg-white/60 border border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-300 text-right"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-400 text-white text-lg font-bold rounded-xl shadow-2xl hover:brightness-110 transition-all"
          >
            احجز الآن
          </motion.button>
        </form>

        {status && (
          <p className="mt-4 text-center font-medium text-green-600">
            {status}
          </p>
        )}
      </motion.div>
    </motion.section>
  );
}