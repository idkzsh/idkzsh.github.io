"use client"
import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Head from 'next/head';


import { useState } from 'react';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageTitle?: string; // Optional page title prop
}) {
  const [pageTitle, setPageTitle] = useState('Home');

  const updateTitle = (newTitle: string) => {
    setPageTitle(newTitle);
  };

  return (
    <html lang="en">
      <Head>
        <title>idkz</title> {/* Set the page title here */}
      </Head>
      <body className="flex fixed w-full justify-center">
        <main className="min-h-screen bg-background flex flex-col items-center w-full">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavBar page={pageTitle} />
            <Spacer />
            {children}
            <span className="fixed bottom-[4.2rem] flex w-full items-center justify-center text-xs">Powered by Vercel, Next.js and Supabase</span>
            <Footer onLinkClick={updateTitle} />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
