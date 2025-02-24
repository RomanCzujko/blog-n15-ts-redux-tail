import { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import AppProvider from '@/components/AppProvider';
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Ensure 600 is included
  display: "swap", // Improves font loading
  variable: "--font-poppins", 
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "FIKCYJNA INSTYTUCJA EDUKACYJNA",
  description: "Blog Edukacyjny",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${poppins.variable} ${openSans.variable}`}>
      <body >
        <AppProvider> 
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
