import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas",
});

export const metadata = {
  title: "Food Stall",
  description: "Food Stall by Code Commandos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Mr Developper</title>
        <meta name="description" content="Mr Developper" />
        <link rel="icon" href="/assets/contact/img18.png" type="image/x-icon" />
<link rel="apple-touch-icon" href="/assets/contact/img18.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/assets/contact/img18.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/assets/contact/img18.png" />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}

