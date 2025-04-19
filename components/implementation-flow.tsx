"use client"

import { motion } from "framer-motion"
import { MessageSquare, PlayCircle, Settings, CheckCircle, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ImplementationFlow() {
  const steps = [
    {
      id: "inquiry",
      title: "お問い合わせ",
      description: "まずはお気軽にお問い合わせください。専門スタッフが対応いたします。",
      icon: <MessageSquare className="h-6 w-6" />,
      actions: [{ label: "お問い合わせ", primary: true }],
    },
    {
      id: "consultation",
      title: "AIによる課題分析・提案",
      description: "AIが貴社の配送業務を分析し、最適なソリューションを提案します。専門スタッフがサポートします。",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      id: "trial",
      title: "無料トライアル",
      description: "1ヶ月間の無料トライアルで効果を体感。実際の業務データで最適化効果を確認できます。",
      icon: <PlayCircle className="h-6 w-6" />,
      actions: [{ label: "無料トライアル申込み", primary: true }],
    },
    {
      id: "setup",
      title: "初期設定・カスタマイズ",
      description: "専任担当者が初期設定をサポート。貴社の業務フローに合わせたカスタマイズを行います。",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      id: "implementation",
      title: "本格導入",
      description: "契約後、スムーズに本番環境へ移行。専任担当者が導入までしっかりサポートします。",
      icon: <CheckCircle className="h-6 w-6" />,
    },
    {
      id: "support",
      title: "継続サポート",
      description: "導入後も専任担当者が伴走。定期的な最適化提案や新機能のご案内など、継続的にサポートします。",
      icon: <Headphones className="h-6 w-6" />,
    },
  ]

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <div className="text-primary-600">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              {step.actions && (
                <div className="flex flex-col gap-2 mt-auto">
                  {step.actions.map((action, actionIndex) => (
                    <Button
                      key={actionIndex}
                      variant={action.primary ? "default" : "outline"}
                      className={
                        action.primary
                          ? "bg-primary-600 hover:bg-primary-700"
                          : "border-primary-600 text-primary-600 hover:bg-primary-50"
                      }
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            <div className="bg-primary-50 px-6 py-3 flex items-center">
              <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
              <div className="ml-2 text-sm font-medium text-primary-800">ステップ {index + 1}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
