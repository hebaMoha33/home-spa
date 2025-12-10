import Header from "./components/Header";
import HeroImage from "./components/HeroImage";
import BookingForm from "./components/BookingForm";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import MapSection from "./components/MapSection";
import FloatingButtons from "./components/FloatingButtons";

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
    </main>
  );
}
