import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";
import Meta from '@/components/Meta'



export const metadata = {
  title: "idkz"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  pageTitle?: string; // Optional page title prop
}) {


  return (
    <html lang="en">
      
      <body className="flex fixed w-full justify-center">
        <main className="min-h-screen bg-background flex flex-col items-center w-full">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        
            <NavBar />
            <Spacer />
            {children}
            <span className="fixed bottom-[4.2rem] flex w-full items-center justify-center text-xs">Powered by Vercel, Next.js and Supabase</span>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
