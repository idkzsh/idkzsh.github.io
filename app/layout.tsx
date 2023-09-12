import NavBar from "@/components/NavBar";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Spacer from "@/components/Spacer";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="fixed flex justify-center w-full">
        <main className="flex flex-col items-center w-full min-h-screen z-1 bg-custom-background">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <NavBar />
            {children}
            <span className="fixed bottom-[4.2rem] flex w-full items-center justify-center text-xs">
              Powered by Vercel, Next.js and Supabase
            </span>
            <Footer />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
