"use client";

import { useDOMParser } from "@/hooks/domHook";

export default function DomParser({ content }: { content: string }) {
  return <>{useDOMParser(content)}</>;
}
