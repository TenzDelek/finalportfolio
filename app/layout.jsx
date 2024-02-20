import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TENZIN",
  description: "Portfolio of Tenzin Delek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div  className="p-6 w-full h-screen">
        <Navbar/>
        {children}
        </div>
        </body>
        
    </html>
  );
}
