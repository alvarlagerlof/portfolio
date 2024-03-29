// route handler enabling draft mode
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  draftMode().enable();
  //return new Response("Draft mode is enabled");
  redirect("/");
}
