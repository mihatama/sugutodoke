import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import StructuredData from "@/components/StructuredData"
import type { Metadata } from "next"

// サブセットを指定して必要な文字だけ読み込む
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // フォント読み込み中にシステムフォントを表示
  preload: true,
})

// メタデータの設定
export const metadata: Metadata = {
  title: "スグとどけ - AI配送ルート最適化サービス",
  description: "AIを活用した配送ルート最適化サービス。古紙回収から始まり、今ではあらゆる業種に対応。",
  icons: {
    icon: "/loot-logo.png",
    apple: "/loot-logo.png",
    shortcut: "/loot-logo.png",
  },
    generator: 'v0.dev'
}

// Google Analytics 4の追加
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <StructuredData />
      </body>
    </html>
  )
}


import './globals.css'