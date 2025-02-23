import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import TopNav from "@/components/navbar/TopNav";

export const metadata: Metadata = {
  title: "Matcheez",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className="dark">
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          <main className="container mx-auto p-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
