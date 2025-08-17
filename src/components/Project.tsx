import { schema } from "@/lib/drizzle";

export default function Projects({ items }: { items: typeof schema.projects.$inferSelect[] }) {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>
            <ul className="space-y-4">
                {items.map((proj) => (
                    <li key={proj.id} className="border border-slate-700 bg-slate-800 p-4 rounded">
                        <h3 className="font-semibold text-white">{proj.name}</h3>
                        <p className="text-gray-300">{proj.description}</p>
                        {proj.techStack && <p className="text-sm text-gray-400 mt-2">Tech: {proj.techStack}</p>}
                        {proj.link && <a href={proj.link} className="text-blue-400 hover:text-blue-300">View Project</a>}
                    </li>
                ))}
            </ul>
        </section>
    );
}
