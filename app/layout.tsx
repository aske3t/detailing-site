import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";

const bodyFont = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-body-runtime",
  display: "swap",
});

const headingFont = Oswald({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-heading-runtime",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Detailing Praha | Luxusní péče o vůz",
  description:
    "Profesionální detailing v Praze: korekce laku, keramická ochrana, interiér a prémiové balíčky služeb. Rezervujte termín online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
