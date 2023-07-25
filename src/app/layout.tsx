import Navber from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import AuthContext from "@/context/AuthContext";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextagram",
  description: "넥스타그램에 오신 것을 환영합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lora.className}>
      <body className="">
        <AuthContext>
          <header className="sticky top-0 border-b-2 border-b-gray-200">
            <Navber />
          </header>
          <main className="h-[4200px]">{children}</main>
        </AuthContext>
      </body>
    </html>
  );
}
