"use server"

import { cookies } from "next/headers";

export async function setSessionTokenCookie(token: string, expiresAt: Date) {
  cookies().set("session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    path: "/",
  });
}
  
export async function deleteSessionTokenCookie() {
	cookies().set("session", "", {
		httpOnly: true,
		sameSite: "lax",
		secure: process.env.NODE_ENV === "production",
		maxAge: 0,
		path: "/"
	});
}
