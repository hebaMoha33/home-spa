import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // تحميل المتغيرات من .env.local

async function sendTestMail() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "homespa771@gmail.com",        // بريدك الرسمي
        pass: process.env.GMAIL_APP_PASSWORD // App Password من .env.local
      },
    });

    const info = await transporter.sendMail({
      from: "homespa771@gmail.com",
      to: "homespa771@gmail.com",
      subject: "اختبار",
      text: "هذه رسالة اختبار",
    });

    console.log("تم الإرسال بنجاح:", info.response);
  } catch (err) {
    console.error("حدث خطأ أثناء الإرسال:", err);
  }
}

sendTestMail();
