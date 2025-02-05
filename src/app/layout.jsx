import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Andres cavadia",
  description: "Personal projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         style={{ fontFamily: "'JetBrains Mono', monospace" }}
        className={` bg-[#0f172a]` }
      >
     
        {children}
        
      </body>
    </html>
  );
}
