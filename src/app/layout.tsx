import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Derin Koltuk Yıkama Koltuk Temizleme",
  description: "Profesyonel Koltuk Yıkama hizmet ile evinizdeki ve işyerinizdeki koltuklar ilk günkü temizliğe dönüyor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
