import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "˗ˏˋIhsanˎˊ",
  description: "Resume for Public",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-coral-950 dark:text-coral-100 max-w-screen-md px-6 mx-auto">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
