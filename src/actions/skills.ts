"use server";

import { db, schema } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addSkill(formData: FormData) {
  await db.insert(schema.skills).values({
    category: String(formData.get("category") ?? ""),
    items: String(formData.get("items") ?? ""),
  });
  revalidatePath("/admin/skills");
}

export async function updateSkill(formData: FormData) {
  const id = Number(formData.get("id"));
  await db
    .update(schema.skills)
    .set({
      category: String(formData.get("category") ?? ""),
      items: String(formData.get("items") ?? ""),
    })
    .where(eq(schema.skills.id, id));
  revalidatePath("/admin/skills");
}

export async function deleteSkill(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(schema.skills).where(eq(schema.skills.id, id));
  revalidatePath("/admin/skills");
}
