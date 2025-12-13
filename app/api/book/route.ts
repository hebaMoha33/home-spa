export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// دالة للتحقق من صحة البريد
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, message } = data;

    // إذا أدخل المستخدم بريد صحيح، نرسل الإيميل
    if (email && email.trim() !== "" && isValidEmail(email)) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "homespa771@gmail.com",
          pass: process.env.GMAIL_APP_PASSWORD, // يجب أن يكون App Password
        },
      });

      const mailOptions = {
        from: "homespa771@gmail.com", // بريدك الرسمي
        replyTo: email,               // البريد الذي أدخله المستخدم
        to: "homespa771@gmail.com",   // بريدك الذي يستقبل الطلبات
        subject: `طلب حجز جديد من ${name}`,
        text: `
الاسم: ${name}
الهاتف: ${phone || "غير محدد"}
البريد: ${email}
الرسالة: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({
        success: true,
        message: "تم إرسال الطلب بنجاح عبر الإيميل!",
      });
    }

    // إذا لم يدخل المستخدم بريدًا صالحًا، نحوله للواتساب
    const whatsappLink = `https://wa.me/966548920707?text=${encodeURIComponent(
      `طلب حجز جديد\nالاسم: ${name}\nالهاتف: ${phone || "غير محدد"}\nالرسالة: ${message}`
    )}`;

    return NextResponse.json({
      success: true,
      redirect: whatsappLink,
      message: "جارٍ تحويلك إلى واتساب لإرسال الطلب",
    });

  } catch (err) {
    console.error("Mail Error:", err);
    return NextResponse.json(
      { success: false, message: "حدث خطأ، حاول لاحقًا." },
      { status: 500 }
    );
  }
}
