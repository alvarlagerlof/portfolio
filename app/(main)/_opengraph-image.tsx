import { defaultOg } from "./default-og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return await defaultOg("Alvar Lagerlöf", "Developer and designer from Stockholm");
}
