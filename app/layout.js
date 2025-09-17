import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinkLift - Advanced URL Shortener & Link Management Platform",
  description: "Shorten, manage, and track your links. LinkLift provides powerful analytics, custom branded domains, and robust security features to optimize your marketing campaigns and drive engagement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-700 text-white`}
      >
        <Navbar/>
        {children}
      </body> 
    </html>
  );
}
