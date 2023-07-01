import { draftMode } from "next/headers";

export function DraftIndicator() {
  const { isEnabled } = draftMode();

  if (isEnabled) {
    return <p>draft mode</p>;
  }

  return <p>not draft mode</p>;
}
