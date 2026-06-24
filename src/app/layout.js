import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-300-normal.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-space-grotesk",
  display: "swap",
});

const euclidCircularB = localFont({
  src: [
    {
      path: "../../public/fonts/Euclid-Circular-B-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-SemiBold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Euclid-Circular-B-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-euclid-circular-b",
  display: "swap",
});

export const metadata = {
  title: "Design Value | Architects & Engineers – Architectural & Structural Consultant",
  description: "Rebuilt designvaluebd.com - Modernized Architectural & Structural Consultant Web Application.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${euclidCircularB.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
