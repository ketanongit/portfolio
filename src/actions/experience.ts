"use server";

import { db, schema } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addExperience(formData: FormData) {
  await db.insert(schema.experience).values({
    role: String(formData.get("role") ?? ""),
    company: String(formData.get("company") ?? ""),
    location: String(formData.get("location") ?? ""),
    startDate: String(formData.get("startDate") ?? ""),
    endDate: String(formData.get("endDate") ?? ""),
    description: String(formData.get("description") ?? ""),
  });
  revalidatePath("/admin/experience");
}

export async function updateExperience(formData: FormData) {
  const id = Number(formData.get("id"));
  await db
    .update(schema.experience)
    .set({
      role: String(formData.get("role") ?? ""),
      company: String(formData.get("company") ?? ""),
      location: String(formData.get("location") ?? ""),
      startDate: String(formData.get("startDate") ?? ""),
      endDate: String(formData.get("endDate") ?? ""),
      description: String(formData.get("description") ?? ""),
    })
    .where(eq(schema.experience.id, id));
  revalidatePath("/admin/experience");
}

export async function deleteExperience(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(schema.experience).where(eq(schema.experience.id, id));
  revalidatePath("/admin/experience");
}
