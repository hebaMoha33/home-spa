"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Services() {
  const items = [
    {
      title: "مساج سويدي (Swedish Massage)",
      text: "يعتمد على حركات ناعمة وزيوت طبيعية لتخفيف التوتر مثالي لتحسين الدورة الدموية والاسترخاء الكامل",
      image: "/siwidi.jpg",
    },
    {
      title: "مساج فاخر VIP",
      text: "تجربة فريدة تشمل استرخاء كامل وفخامة كل التفاصيل يخفف التوتر ويعيد الطاقة والنشاط لك",
      image: "/hero3.jpg",
    },
    {
      title: "مساج تايلندي (Thai Massage)",
      text: "يعتمد على الضغط وتمتد العضلات لراحة كاملة للجسم يزيد المرونة ويخفف التوتر اليومي",
      image: "/taylind.jpg",
    },
    {
      title: "مساج أحجار ساخنة (Hot Stone Massage)",
      text: "أحجار مدفأة توضع على نقاط معينة لراحة العضلات العميقة يساعد على التخلص من التوتر ويمنح استرخاء عميق",
      image: "/ahjar.jpg",
    },
    {
      title: "كاسات هواء (Cupping Therapy)",
      text: "طريقة علاجية تعتمد على الشفط لتحفيز الدورة الدموية تساعد على تخفيف آلام العضلات وإزالة السموم",
      image: "/kasat.jpg",
    },
  ];

  return (
    <section className="w-full py-12 px-4 bg-transparent">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
        خدماتنا
      </h2>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}           // خدمة واحدة في الجوال
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1500,             // كل 3 ثواني
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,      // تابلت
          },
          1024: {
            slidesPerView: 3,      // ديسكتوب
          },
        }}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 md:h-64 object-cover"
              />

              {/* النص داخل الصورة من اليمين */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-right bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-white mt-1">
                  {item.text}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
