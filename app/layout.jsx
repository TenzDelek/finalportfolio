import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { UserProvider } from "./context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TENZIN",
  description: "Portfolio of Tenzin Delek",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
        <div  className="px-6 py-2 w-full h-screen">
        <Navbar/>
        <Sidebar>
        {children}
        </Sidebar>
        </div>
        </UserProvider>
        </body>
        
    </html>
  );
}
