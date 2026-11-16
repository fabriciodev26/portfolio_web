import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Fuentes autoalojadas por next/font: se precargan y no bloquean el render
// (antes se pedían a Google Fonts vía @import dentro del CSS).
const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
const body = DM_Sans({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Fabricio Iparraguirre — Frontend Developer",
  description: "Desarrollador Frontend especializado en React, Next.js, Angular y Laravel. Lima, Perú.",
  keywords: ["frontend", "react", "nextjs", "angular", "developer", "lima", "peru"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
