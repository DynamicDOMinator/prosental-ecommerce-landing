import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata = {
  title: "Prosental - E-commerce Template",
  description:
    "انشئ متجرك الإلكتروني بكل سهولة، نحن نقدم لك أفضل الميزات لتحقق مبيعات أعلى.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${cairo.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
