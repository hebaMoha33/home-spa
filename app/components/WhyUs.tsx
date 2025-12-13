// components/WhyUs.tsx
import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section className="py-0 px-4 bg-transparent">
      <div className="max-w-4xl mx-auto p-10 md:p-16 text-center 
                      bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl">
        {/* العنوان */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#e27f06ff] mb-6 tracking-tight font-[Cairo]">
          لماذا نحن
        </h2>

        {/* الفقرة الأولى */}
        <p className="text-gray-900 text-base md:text-lg leading-relaxed mb-4 font-[Cairo]">
          طاقمنا الفلبيني المحترف يتمتع بخبرة عالية وتقنيات عالمية في المساج، ليمنحك تجربة تجمع بين الاحتراف، الهدوء، والعناية الفائقة بأدق التفاصيل 
        </p>

        {/* الفقرة الثانية */}
        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4 font-[Cairo]">
          في <span className="font-semibold text-[#f8951bff]">Home Spa for Men</span> نصنع لك مساحة مختلفة تمامًا عن صخب اليوم وضغوط العمل. هنا… يبدأ كل شيء من لحظة دخولك، حيث الأجواء الهادئة، الروائح العطرية الراقية، واللمسات التي تعيد إليك توازنك ونشاطك 
        </p>

        {/* الفقرة الثالثة */}
        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4 font-[Cairo]">
          سواء كنت تبحث عن استرخاء بعد يوم طويل، أو تجديد طاقتك أثناء إقامتك الفندقية، نحن نصل إليك بكل خصوصية وموثوقية 
        </p>

        {/* الخاتمة */}
        <p className="text-gray-900 font-semibold text-lg md:text-xl font-[Cairo]">
          استرخِ في مكانك… واترك الباقي علينا  <br />
          <span className="text-[#e27f06ff]">Home Spa for Men              رفاهيتك تبدأ من حيث أنت </span>
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
