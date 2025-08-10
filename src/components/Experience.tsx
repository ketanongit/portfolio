import { schema } from "@/lib/drizzle";

export default function Experience({ items }: { items: typeof schema.experience.$inferSelect[] }) {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <ul className="space-y-6">
        {items.map((exp) => (
          <li key={exp.id} className="border p-4 rounded">
            <h3 className="font-semibold">{exp.role} - {exp.company}</h3>
            <p className="text-sm text-gray-600">{exp.startDate} - {exp.endDate} | {exp.location}</p>
            <p className="mt-2">{exp.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
