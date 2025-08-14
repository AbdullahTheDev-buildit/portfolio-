import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import {Squares} from "./components/ui/bgAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "portfolio of Abdullah Mohd — a showcase of my work as a developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 z-0">
          <Squares
          speed={0.5}
          squareSize={40}
          direction="down" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
        </div>
         <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
