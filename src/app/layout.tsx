import "@/common/style/global.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyeji Profile",
  description: "Hyeji Profile",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
