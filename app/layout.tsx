import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "brandbaz ",
  description: "فروشگاه آنلاین برندباز",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="rtl" lang="en">
      <body className="font-iransans overflow-x-hidden">{children}</body>
    </html>
  );
}
