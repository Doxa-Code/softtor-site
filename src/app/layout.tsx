import Footer from "@/components/ui/Footer"
import { Navigation } from "@/components/ui/Navbar"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import localFont from "next/font/local"
import "./globals.css"
import { siteConfig } from "./siteConfig"

const chakraPetch = localFont({
  src: [
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/chakra-petch/ChakraPetch-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chakra-petch",
  display: "swap",
})

// Neue Machina (local)
const neueMachina = localFont({
  src: [
    {
      path: "../../public/fonts/neue-machina/NeueMachina-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-machina/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-machina/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://softtor.com.br"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Software House",
    "Desenvolvimento de Software",
    "Softtor",
    "Desenvolvimento de Sistemas",
    "Aplicativos",
    "Web",
    "Mobile",
  ],
  authors: [
    {
      name: "yourname",
      url: "",
    },
  ],
  creator: "yourname",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@yourname",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${chakraPetch.variable} ${neueMachina.variable} min-h-screen scroll-auto antialiased selection:bg-indigo-100 selection:text-indigo-700 dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
