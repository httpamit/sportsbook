import "./globals.css";
import { Open_Sans, Montserrat } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  display: "optional",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "optional",
});

export const metadata = {
  title: "MAXBET360",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${openSans.variable} ${montserrat.variable} font-sans  bg-no-repeat bg-top bg-cover bg-fixed min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
