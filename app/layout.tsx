import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interFont = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
  display: "swap",
});

const spaceGroteskFont = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESLint & Prettier Config",
  description:
    "A public repository containing standardized ESLint and Prettier configurations for consistent code formatting and linting across projects.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${spaceGroteskFont.variable} ${interFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
