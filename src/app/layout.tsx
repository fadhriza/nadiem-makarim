import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nadiem Makarim — Lini Masa Mendikbud",
  description:
    "Lini masa interaktif perjalanan Nadiem Makarim sebagai Menteri Pendidikan dan Kebudayaan RI, Oktober 2019 hingga Desember 2020.",
  metadataBase: new URL("https://nadiem-makarim.example.com"),
  openGraph: {
    title: "Nadiem Makarim — Lini Masa Mendikbud",
    description:
      "Lini masa setiap bulan: dari pelantikan, peluncuran Merdeka Belajar, hingga adaptasi pendidikan nasional selama pandemi.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
