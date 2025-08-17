import { schema } from "@/lib/drizzle";

export default function Experience({ items }: { items: typeof schema.experience.$inferSelect[] }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Experience</h2>
      <ul className="space-y-6">
        {items.map((exp) => (
          <li key={exp.id} className="border border-slate-700 bg-slate-800 p-4 rounded">
            <h3 className="font-semibold text-white">{exp.role} - {exp.company}</h3>
            <p className="text-sm text-gray-400">{exp.startDate} - {exp.endDate} | {exp.location}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
