import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../../public/fonts/mFont.otf",
  display: "swap",
  variable: "--font-custom"
});

export const metadata: Metadata = {
  title: "AI portfolio",
  description: "This is my portfolio website, showcasing my skills and projects",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={myFont.variable}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}