"use client";

import { useEffect } from "react";

export function SetTitle({ to }: { to: string }) {
  useEffect(() => {
    document.title = to;
  }, [to]);

  return undefined;
}
