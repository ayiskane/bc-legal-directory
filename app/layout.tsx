import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BC Legal Directory",
  description: "Contact information for BC courts, RCMP, and correctional centres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
