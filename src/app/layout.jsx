import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ENKE Consulting Services LLP",
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
        <Header />
        <main className="min-h-screen flex flex-col  items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
