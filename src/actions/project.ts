"use server";

import { db, schema } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addProject(formData: FormData) {
  await db.insert(schema.projects).values({
    name: String(formData.get("name") ?? ""),
    description: String(formData.get("description") ?? ""),
    techStack: String(formData.get("techStack") ?? ""),
    link: String(formData.get("link") ?? ""),
  });
  revalidatePath("/admin/projects");
}

export async function updateProject(formData: FormData) {
  const id = Number(formData.get("id"));
  await db
    .update(schema.projects)
    .set({
      name: String(formData.get("name") ?? ""),
      description: String(formData.get("description") ?? ""),
      techStack: String(formData.get("techStack") ?? ""),
      link: String(formData.get("link") ?? ""),
    })
    .where(eq(schema.projects.id, id));
  revalidatePath("/admin/projects");
}

export async function deleteProject(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(schema.projects).where(eq(schema.projects.id, id));
  revalidatePath("/admin/projects");
}
