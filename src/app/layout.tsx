import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MikoPokedex",
  description: "Web pokedex to easily find pokemons",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}