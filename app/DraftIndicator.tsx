import { draftMode } from "next/headers";

export function DraftIndicator() {
  const { isEnabled } = draftMode();

  if (!isEnabled) {
    return null;
  }

  return (
    <p className="w-full bg-green-700 text-white font-medium text-center p-1">Draft mode enabled</p>
  );
}
