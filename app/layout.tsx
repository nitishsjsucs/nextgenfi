import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ConvexClientProvider } from "@/lib/convex"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Bank Backend",
  description: "We plug and play into your bank's infrastructure.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased font-light bg-black text-white`} suppressHydrationWarning
      >
        {/* Layered atmospheric background */}
        <div className="relative min-h-screen">
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="grain-overlay"></div>
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-950/5 via-transparent to-gray-900/10"></div>
          </div>

          <div className="relative z-10 min-h-screen backdrop-blur-[2px]">
            <ConvexClientProvider>{children}</ConvexClientProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
