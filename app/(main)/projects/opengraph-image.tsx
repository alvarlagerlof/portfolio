import { defaultOg } from "../default-og";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return await defaultOg("Projects", "These are some of the projects I've worked on");
}
