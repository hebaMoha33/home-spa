export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      name,
      phone,
      service,
      duration,
      message,
    } = data;

    const telegramMessage = `
📥 طلب حجز جديد

👤 الاسم:
${name}

📞 الجوال:
${phone}

💆 نوع المساج:
${service}

⏱️ مدة الجلسة:
${duration}

📝 الملاحظات:
${message || "لا يوجد"}
`;

    // إرسال إشعار تليجرام
    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
      }
    );

    // رسالة واتساب للعميل
    const whatsappLink = `https://wa.me/966548920707?text=${encodeURIComponent(
      `السلام عليكم، أريد تأكيد الحجز

الاسم: ${name}
الجوال: ${phone}
الخدمة: ${service}
المدة: ${duration}
الملاحظات: ${message || "لا يوجد"}`
    )}`;

    return NextResponse.json({
      success: true,
      redirect: whatsappLink,
      message: "تم إرسال الطلب بنجاح",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "حدث خطأ أثناء إرسال الطلب",
      },
      {
        status: 500,
      }
    );
  }
}