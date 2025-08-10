import { db, schema } from "@/lib/drizzle";
import { desc } from "drizzle-orm";
import { addProject, updateProject, deleteProject } from "@/actions/project";

export default async function ProjectsAdmin() {
    const items = await db.select().from(schema.projects).orderBy(desc(schema.projects.id));

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Manage Projects</h1>

            <form action={addProject} className="space-y-2 mb-6">
                <input name="name" placeholder="Project name" className="border p-2 w-full" />
                <textarea name="description" placeholder="Short description" className="border p-2 w-full" />
                <input name="techStack" placeholder="Tech stack (comma separated)" className="border p-2 w-full" />
                <input name="link" placeholder="URL (optional)" className="border p-2 w-full" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Project</button>
            </form>

            <ul className="space-y-3">
                {items.map((p) => (
                    <li key={p.id} className="border p-3 rounded">
                        <form action={updateProject} className="space-y-2">
                            <input type="hidden" name="id" value={p.id} />
                            <input name="name" defaultValue={p.name} className="border p-2 w-full" />
                            <textarea name="description" defaultValue={p.description ?? ""} className="border p-2 w-full" />
                            <input name="techStack" defaultValue={p.techStack ?? ""} className="border p-2 w-full" />
                            <input name="link" defaultValue={p.link ?? ""} className="border p-2 w-full" />
                            <div className="flex gap-2">
                                <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">Update</button>
                                <form action={deleteProject}>
                                    <input type="hidden" name="id" value={p.id} />
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
