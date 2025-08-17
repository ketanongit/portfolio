import { schema } from "@/lib/drizzle";

export default function Skills({ items }: { items: typeof schema.skills.$inferSelect[] }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((skill) => (
          <div key={skill.id} className="border border-slate-700 bg-slate-800 p-4 rounded">
            <h3 className="font-semibold text-white">{skill.category}</h3>
            <p className="text-gray-300">{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
