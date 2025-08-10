"use server";

import { db, schema } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addEducation(formData: FormData) {
  await db.insert(schema.education).values({
    institution: String(formData.get("institution") ?? ""),
    degree: String(formData.get("degree") ?? ""),
    startDate: String(formData.get("startDate") ?? ""),
    endDate: String(formData.get("endDate") ?? ""),
    location: String(formData.get("location") ?? ""),
  });
  revalidatePath("/admin/education");
}

export async function updateEducation(formData: FormData) {
  const id = Number(formData.get("id"));
  await db
    .update(schema.education)
    .set({
      institution: String(formData.get("institution") ?? ""),
      degree: String(formData.get("degree") ?? ""),
      startDate: String(formData.get("startDate") ?? ""),
      endDate: String(formData.get("endDate") ?? ""),
      location: String(formData.get("location") ?? ""),
    })
    .where(eq(schema.education.id, id));
  revalidatePath("/admin/education");
}

export async function deleteEducation(formData: FormData) {
  const id = Number(formData.get("id"));
  await db.delete(schema.education).where(eq(schema.education.id, id));
  revalidatePath("/admin/education");
}
