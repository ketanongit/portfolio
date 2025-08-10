import { db, schema } from "@/lib/drizzle";
import { desc } from "drizzle-orm";
import { addExperience, updateExperience, deleteExperience } from "@/actions/experience";

export default async function ExperienceAdmin() {
    const items = await db.select().from(schema.experience).orderBy(desc(schema.experience.id));

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Manage Experience</h1>

            {/* Add */}
            <form action={addExperience} className="space-y-2 mb-6">
                <input name="role" placeholder="Role" className="border p-2 w-full" />
                <input name="company" placeholder="Company" className="border p-2 w-full" />
                <input name="location" placeholder="Location" className="border p-2 w-full" />
                <input name="startDate" placeholder="Start Date" className="border p-2 w-full" />
                <input name="endDate" placeholder="End Date" className="border p-2 w-full" />
                <textarea name="description" placeholder="Description / bullets" className="border p-2 w-full" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Experience</button>
            </form>

            <ul className="space-y-3">
                {items.map((exp) => (
                    <li key={exp.id} className="border p-3 rounded">
                        <form action={updateExperience} className="space-y-2">
                            <input type="hidden" name="id" value={exp.id} />
                            <input name="role" defaultValue={exp.role} className="border p-2 w-full" />
                            <input name="company" defaultValue={exp.company} className="border p-2 w-full" />
                            <input name="location" defaultValue={exp.location ?? ""} className="border p-2 w-full" />
                            <input name="startDate" defaultValue={exp.startDate ?? ""} className="border p-2 w-full" />
                            <input name="endDate" defaultValue={exp.endDate ?? ""} className="border p-2 w-full" />
                            <textarea name="description" defaultValue={exp.description ?? ""} className="border p-2 w-full" />
                            <div className="flex gap-2">
                                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Update</button>
                                <form action={deleteExperience}>
                                    <input type="hidden" name="id" value={exp.id} />
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
