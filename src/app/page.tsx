import { db, schema } from "@/lib/drizzle";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Project";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";

export default async function HomePage() {
  try {
  const [heroData] = await db.select().from(schema.hero);
  const educationData = await db.select().from(schema.education);
  const experienceData = await db.select().from(schema.experience);
  const projectsData = await db.select().from(schema.projects);
  const achievementsData = await db.select().from(schema.achievements);
  const skillsData = await db.select().from(schema.skills);

  return (
    <main className="container mx-auto px-4 py-8 space-y-16">
      <Hero hero={heroData} />
      <Education items={educationData} />
      <Experience items={experienceData} />
      <Projects items={projectsData} />
        <Skills items={skillsData} />
      <Achievements items={achievementsData} />
      </main>
    );
  } catch (error) {
    console.error('Database error:', error);
    return (
      <main className="container mx-auto px-4 py-8">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-gray-300">Unable to load portfolio data</p>
          <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-red-400">Database Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
            <p className="text-gray-400 mt-2">Please check your database connection</p>
          </div>
        </div>
    </main>
  );
  }
}
