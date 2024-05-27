import { Inter } from "next/font/google";
import "./globals.css";
import Layouts from "@/components/layouts";
import Providers from "@/components/layouts/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmad Albara",
  description: "Personal Website",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} dark:text-primary-dark text-primary-light  `}
      >
        <Providers>
          <Layouts>{children}</Layouts>
        </Providers>
      </body>
    </html>
  );
}
