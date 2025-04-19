"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      quote:
        "古紙回収業務の効率が大幅に向上しました。以前は手作業でルートを考えていましたが、今ではAIが最適なルートを提案してくれるので、1日あたりの回収量が20%増加しました。",
      author: "株式会社エコリサイクル",
      role: "営業部長",
    },
    {
      id: 2,
      quote:
        "APIを活用して自社システムと連携させたことで、データ入力の手間が大幅に削減されました。配送計画から実績管理まで一元化できたことで、業務効率が向上しています。",
      author: "物流サービス株式会社",
      role: "システム部 部長",
    },
    {
      id: 3,
      quote:
        "飲食店の配送業務に導入したところ、配達時間の正確性が向上し、顧客満足度が大幅に改善しました。特に繁忙時間帯の配送ルート最適化が非常に役立っています。",
      author: "フードデリバリー株式会社",
      role: "運営マネージャー",
    },
    {
      id: 4,
      quote:
        "小売店舗への商品配送に活用しています。在庫状況に応じた配送計画の自動生成機能が特に便利で、欠品率の低減に大きく貢献しています。",
      author: "全国チェーン小売株式会社",
      role: "物流部 課長",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-xl bg-blue-50 p-8 md:p-12 relative min-h-[300px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Quote className="h-12 w-12 mx-auto mb-6 text-blue-300" />
            <blockquote className="text-xl md:text-2xl font-medium mb-6">"{testimonials[current].quote}"</blockquote>
            <div className="font-semibold">{testimonials[current].author}</div>
            <div className="text-sm text-gray-500">{testimonials[current].role}</div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-2 h-2 p-0 rounded-full ${index === current ? "bg-blue-600" : "bg-gray-200"}`}
          >
            <span className="sr-only">Testimonial {index + 1}</span>
          </Button>
        ))}
        <Button variant="outline" size="icon" onClick={next} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
    </div>
  )
}
