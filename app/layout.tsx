import type { Metadata } from "next";
import { Montserrat, Oswald } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bodyFont = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-body-runtime",
  display: "swap",
});

const headingFont = Oswald({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-heading-runtime",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Detailing Praha | Luxusní péče o vůz",
  description:
    "Profesionální detailing v Praze: korekce laku, keramická ochrana, interiér a prémiové balíčky služeb. Rezervujte termín online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${bodyFont.variable} ${headingFont.variable} antialiased`}>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1273548621302052');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1273548621302052&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
