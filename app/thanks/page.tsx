import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThanksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <Image src="/loot-logo.png" alt="スグとどけ ロゴ" width={32} height={32} />
                <span className="text-xl font-bold text-primary-600">スグとどけ</span>
              </div>
            </Link>
          </div>
          <Link href="/" className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-600">
            <ArrowLeft className="h-4 w-4" />
            <span>トップページに戻る</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12 flex flex-col items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="rounded-full bg-primary-100 p-4 mx-auto w-16 h-16 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold">お問い合わせありがとうございます</h1>
          <p className="text-gray-600">担当者が内容を確認し、3営業日以内にご連絡いたします。</p>
          <Button asChild className="mt-8 bg-primary-600 hover:bg-primary-700">
            <Link href="/">トップページに戻る</Link>
          </Button>
        </div>
      </main>

      <footer className="border-t bg-gray-100">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Image src="/loot-logo.png" alt="スグとどけ ロゴ" width={32} height={32} />
            <span className="text-xl font-bold text-primary-600">スグとどけ</span>
          </div>
          <div className="text-sm text-gray-500">© 2025　みはたま</div>
        </div>
      </footer>
    </div>
  )
}
