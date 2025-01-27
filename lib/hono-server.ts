"use server";
import { hc } from "hono/client";
import { AppType } from "@/app/api/[[...route]]/route";
import { cookies } from "next/headers";

export async function getClient() {
  const store = cookies();
  const token = store.get("token")?.value ?? "";
  const tz = store.get("timezone")?.value ?? "";

  return hc<AppType>(process.env.NEXT_PUBLIC_APP_URL!, {
    headers: {
      Authorization: `Bearer ${token}`,
      Timezone: tz,
    },
  });
}
