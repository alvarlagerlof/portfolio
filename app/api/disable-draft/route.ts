import { redirect } from "next/navigation";
import { draftMode } from "next/headers";

export async function GET() {
  draftMode().disable();
  redirect("/");
}
