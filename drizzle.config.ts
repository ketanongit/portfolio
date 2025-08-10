import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./drizzle/schema.ts",     // your schema location
  out: "./drizzle/migrations",       // where migrations go
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,  // from .env
  },
});
