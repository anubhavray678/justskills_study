"use client";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

import { Adsense } from "@ctrl/react-adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Justskills | Study",
  description:
    "Study different trending topics covering coding , technologies!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3581583340976914"
        crossorigin="anonymous"
      ></script>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  <div className="pt-[100px]">{children}</div>
                  <Footer />
                  {/* ca-pub-3581583340976914 */}
                  <Adsense
                    client="ca-pub-3581583340976914"
                    slot="3735583844"
                    style={{ display: "block" }}
                    layout="in-article"
                    format="fluid"
                  />
                  {/* <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3581583340976914"
                    crossorigin="anonymous"
                  ></script>
                  <ins
                    class="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-format="autorelaxed"
                    data-ad-client="ca-pub-3581583340976914"
                    data-ad-slot="3735583844"
                  ></ins>
                  <script>
                    (adsbygoogle = window.adsbygoogle || []).push({});
                  </script> */}
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
