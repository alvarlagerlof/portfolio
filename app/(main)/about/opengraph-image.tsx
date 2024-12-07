import { defaultOg } from "../default-og";

export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return await defaultOg("About me", "My story starts with a $2 computer from a flea market");
}
