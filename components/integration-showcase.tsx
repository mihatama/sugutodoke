"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IntegrationShowcase() {
  const integrations = [
    {
      id: "kintone",
      name: "kintone",
      description: "kintoneと連携し、配送データや顧客情報を一元管理。APIを通じてシームレスにデータを連携します。",
      features: ["配送データの自動同期", "顧客情報の一元管理", "配送状況のリアルタイム更新"],
      image: "/kintone-icon.jpg",
    },
    {
      id: "aws",
      name: "AWS",
      description:
        "AWSのクラウドインフラを活用し、スケーラブルで安定したサービスを提供。データ分析や機械学習も可能です。",
      features: ["クラウドベースの安定したインフラ", "データ分析と機械学習", "セキュアなデータ保存と処理"],
      image: "/aws-icon.jpg",
    },
    {
      id: "google",
      name: "Google OR-Tools",
      description: "Google OR-Toolsを活用した高度な最適化アルゴリズムで、複雑な配送ルートを効率的に計算します。",
      features: ["高度なルート最適化アルゴリズム", "複数の制約条件を考慮した計算", "大規模な配送計画の高速処理"],
      image: "/google-or-tools-icon-new.jpg",
    },
    {
      id: "custom",
      name: "カスタム連携",
      description:
        "お客様の既存システムに合わせたカスタム連携も可能。RESTful APIを通じて様々なシステムと接続できます。",
      features: ["RESTful API提供", "既存システムとの柔軟な連携", "データ形式の変換と互換性確保"],
      image: "/custom-integration-icon.jpg",
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs defaultValue="kintone" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          {integrations.map((integration) => (
            <TabsTrigger key={integration.id} value={integration.id}>
              {integration.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {integrations.map((integration) => (
          <TabsContent key={integration.id} value={integration.id} className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{integration.name}連携</h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>
                <ul className="space-y-3">
                  {integration.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="rounded-full p-1 bg-blue-100 text-blue-600 mt-0.5">
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
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-8 flex items-center justify-center">
                <Image
                  src={integration.image || "/placeholder.svg"}
                  alt={`${integration.name}連携`}
                  width={300}
                  height={200}
                  className="object-contain h-48"
                />
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
