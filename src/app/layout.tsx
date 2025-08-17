import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PillNav } from "./components/navbar";
import { Squares } from "./components/ui/bgAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah Mohd",
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
            direction="down"
            borderColor="#00e6e6"
            hoverFillColor="#222"
          />
        </div>
        <div className="relative z-10">
          <PillNav
            logo="/logo.png"
            logoAlt="Logo"
            items={[
              { label: 'Home', href: '/' },
              { label: 'projects', href: '/projects' },
              { label: 'Contact', href: '/contact' }
            ]}
            activeHref="/"
            className="custom-nav "
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
          {children}
        </div>
      </body>
    </html>
  );
}
