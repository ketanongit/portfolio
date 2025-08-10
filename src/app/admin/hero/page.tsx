import { db, schema } from "@/lib/drizzle";
import { upsertHero } from "@/actions/hero";

export default async function HeroAdmin() {
  const [hero] = await db.select().from(schema.hero);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Hero / About</h1>

      <form action={upsertHero} className="space-y-3 mb-6">
        <input name="name" defaultValue={hero?.name ?? ""} placeholder="Full name" className="border p-2 w-full" />
        <input name="title" defaultValue={hero?.title ?? ""} placeholder="Title / tagline" className="border p-2 w-full" />
        <textarea name="bio" defaultValue={hero?.bio ?? ""} placeholder="Short bio" className="border p-2 w-full" />
        <input name="github" defaultValue={hero?.github ?? ""} placeholder="GitHub URL" className="border p-2 w-full" />
        <input name="linkedin" defaultValue={hero?.linkedin ?? ""} placeholder="LinkedIn URL" className="border p-2 w-full" />
        <input name="email" defaultValue={hero?.email ?? ""} placeholder="Email" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
      </form>
    </div>
  );
}
