"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Review {
  name: string;
  email: string;
  text: string;
  rating: number;
}

export default function CircularReviews() {
  const [reviews, setReviews] = useState<Review[]>([
    { name: "خ★", email: "a@email.com", text: "خدمة ممتازة واحترافية عالية.", rating: 5 },
    { name: "أب★", email: "b@email.com", text: "المساج ممتاز والتعامل راقي.", rating: 5 },
    { name: "ن★", email: "c@email.com", text: "أفضل تجربة مساج جربتها.", rating: 5 },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", email: "", text: "", rating: 5 });

  // Auto-scroll كل 3 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.email || !newReview.text || !newReview.name) {
      alert("الرجاء إدخال الاسم والبريد والنص!");
      return;
    }
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", email: "", text: "", rating: 5 });
    setShowForm(false);
  };

  return (
    <section className=" px-4  flex flex-col items-center">
      <h2 className="text-3xl font-extrabold mb-8 text-center">آراء العملاء</h2>

      {/* Carousel */}
      <div className="relative w-64 h-64 mb-6 sm:w-72 sm:h-72">
        <AnimatePresence>
          {reviews.map((r, i) =>
            i === currentIndex ? (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-white rounded-full shadow-xl p-4 text-right"
              >
                {/* صورة العميل */}
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold mb-2">
                  {r.name[0]}
                </div>

                {/* النجوم */}
                <div className="text-amber-400 mb-1">{'⭐'.repeat(r.rating)}</div>

                {/* النص */}
                <p className="text-gray-800 text-center text-sm">{r.text}</p>

                {/* الاسم */}
                <div className="mt-1 font-semibold text-sm">{r.name}</div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>

      {/* زر إضافة تعليق */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:opacity-90 transition-all text-sm sm:text-base"
       style={{
    background: "linear-gradient(90deg, #0fe75eff 0%, #098778ff 100%)",
  }}
      >
        أضف تعليقك
      </button>

      {/* فورم إضافة تعليق */}
      {showForm && (
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-xs sm:max-w-sm bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-right space-y-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={newReview.name}
            onChange={handleChange}
            placeholder="الاسم"
            className="w-full p-2 border rounded-lg text-right text-sm"
            required
          />
          <input
            type="email"
            name="email"
            value={newReview.email}
            onChange={handleChange}
            placeholder="البريد الإلكتروني"
            className="w-full p-2 border rounded-lg text-right text-sm"
            required
          />
          <textarea
            name="text"
            value={newReview.text}
            onChange={handleChange}
            placeholder="اكتب تعليقك"
            className="w-full p-2 border rounded-lg text-right text-sm"
            required
          ></textarea>
          <label className="flex items-center justify-between text-sm">
            تقييم النجوم:
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleChange}
              className="border rounded-lg p-1 text-sm"
            >
              {[5, 4, 3, 2, 1].map((n) => (
                <option key={n} value={n}>
                  {n} ⭐
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-amber-500 text-white font-semibold hover:opacity-90 transition-all text-sm"
          style={{
    background: "linear-gradient(90deg, #FFD700 0%, #c66e04ff  100%)",
  }}
          >
            أرسل التعليق
          </button>
        </motion.form>
      )}
    </section>
  );
}
