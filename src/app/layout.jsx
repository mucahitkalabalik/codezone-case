import { Saira, Saira_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-saira",
});

const condensed = Saira_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-saira-condensed",
});

export const metadata = {
  title: "Codezone Case",
  description: "Next.js 15 Case Study",
  icons: {
    icon: "/favicon2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${saira.variable} ${condensed.variable}`}>
      <body className="font-saira bg-[#121212]">
        <Header />
        <main className="bg-[#121212]">{children}</main>
      </body>
    </html>
  );
}
