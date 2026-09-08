import type { Metadata } from "next";
import "@fontsource/press-start-2p/400.css";
import "nes.css/css/nes.min.css";
import "./globals.css";

const title = "Aarush Arya | Microelectronic Systems Engineer";
const description =
  "FPGA, RISC-V, VLSI, DSP, and microelectronic systems engineering portfolio of Aarush Arya.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarusharya.fyi"),
  title,
  description,
  icons: { icon: "/aarush-pixel-avatar.png" },
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
