import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const { container, content, canvas } = styles;

const fc = Fira_Code({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fc.className}>
        <div className={canvas}>
          <main className={container}>
            <Header />
            <div className={content}>{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
