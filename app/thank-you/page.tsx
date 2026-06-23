import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          تم استلام طلبك بنجاح
        </h1>

        <p className="text-gray-600 mb-8">
          سيتم التواصل معك خلال وقت قصير لتأكيد الحجز.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}