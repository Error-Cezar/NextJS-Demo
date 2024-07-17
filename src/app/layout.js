// Did I ever touch this?

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NJEF - Nouvelles Journées d'Echographie Foetale",
  description: "N/A",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
