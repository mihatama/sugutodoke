"use client"

import { Check, X } from "lucide-react"
import { motion } from "framer-motion"

export default function FeatureComparison() {
  const features = [
    {
      name: "ルート最適化",
      traditional: false,
      our: true,
      description: "AIを活用した最適なルート提案",
    },
    {
      name: "リアルタイム更新",
      traditional: false,
      our: true,
      description: "交通状況に応じたルートの動的更新",
    },
    {
      name: "作業時間",
      traditional: "平均4時間/日",
      our: "平均30分/日",
      description: "ルート計画作成にかかる時間",
    },
    {
      name: "燃料コスト",
      traditional: "基準値",
      our: "約15%削減",
      description: "最適ルートによる走行距離の削減",
    },
    {
      name: "配送効率",
      traditional: "基準値",
      our: "約20%向上",
      description: "1日あたりの配送件数",
    },
    {
      name: "システム連携",
      traditional: false,
      our: true,
      description: "既存システムとのAPIによる連携",
    },
    {
      name: "データ分析",
      traditional: false,
      our: true,
      description: "配送データの分析と可視化",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto"
      >
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 text-left border-b-2 border-gray-200">機能</th>
              <th className="p-4 text-center border-b-2 border-gray-200">従来の方法</th>
              <th className="p-4 text-center border-b-2 border-gray-200">スグとどけ</th>
              <th className="p-4 text-left border-b-2 border-gray-200">詳細</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="p-4 font-medium">{feature.name}</td>
                <td className="p-4 text-center">
                  {typeof feature.traditional === "boolean" ? (
                    feature.traditional ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    <span>{feature.traditional}</span>
                  )}
                </td>
                <td className="p-4 text-center">
                  {typeof feature.our === "boolean" ? (
                    feature.our ? (
                      <Check className="h-5 w-5 text-primary-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )
                  ) : (
                    <span className="font-bold text-primary-600">{feature.our}</span>
                  )}
                </td>
                <td className="p-4 text-gray-600">{feature.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  )
}
