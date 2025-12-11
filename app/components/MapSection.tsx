"use client";

import { useState } from "react";

export default function BookingFormMap() {
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
    <section className="relative w-full py-16 flex flex-col items-center px-4">
      
      {/* الخريطة */}
      <div className="w-full max-w-6xl h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.408200157729!2d46.67529551500057!3d24.7135515841117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f033327a9f6f1%3A0xa30b1c307dd0f4f0!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
          className="w-full h-full"
          loading="lazy"
        ></iframe>
      </div>

      {/* الفورم الشفاف */}
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
        {/* معلومات أسفل الفورم */}
        <div className="mt-6 text-gray-800 text-right space-y-1">
          <p>📍 العنوان: السعودية، الرياض</p>
          <p>🕒 أوقات العمل: 24 ساعة</p>
          <p>📅 أيام العمل: كل أيام الأسبوع</p>
        </div>
      </div>
    </section>
  );
}
