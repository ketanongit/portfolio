// drizzle/schema.ts
import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

// ===== HERO / ABOUT =====
export const hero = pgTable("hero", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  title: varchar("title", { length: 200 }).notNull(),
  bio: text("bio").notNull(),
  github: varchar("github", { length: 255 }),
  linkedin: varchar("linkedin", { length: 255 }),
  email: varchar("email", { length: 255 }),
});

// ===== EDUCATION =====
export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  institution: varchar("institution", { length: 255 }).notNull(),
  degree: varchar("degree", { length: 255 }).notNull(),
  startDate: varchar("start_date", { length: 50 }),
  endDate: varchar("end_date", { length: 50 }),
  location: varchar("location", { length: 255 }),
});

// ===== EXPERIENCE =====
export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  role: varchar("role", { length: 255 }).notNull(),
  company: varchar("company", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }),
  startDate: varchar("start_date", { length: 50 }),
  endDate: varchar("end_date", { length: 50 }),
  description: text("description"), // multiline bullet points
});

// ===== PROJECTS =====
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  techStack: varchar("tech_stack", { length: 255 }),
  link: varchar("link", { length: 255 }),
});

// ===== ACHIEVEMENTS =====
export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  organization: varchar("organization", { length: 255 }),
  date: varchar("date", { length: 50 }),
  description: text("description"),
});

// ===== SKILLS =====
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: varchar("category", { length: 100 }).notNull(),
  items: text("items").notNull(), // comma-separated
});
