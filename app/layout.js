import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import ContactPopup from "./components/ContactPopup";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-satoshi", // Define the CSS variable
});

export const metadata = {
  metadataBase: new URL("https://goasportsadventure.in"),

  title: "Goa Sports Adventure | Scuba Diving & Water Sports",

  description:
    "Book Grand Island scuba diving, thrilling water sports, Dudhsagar waterfall tours and dinner cruises with Goa Sports Adventure. Explore packages and book today.",

  openGraph: {
    title: "Goa Sports Adventure | Scuba Diving & Water Sports",
    description:
      "Explore Grand Island scuba diving, water sports, Dudhsagar waterfall tours and dinner cruises with Goa Sports Adventure.",
    url: "https://goasportsadventure.in/",
    siteName: "Goa Sports Adventure",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Goa Sports Adventure — Scuba Diving & Water Sports",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Goa Sports Adventure | Scuba Diving & Water Sports",
    description:
      "Explore Grand Island scuba diving, water sports, Dudhsagar waterfall tours and dinner cruises.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={satoshi.variable}>
       <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PNVDCMFG');
          `}
        </Script>
      </head>
      <body
        className={`antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PNVDCMFG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Navbar/>
        {children}
        <ContactPopup/>
        <Footer/>

      </body>
    </html>
  );
}
