import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Bitter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rapport Wennink",
  description: "Peter Wennink presenteert zijn onafhankelijke advies over hoe Nederland zijn verdienvermogen en strategische positie kan versterken. Een oproep tot samenwerking voor duurzame groei, innovatie en investeringen in de toekomst.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-KBZRG1ZZCF"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-KBZRG1ZZCF');
        </script> */}
      </head>
      <body
        className={`${spaceGrotesk.variable} ${bitter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
