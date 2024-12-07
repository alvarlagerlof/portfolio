import { defaultOg } from "../default-og";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return await defaultOg("Blog", "I try to put my thoughts into words sometimes");
}
