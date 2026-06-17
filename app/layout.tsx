import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZiryabTec | Solutions IT & Formations",
  description:
    "ZiryabTec propose des solutions IT innovantes et des formations de pointe. Découvrez notre expertise en ERP, Retailink, Cybersécurité, Cloud et plus.",
  keywords: [
    "ERP",
    "Retailink",
    "Cybersécurité",
    "Formation",
    "solutions IT",
    "cloud",
    "développement",
    "ZiryabTec",
  ],
  openGraph: {
    title: "ZiryabTec | Solutions IT & Formations",
    description:
      "ZiryabTec propose des solutions IT innovantes et des formations de pointe. Découvrez notre expertise en ERP, Retailink, Cybersécurité et plus.",
    type: "website",
    locale: "fr_FR",
    siteName: "ZiryabTec",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text-primary)]" suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
