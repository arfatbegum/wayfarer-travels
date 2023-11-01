import "./globals.css";
import type { Metadata } from "next";
import Providers from "@/lib/Providers";


export const metadata: Metadata = {
  title: "Wayfarer Travels",
  description: "Tour Booking Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </Providers>
  );
}