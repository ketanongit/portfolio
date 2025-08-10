import { schema } from "@/lib/drizzle";

export default function Hero({ hero }: { hero: typeof schema.hero.$inferSelect }) {
    if (!hero) return null;
    return (
        <section className="py-12 text-center bg-gray-100">
            <h1 className="text-4xl font-bold">{hero.name}</h1>
            <p className="text-lg text-gray-700">{hero.title}</p>
            <p className="max-w-2xl mx-auto mt-4">{hero.bio}</p>
            <div className="mt-6 space-x-4">
                {hero.github && <a href={hero.github} className="text-blue-600">GitHub</a>}
                {hero.linkedin && <a href={hero.linkedin} className="text-blue-600">LinkedIn</a>}
                {hero.email && <a href={`mailto:${hero.email}`} className="text-blue-600">Email</a>}
            </div>
        </section>
    );
}
