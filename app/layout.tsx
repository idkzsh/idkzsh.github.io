import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";

import { GeistSans, GeistMono } from 'geist/font'

export const metadata = {
  title: "idkz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageTitle?: string; // Optional page title prop
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="flex justify-center w-full">
        <main className="flex flex-col items-center w-full min-h-screen z-1">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavBar />
            <Spacer height="h-[80px]" />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
