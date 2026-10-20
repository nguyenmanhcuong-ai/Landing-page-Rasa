import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const body = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rasa – Ngon & Lành | Dinh dưỡng rau, củ, nấm",
    template: "%s | Rasa – Ngon & Lành",
  },
  description:
    "Khám phá đặc điểm, giá trị dinh dưỡng và công dụng của hơn 60 loại rau, củ, nấm tại Rasa.",
  icons: { icon: "/logo.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#064B28",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={body.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
