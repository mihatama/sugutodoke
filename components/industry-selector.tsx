"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Recycle, Truck, Package, ShoppingBag, Utensils, Box, Bus } from "lucide-react"

export default function IndustrySelector() {
  const [activeTab, setActiveTab] = useState("recycling")

  const industries = [
    {
      id: "recycling",
      name: "古紙回収",
      icon: <Recycle className="h-5 w-5" />,
      description: "古紙回収業務の効率化を実現。回収ポイントの最適なルート設計で時間とコストを削減します。",
      benefits: [
        "回収ポイントの効率的なルート設計",
        "電話受付と連携した回収スケジュール管理",
        "重量データの記録と分析",
      ],
      image: "/city-recycling-day.png",
    },
    {
      id: "delivery",
      name: "宅配・配送",
      icon: <Truck className="h-5 w-5" />,
      description: "宅配・配送業務の効率化を実現。配送ルートの最適化で時間とコストを削減します。",
      benefits: ["配送ルートの最適化", "リアルタイム交通情報の反映", "配送状況のリアルタイム追跡"],
      image: "/urban-delivery.png",
    },
    {
      id: "logistics",
      name: "物流",
      icon: <Package className="h-5 w-5" />,
      description: "物流業務の効率化を実現。複数の配送先を最適なルートで結び、時間とコストを削減します。",
      benefits: ["複数配送先の最適化", "車両の積載量を考慮したルート設計", "配送スケジュールの最適化"],
      image: "/bustling-warehouse-trucks.png",
    },
    {
      id: "retail",
      name: "小売",
      icon: <ShoppingBag className="h-5 w-5" />,
      description: "小売業の配送業務の効率化を実現。店舗への商品配送を最適化し、時間とコストを削減します。",
      benefits: ["店舗への配送ルート最適化", "在庫状況に応じた配送計画", "配送スケジュールの自動生成"],
      image: "/retail-delivery-van.png",
    },
    {
      id: "food",
      name: "飲食・フードデリバリー",
      icon: <Utensils className="h-5 w-5" />,
      description:
        "飲食店の配送業務の効率化を実現。温度管理や時間制約を考慮した最適なルート設計で顧客満足度を向上します。",
      benefits: ["時間指定配送の最適化", "温度管理を考慮したルート設計", "複数注文の効率的な配送計画"],
      image: "/diverse-food-delivery.png",
    },
    {
      id: "manufacturing",
      name: "製造業",
      icon: <Box className="h-5 w-5" />,
      description: "製造業の部品調達や製品出荷の効率化を実現。サプライチェーン全体の最適化で時間とコストを削減します。",
      benefits: ["部品調達の効率化", "製品出荷の最適化", "サプライチェーン全体の可視化"],
      image: "/manufacturing-industry-new.jpg",
    },
    {
      id: "demandbus",
      name: "デマンドバス",
      icon: <Bus className="h-5 w-5" />,
      description:
        "予約型乗合バスの運行を最適化。乗車人数や時間制約を考慮した効率的なルート設計で運行コストを削減します。",
      benefits: [
        "乗車人数制限を考慮したルート設計",
        "予約状況に応じた動的ルート変更",
        "乗り換え時間の最小化",
        "高齢者や障がい者の乗降時間を考慮",
      ],
      image: "/hiace-japan-demand-bus.jpg",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs defaultValue="recycling" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-7 mb-8">
          {industries.map((industry) => (
            <TabsTrigger key={industry.id} value={industry.id} className="flex flex-col items-center gap-2 py-3">
              {industry.icon}
              <span className="text-xs">{industry.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {industries.map((industry) => (
          <TabsContent key={industry.id} value={industry.id} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{industry.name}向けソリューション</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <ul className="space-y-3">
                  {industry.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-green-100 text-green-600 mt-0.5">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={`${industry.name}向けソリューション`}
                  width={500}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
