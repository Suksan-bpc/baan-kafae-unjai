import type { Metadata, Viewport } from "next";
import { Mitr, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const heading = Mitr({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600"],
});

const body = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
});

const title = "บ้านกาแฟอุ่นใจ | ร้านกาแฟเล็ก ๆ ที่อบอุ่นเหมือนบ้าน";
const description =
  "กาแฟคั่วสดจากดอยไทย ขนมอบใหม่ทุกเช้า ในมุมสบาย ๆ เหมือนนั่งอยู่บ้าน สั่งล่วงหน้าหรือสอบถามได้ทาง LINE";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "บ้านกาแฟอุ่นใจ",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#3b2418",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
