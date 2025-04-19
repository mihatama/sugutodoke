"use client"

import { motion } from "framer-motion"
import { Sparkles, Clock, Zap, TrendingDown } from "lucide-react"

export default function TestimonialCarousel() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-xl bg-blue-50 p-8 md:p-12 relative min-h-[300px] flex items-center justify-center"
      >
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-primary-100 p-3">
              <Sparkles className="h-8 w-8 text-primary-600" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">新しいサービスです</h3>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            まだ導入された企業はありません。あなたの企業が最初の成功事例になりませんか？
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <Clock className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <p className="font-medium">配送時間 20% 削減</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <TrendingDown className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <p className="font-medium">燃料コスト 15% 削減</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <Zap className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <p className="font-medium">業務効率 30% 向上</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
