'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeContextProvider from "./context/HomeContextProvider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "UBUY INDIA",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HomeContextProvider>
          <Navbar />
          {children}
          <Footer />
        </HomeContextProvider>
      </body>
    </html>
  );
}
