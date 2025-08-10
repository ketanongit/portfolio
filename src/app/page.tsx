import { db, schema } from "@/lib/drizzle";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Project";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";

export default async function HomePage() {
  const [heroData] = await db.select().from(schema.hero);
  const educationData = await db.select().from(schema.education);
  const experienceData = await db.select().from(schema.experience);
  const projectsData = await db.select().from(schema.projects);
  const achievementsData = await db.select().from(schema.achievements);
  const skillsData = await db.select().from(schema.skills);

  return (
    <main className="max-w-4xl mx-auto px-4">
      <Hero hero={heroData} />
      <Education items={educationData} />
      <Experience items={experienceData} />
      <Projects items={projectsData} />
      <Achievements items={achievementsData} />
      <Skills items={skillsData} />
    </main>
  );
}
