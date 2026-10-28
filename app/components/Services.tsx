"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Services() {

  const items = [

    {
      title: "مساج سويدي للرجال (Swedish Massage)",
      text: "جلسة مهنية تعتمد على حركات هادئة للمساعدة على الاسترخاء وتقليل إجهاد اليوم.",
      image: "/siwidi.jpg",
    },

    {
      title: "مساج استرخائي للرجال",
      text: "جلسة استرخاء مريحة يقدمها أخصائي رجالي محترف في المنزل أو الفندق داخل الرياض.",
      image: "/hero3.jpg",
    },

    {
      title: "مساج تايلندي للرجال (Thai Massage)",
      text: "جلسة تعتمد على تقنيات الضغط والتمدد للمساعدة على استرخاء الجسم وتحسين الشعور بالراحة.",
      image: "/taylind.jpg",
    },

    {
      title: "مساج الأحجار الساخنة للرجال",
      text: "جلسة استرخاء باستخدام أحجار دافئة وتقنيات مساج مهنية للمساعدة على راحة العضلات.",
      image: "/ahjar.jpg",
    },

  ];

  return (

    <section
      id="services"
      className="w-full py-12 px-4 bg-transparent"
    >

      <h2 className="text-3xl font-extrabold text-gray-900 mb-3 text-center">
        خدمات المساج للرجال
      </h2>

      <p className="text-gray-600 text-sm md:text-base text-center mb-10">
        جميع الجلسات يقدمها أخصائيون رجال والخدمة مخصصة للعملاء الرجال فقط
      </p>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
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

              {/* النص داخل الصورة */}
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