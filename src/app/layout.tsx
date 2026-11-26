import type { Metadata } from "next";
import { Caveat_Brush, Poetsen_One, Signika } from "next/font/google";
import { EnrolBar } from "@/components/EnrolBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

// Typography follows escolagirassol.com.br: Chewy for the chunky headings, Signika for
// text, and a brush hand for small handwritten notes (Caveat Brush stands in for the
// reference's custom Hackney face, which is not freely licensed).
// Poetsen One: a rounded, friendly sans display face (client choice).
const display = Poetsen_One({ variable: "--font-display-face", subsets: ["latin"], weight: "400" });
const signika = Signika({ variable: "--font-signika", subsets: ["latin"] });
const brush = Caveat_Brush({ variable: "--font-brush", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mirabilia.com.au"),
  title: {
    default: "Mirabilia | Early Learning Education Centre and Kindergarten",
    template: "%s | Mirabilia",
  },
  description:
    "Get in touch and book a tour with one of Perth’s most trusted childcare centres, where innovative education meets a caring, homelike environment.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU" className={`${display.variable} ${signika.variable} ${brush.variable}`}>
      <body className="min-h-screen pb-[76px] sm:pb-[68px]">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-white px-4 py-2 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="overflow-x-clip">{children}</main>
        <Footer />
        <EnrolBar />
      </body>
    </html>
  );
}
