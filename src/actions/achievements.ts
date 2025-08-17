"use server";

import { db, schema } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addAchievement(formData: FormData) {
  await db.insert(schema.achievements).values({
    title: String(formData.get("title") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    date: String(formData.get("date") ?? ""),
    description: String(formData.get("description") ?? ""),
  });
  revalidatePath("/admin/achievements");
}

export async function updateAchievement(formData: FormData) {
  const id = Number(formData.get("id"));
  await db
    .update(schema.achievements)
    .set({
      title: String(formData.get("title") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      date: String(formData.get("date") ?? ""),
      description: String(formData.get("description") ?? ""),
    })
    .where(eq(schema.achievements.id, id));
  revalidatePath("/admin/achievements");
}

export async function deleteAchievement(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(schema.achievements).where(eq(schema.achievements.id, id));
  revalidatePath("/admin/achievements");
}
