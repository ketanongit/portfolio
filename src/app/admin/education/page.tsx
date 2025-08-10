import { db, schema } from "@/lib/drizzle";
import { desc } from "drizzle-orm";
import { addEducation, updateEducation, deleteEducation } from "@/actions/education";

export default async function EducationAdmin() {
    const items = await db.select().from(schema.education).orderBy(desc(schema.education.id));

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Manage Education</h1>

            {/* Add */}
            <form action={addEducation} className="space-y-2 mb-6">
                <input name="institution" placeholder="Institution" className="border p-2 w-full" />
                <input name="degree" placeholder="Degree/Certification" className="border p-2 w-full" />
                <input name="startDate" placeholder="Start (e.g. 2021)" className="border p-2 w-full" />
                <input name="endDate" placeholder="End (e.g. 2025 or Present)" className="border p-2 w-full" />
                <input name="location" placeholder="Location" className="border p-2 w-full" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Education</button>
            </form>

            {/* List & edit */}
            <ul className="space-y-3">
                {items.map((edu) => (
                    <li key={edu.id} className="border p-3 rounded">
                        <form action={updateEducation} className="space-y-2">
                            <input type="hidden" name="id" value={edu.id} />
                            <input name="institution" defaultValue={edu.institution} className="border p-2 w-full" />
                            <input name="degree" defaultValue={edu.degree} className="border p-2 w-full" />
                            <input name="startDate" defaultValue={edu.startDate ?? ""} className="border p-2 w-full" />
                            <input name="endDate" defaultValue={edu.endDate ?? ""} className="border p-2 w-full" />
                            <input name="location" defaultValue={edu.location ?? ""} className="border p-2 w-full" />
                            <div className="flex gap-2">
                                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Update</button>
                                <form action={deleteEducation}>
                                    <input type="hidden" name="id" value={edu.id} />
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
