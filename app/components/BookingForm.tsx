"use client";

import { useState } from "react";

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
    setStatus(data.message);

    if (data.success) setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section className="relative w-full py-16 flex flex-col items-center">

      {/* صورة الهيرو */}
      <div className="w-full max-w-4xl h-[260px] rounded-3xl overflow-hidden shadow-xl">
        <img
          src="/download.jpg"
          alt="قسم الحجز"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* الفورم الشفاف فوق الصورة */}
      <div
        className="
          w-full max-w-3xl 
          -mt-20 
          bg-white/20 
          backdrop-blur-md 
          shadow-xl 
          border border-white/40 
          rounded-3xl 
          p-8 
          text-right
        "
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          احجز جلستك الآن
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* حقل الاسم */}
          <div>
            <label className="block mb-1 font-medium">الاسم</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="اكتب اسمك الكامل"
              className="
                w-full p-3 
                rounded-xl 
                bg-white/60 
                border border-gray-300 
                focus:border-amber-500 
                focus:ring-2 focus:ring-amber-300 
                transition
              "
            />
          </div>

          {/* الهاتف */}
          <div>
            <label className="block mb-1 font-medium">رقم الهاتف</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="مثال: 0555555555"
              className="
                w-full p-3 
                rounded-xl 
                bg-white/60 
                border border-gray-300 
                focus:border-amber-500 
                focus:ring-2 focus:ring-amber-300 
                transition
              "
            />
          </div>

          {/* البريد */}
          <div>
            <label className="block mb-1 font-medium">البريد الإلكتروني (اختياري)</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="example@email.com"
              className="
                w-full p-3 
                rounded-xl 
                bg-white/60 
                border border-gray-300 
                focus:border-amber-500 
                focus:ring-2 focus:ring-amber-300 
                transition
              "
            />
          </div>

          {/* الرسالة */}
          <div>
            <label className="block mb-1 font-medium">الرسالة</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="اكتب التفاصيل أو نوع الجلسة المطلوبة"
              className="
                w-full p-3 
                h-32 
                rounded-xl 
                bg-white/60 
                border border-gray-300 
                focus:border-amber-500 
                focus:ring-2 focus:ring-amber-300 
                transition
              "
            ></textarea>
          </div>

          {/* زر الإرسال */}
          <button
            type="submit"
            className="
              w-full py-3 
              bg-gradient-to-r from-amber-600 to-amber-400
              text-white text-lg font-bold 
              rounded-xl 
              shadow-lg 
              transition 
              hover:brightness-110 
              active:scale-95
            "
          >
            إرسال الطلب
          </button>
        </form>

        {status && <p className="mt-4 text-center font-medium">{status}</p>}
      </div>
    </section>
  );
}
