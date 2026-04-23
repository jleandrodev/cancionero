import type { Metadata } from "next";
import { Poppins, Righteous } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const righteous = Righteous({
  variable: "--font-righteous",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Cancionero de Rock Latino para Guitarra | Domina los Clásicos",
  description:
    "Aprende a tocar los clásicos del rock en español con tablaturas y acordes. Soda Stereo, Maná, Caifanes, Enanitos Verdes y más. Ebook con 100+ canciones.",
  keywords:
    "rock latino, guitarra, tablaturas, acordes, cancionero, Soda Stereo, Maná, Caifanes",
  openGraph: {
    title: "Cancionero de Rock Latino para Guitarra",
    description:
      "Domina los clásicos del rock latino en tu guitarra. 100+ canciones con tabs y acordes.",
    type: "website",
    locale: "es_LA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${righteous.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
