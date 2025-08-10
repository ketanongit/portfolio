import { schema } from "@/lib/drizzle";

export default function Achievements({ items }: { items: typeof schema.achievements.$inferSelect[] }) {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Achievements & Awards</h2>
      <ul className="space-y-4">
        {items.map((ach) => (
          <li key={ach.id} className="border p-4 rounded">
            <h3 className="font-semibold">{ach.title}</h3>
            <p className="text-sm text-gray-600">{ach.organization} — {ach.date}</p>
            <p>{ach.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
