
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./redux/provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CookConnect",
  description: "Cooking Community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/assets/logo_file_rouge.png"></link>
      </head>
      <body className={inter.className}>
      <Providers>
        {children}
      </Providers>  
        </body>
    </html>
  );
}
