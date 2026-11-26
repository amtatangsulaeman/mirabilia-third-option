import type { Metadata } from "next";
import { CentrePage } from "@/components/CentrePage";
import { getCentre } from "@/lib/content";

const c = getCentre("caversham");
export const metadata: Metadata = { title: c.title, description: `${c.intro} Open 6:30am to 6:30pm. Book a tour at Mirabilia ${c.name}.` };

export default function Page() {
  return <CentrePage slug="caversham" />;
}
