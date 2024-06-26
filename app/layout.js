import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aovis",
  description: "King of Movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
