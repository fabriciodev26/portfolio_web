import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
