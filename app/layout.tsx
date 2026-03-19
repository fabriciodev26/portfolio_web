import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontDisplay = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const fontBody = DM_Sans({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-body",
});

const fontMono = JetBrains_Mono({
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
    <html
      lang="es"
      className={`${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
