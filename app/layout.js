import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DJ Events",
  description: "Welcome to DJ Events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} 
      `}
      >
        <Header />
        <div className="my-16 mx-auto px-16 max-w-5xl">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
