export default function Reviews() {
  const reviews = [
    { name: "خالد", date: "12/2024", text: "خدمة ممتازة واحترافية عالية." },
    { name: "أبو محمد", date: "01/2025", text: "المساج ممتاز والتعامل راقي." },
    { name: "ناصر", date: "11/2024", text: "أفضل تجربة مساج جربتها." },
  ];

  return (
    <section className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">آراء العملاء</h2>

      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-gray-100 p-5 rounded-xl shadow"
          >
            ⭐⭐⭐⭐⭐ — {r.name} — {r.date}
            <br />
            {r.text}
          </div>
        ))}
      </div>
    </section>
  );
}
