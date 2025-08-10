"use server";

import { cookies } from "next/headers";

export async function login(password: string) {
  if (password === process.env.ADMIN_PASSWORD) {
    (await cookies()).set("admin_auth", process.env.ADMIN_PASSWORD!, {
      httpOnly: true,
      path: "/",
    });
    return true;
  }
  return false;
}
