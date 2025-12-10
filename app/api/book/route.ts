// app/api/book/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, phone, email, message } = data;

    console.log("حجز جديد:", name, phone, email, message);

    return NextResponse.json({ success: true, message: "تم استلام الحجز بنجاح!" });
  } catch (err) {
    return NextResponse.json({ success: false, message: "حدث خطأ، حاول لاحقًا." }, { status: 500 });
  }
}
