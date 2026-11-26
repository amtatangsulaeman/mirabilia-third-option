import type { Metadata } from "next";
import { ProgramPage } from "@/components/ProgramPage";
import { getProgram } from "@/lib/content";

const p = getProgram("music-class");
export const metadata: Metadata = { title: `${p.name} | Squad Programs`, description: p.intro[0] };

export default function Page() {
  return <ProgramPage slug="music-class" />;
}
