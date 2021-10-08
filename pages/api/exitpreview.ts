import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Clears the preview mode cookies.
  // This function accepts no arguments.
  res.clearPreviewData();
}
