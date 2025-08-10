"use server";

import { db, schema } from "@/lib/drizzle";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

/**
 * Add or update the single hero row.
 * If there's already a row, update it. Otherwise insert.
 */
export async function upsertHero(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const title = String(formData.get("title") ?? "");
  const bio = String(formData.get("bio") ?? "");
  const github = String(formData.get("github") ?? "");
  const linkedin = String(formData.get("linkedin") ?? "");
  const email = String(formData.get("email") ?? "");

  const existing = await db.select().from(schema.hero).limit(1);

  if (existing.length > 0) {
    const id = existing[0].id;
    await db
      .update(schema.hero)
      .set({ name, title, bio, github, linkedin, email })
      .where(eq(schema.hero.id, id));
  } else {
    await db.insert(schema.hero).values({ name, title, bio, github, linkedin, email });
  }

  revalidatePath("/admin/hero");
}
