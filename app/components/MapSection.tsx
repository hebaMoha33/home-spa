export default function MapSection() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-4 px-4">موقعنا — الرياض</h2>

      <iframe
        className="w-full h-80 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626750.5484777814!2d44.0!3d24.7"
        loading="lazy"
      />
    </section>
  );
}
