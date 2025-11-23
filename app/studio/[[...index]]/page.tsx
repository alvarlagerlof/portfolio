import { Studio } from "./Studio";
import "../../global.css";
import { connection } from "next/server";
import { Suspense } from "react";

export default async function StudioPage() {
  return (
    <Suspense fallback={<div>Loading studio...</div>}>
      <SanityStudio />
    </Suspense>
  );
}

async function SanityStudio() {
  await connection();

  return (
    <div className="sanity">
      <Studio />
    </div>
  );
}
