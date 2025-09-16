import { Saira } from "next/font/google";
import "./globals.css"; 
import Header from "@/components/header";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-saira",
});

export const metadata = {
  title: "Vaka Proje",
  description: "Next.js 15 Case Study",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={saira.variable}>
      <body className="font-saira">
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
