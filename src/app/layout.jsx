import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer/footer";
import MobileHeader from "@/components/header/mobile-header/mobile-header";
import { Toaster } from "react-hot-toast";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Epos Home",
  description:
    "Providing Web/Mobile Application Services Across The World Based In INDIA, Get IT Consulting For Free From The Industry experts With Adaptive, Robust, Scalable Solutions for  Business..",
  icons: {
    icon: "/images/enkelogo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden sm:block">
          <Header />
        </div>
        <div className="block sm:hidden">
          <MobileHeader />
        </div>
        <main className="flex flex-col  items-center justify-center">
          <Toaster position="top-right" />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
