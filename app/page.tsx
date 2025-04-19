import Link from "next/link"
import Image from "next/image"
import {
  MapPin,
  Truck,
  Code,
  Zap,
  BarChart3,
  Layers,
  ArrowRight,
  Phone,
  Building,
  Map,
  Clock,
  DollarSign,
  Brain,
  Sparkles,
  Cpu,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import IndustrySelector from "../components/industry-selector"
import IntegrationShowcase from "../components/integration-showcase"
import FeatureComparison from "../components/feature-comparison"
import { ContactForm } from "../components/contact-form"
import ImplementationFlow from "../components/implementation-flow"
import RouteMapVisualization from "../components/route-map-visualization"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/loot-logo.png" alt="スグとどけ ロゴ" width={32} height={32} />
            <span className="text-xl font-bold text-primary-600">スグとどけ</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary-600 transition-colors">
              機能
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary-600 transition-colors">
              仕組み
            </Link>
            <Link href="#industries" className="text-sm font-medium hover:text-primary-600 transition-colors">
              対応業種
            </Link>
            <Link href="#integration" className="text-sm font-medium hover:text-primary-600 transition-colors">
              システム連携
            </Link>
            <Link href="#implementation" className="text-sm font-medium hover:text-primary-600 transition-colors">
              導入の流れ
            </Link>
            <Link href="#api" className="text-sm font-medium hover:text-primary-600 transition-colors">
              API
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary-600 transition-colors">
              お問い合わせ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-primary-600 hover:bg-primary-700" asChild>
              <Link href="#contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-primary-100 py-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#af33ff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>次世代配送ルート最適化</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  配送ルートを<span className="text-primary-600">最適化</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  古紙回収から始まり、今ではあらゆる業種に対応。APIの提供、アプリ開発、既存システムとの連携も可能です。
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-primary-600 hover:bg-primary-700 gap-1" asChild>
                    <Link href="#contact">
                      お問い合わせ <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-primary-600" />
                    <span>配送時間20%削減</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4 text-primary-600" />
                    <span>燃料コスト15%削減</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:ml-auto">
                <RouteMapVisualization />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Route Optimization Map Section */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Brain className="h-3.5 w-3.5" />
                  <span>仕組み</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ルート最適化の仕組み</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  複雑な配送ルートを最適化し、時間とコストを削減します。
                </p>
              </div>
            </div>

            <div className="mt-12 grid lg:grid-cols-3 gap-8 items-start">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Map className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">複数の配送先を最適化</h3>
                    <p className="text-gray-600">
                      複数の配送先を最も効率的な順序で回るルートを自動計算。交通状況や時間帯も考慮します。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">リアルタイム更新</h3>
                    <p className="text-gray-600">
                      交通状況の変化に応じてルートをリアルタイムで更新。常に最適なルートを提案します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">コスト削減を実現</h3>
                    <p className="text-gray-600">
                      最適なルートにより走行距離と時間を削減。燃料コストと人件費の大幅な削減を実現します。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">乗車人数管理</h3>
                    <p className="text-gray-600">
                      デマンドバスなどの乗車人数制限を考慮したルート設計。最適な乗車順序を提案します。
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">車両の最適配置</h3>
                    <p className="text-gray-600">
                      複数車両の場合、各車両の特性や積載量を考慮した最適な配車計画を提案します。
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">データ分析と改善</h3>
                    <p className="text-gray-600">
                      過去の配送データを分析し、継続的な改善提案を行います。季節変動も考慮します。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-16 bg-gradient-to-b from-white to-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Cpu className="h-3.5 w-3.5" />
                  <span>主な機能</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  配送業務の効率化を実現する機能
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  最適なルート提案で、配送業務の効率化を実現します。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary-100">
                    <Truck className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">ルート最適化</h3>
                  <p className="text-gray-600">過去のデータと交通状況を分析し、最も効率的な配送ルートを提案します。</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary-100">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">リアルタイム追跡</h3>
                  <p className="text-gray-600">
                    配送車両のリアルタイム位置情報を確認でき、顧客への到着時間の正確な予測が可能です。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary-100">
                    <Layers className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">システム連携</h3>
                  <p className="text-gray-600">
                    既存の業務システムとシームレスに連携し、データの一元管理を実現します。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary-100">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">電話対応連携</h3>
                  <p className="text-gray-600">
                    電話で受けた依頼をシステムに直接登録し、回収場所を地図上で簡単に設定できます。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary-100">
                    <Code className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">API提供</h3>
                  <p className="text-gray-600">
                    柔軟なAPIを提供し、お客様独自のシステムやアプリケーションとの連携が可能です。
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full p-3 bg-primary-100">
                    <BarChart3 className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold">分析レポート</h3>
                  <p className="text-gray-600">配送データを分析し、業務改善のためのインサイトを提供します。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section id="industries" className="py-16 bg-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Building className="h-3.5 w-3.5" />
                  <span>対応業種</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  様々な業種で活用できます
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  古紙回収から始まり、今では多くの業種で活用されています。
                </p>
              </div>
            </div>
            <div className="py-12">
              <IndustrySelector />
            </div>
          </div>
        </section>

        {/* Implementation Flow */}
        <section id="implementation" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>導入の流れ</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  スムーズな導入をサポート
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  お問い合わせから導入後のサポートまで、専任担当者が一貫してサポートします。
                </p>
              </div>
            </div>
            <div className="py-12">
              <ImplementationFlow />
            </div>
          </div>
        </section>

        {/* Integration Showcase */}
        <section id="integration" className="py-16 bg-gradient-to-b from-primary-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Layers className="h-3.5 w-3.5" />
                  <span>システム連携</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  既存システムとシームレスに連携
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  kintone、AWSなど、様々なシステムと連携可能です。
                </p>
              </div>
            </div>
            <div className="py-12">
              <IntegrationShowcase />
            </div>
          </div>
        </section>

        {/* API Section */}
        <section id="api" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Code className="h-3.5 w-3.5" />
                  <span>API提供</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">柔軟なAPIで拡張性を実現</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  RESTful APIを提供し、お客様独自のシステムやアプリケーションとの連携が可能です。
                </p>
              </div>
              <div className="relative lg:ml-auto">
                <div className="rounded-lg bg-gray-900 p-4 overflow-hidden shadow-lg">
                  <pre className="text-sm text-green-400 overflow-x-auto">
                    <code>{`// ルート最適化APIの例
fetch('https://api.sugutodoke.com/v1/optimize', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    origin: { lat: 35.6812, lng: 139.7671 },
    destinations: [
      { lat: 35.6432, lng: 139.7401, id: 'stop1' },
      { lat: 35.6762, lng: 139.6503, id: 'stop2' },
      { lat: 35.7281, lng: 139.7432, id: 'stop3' }
    ],
    vehicles: 1,
    options: {
      traffic: true,
      optimize_for: 'time'
    }
  })
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-gradient-to-b from-white to-primary-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <BarChart3 className="h-3.5 w-3.5" />
                  <span>比較</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">従来の方法との比較</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  エクセル入力や手動ルート計画と比較した場合の効率化
                </p>
              </div>
            </div>
            <div className="py-12">
              <FeatureComparison />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm text-primary-800 flex items-center gap-1">
                  <Phone className="h-3.5 w-3.5" />
                  <span>お問い合わせ</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">お問い合わせ</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  API連携やカスタマイズについてもお気軽にお問い合わせください。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-100">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Image src="/loot-logo.png" alt="スグとどけ ロゴ" width={32} height={32} />
            <span className="text-xl font-bold text-primary-600">スグとどけ</span>
          </div>
          <nav className="flex flex-wrap gap-4 sm:gap-6">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              利用規約
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              プライバシーポリシー
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              会社概要
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              お問い合わせ
            </Link>
          </nav>
          <div className="text-sm text-gray-500">© 2024 スグとどけ. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
