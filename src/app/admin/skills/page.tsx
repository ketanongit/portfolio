import { db, schema } from "@/lib/drizzle";
import { desc } from "drizzle-orm";
import { addSkill, updateSkill, deleteSkill } from "@/actions/skills";

export default async function SkillsAdmin() {
    const items = await db.select().from(schema.skills).orderBy(desc(schema.skills.id));

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Manage Skills</h1>

            <form action={addSkill} className="space-y-2 mb-6">
                <input name="category" placeholder="Category (Languages / Frontend / Tools)" className="border p-2 w-full" />
                <input name="items" placeholder="Comma separated items" className="border p-2 w-full" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Skill Group</button>
            </form>

            <ul className="space-y-3">
                {items.map((s) => (
                    <li key={s.id} className="border p-3 rounded">
                        <form action={updateSkill} className="space-y-2">
                            <input type="hidden" name="id" value={s.id} />
                            <input name="category" defaultValue={s.category} className="border p-2 w-full" />
                            <input name="items" defaultValue={s.items} className="border p-2 w-full" />
                            <div className="flex gap-2">
                                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Update</button>
                                <form action={deleteSkill}>
                                    <input type="hidden" name="id" value={s.id} />
                                    <button type="submit" className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                                </form>
                            </div>
                        </form>
                    </li>
                ))}
            </ul>
        </div>
    );
}
