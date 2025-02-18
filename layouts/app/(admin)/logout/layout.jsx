import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin: Facebook",
  description: "Admin Page",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>
        Logout navbar
    </span>
    {children}
    </>
       
        
  );
}