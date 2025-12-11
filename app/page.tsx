export const metadata = {
  title: "هوم سبا للرجال - مساج منزلي في الرياض| أفضل خدمة مساج رجالي ",
  description:
    "خدمة مساج رجالي في الرياض داخل المنزل. علاج عضلات، استرخاء، مساج رياضي، جلسات احترافية على يد متخصصين. احجز الآن خدمة هوم سبا الرياض.",
  keywords: [
    "مساج منزلي الرياض",
    "مساج منزلي",
    "هوم سبا الرياض",
    "مساج رجالي الرياض",
    "مساج في المنزل الرياض",
    "مساج علاجي",
    "مساج استرخاء",
    "سبا منزلي",
    "مساج رياضي الرياض",
  ],
};

import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import BookingForm from "./components/BookingForm";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import MapSection from "./components/MapSection";
import FloatingButtons from "./components/FloatingButtons";
// استيراد صحيح للفوتر المسمّى
import { Footer } from "./components/Footer";


export default function Home() {
  return (
    <main className="space-y-10 p-4">
      <Header />
      <HeroImage />
      <BookingForm />
      <Services />
      <Reviews />
      <MapSection />
      <FloatingButtons />
      <Footer />
    </main>
  );
}
