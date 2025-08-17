import { schema } from "@/lib/drizzle";

export default function Achievements({ items }: { items: typeof schema.achievements.$inferSelect[] }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Achievements & Awards</h2>
      <ul className="space-y-4">
        {items.map((ach) => (
          <li key={ach.id} className="border border-slate-700 bg-slate-800 p-4 rounded">
            <h3 className="font-semibold text-white">{ach.title}</h3>
            <p className="text-sm text-gray-400">{ach.organization} — {ach.date}</p>
            <p className="text-gray-300">{ach.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
