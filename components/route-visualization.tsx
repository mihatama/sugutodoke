"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Truck, Navigation, Clock, TrendingDown } from "lucide-react"

export default function RouteVisualization() {
  const [step, setStep] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const steps = [
    {
      label: "初期状態",
      description: "複数の配送先・乗車地点が点在しています",
      icon: <Navigation className="h-5 w-5 text-primary-600" />,
    },
    {
      label: "距離と時間の計算",
      description: "各地点間の移動距離と時間を計算します",
      icon: <Clock className="h-5 w-5 text-primary-600" />,
    },
    {
      label: "最適ルートの決定",
      description: "AIが最も効率的な巡回順序を決定します",
      icon: <TrendingDown className="h-5 w-5 text-primary-600" />,
    },
    {
      label: "最適化完了",
      description: "最適なルートで時間20%、コスト15%削減",
      icon: <Truck className="h-5 w-5 text-primary-600" />,
    },
  ]

  useEffect(() => {
    const startAnimation = () => {
      setStep(0)
      const interval = setInterval(() => {
        setStep((prev) => {
          const nextStep = prev + 1
          if (nextStep >= steps.length) {
            clearInterval(interval)
            setTimeout(startAnimation, 3000)
            return 0
          }
          return nextStep
        })
      }, 3000)
      intervalRef.current = interval
    }

    startAnimation()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl bg-white">
      <div className="aspect-[4/3] relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WQO2JngYBSxSAZF8fpQEixxZ1IY0Pt.png"
          alt="配送ルート最適化マップ"
          fill
          className="object-cover"
        />

        {step === 3 && (
          <motion.div
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="text-sm font-bold text-primary-800">最適化結果</div>
            <div className="flex items-center gap-1 text-xs text-gray-700">
              <Clock className="h-3 w-3" />
              <span>移動時間: 20% 短縮</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-700">
              <TrendingDown className="h-3 w-3" />
              <span>走行距離: 15% 削減</span>
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-4 bg-white border-t">
        <div className="flex justify-between mb-3 overflow-x-auto">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-1 px-1 min-w-[70px] ${i === step ? "opacity-100" : "opacity-40"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
                ${i === step ? "bg-primary-100 text-primary-600" : "bg-gray-100 text-gray-400"}`}
              >
                {s.icon}
              </div>
              <div className="text-xs font-medium text-center">
                {i + 1}. {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 p-3 bg-primary-50 rounded-lg">
          <h3 className="font-bold text-lg text-primary-800 flex items-center gap-2">
            {steps[step].icon}
            <span>{steps[step].label}</span>
          </h3>
          <p className="text-gray-700">{steps[step].description}</p>
        </div>
      </div>
    </div>
  )
}
