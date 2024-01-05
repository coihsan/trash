import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ihsan",
  description: "Resume for Public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-[#F0F0F0] dark:bg-[#1C1C1C] max-w-screen-md px-6">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
