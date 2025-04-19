"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Truck, Users } from "lucide-react"

export default function RouteAnimation() {
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Start animation after component mounts
    setIsAnimating(true)

    // Set up interval to restart animation
    intervalRef.current = setInterval(() => {
      setIsAnimating(false)
      setTimeout(() => setIsAnimating(true), 500)
    }, 10000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="absolute inset-0 bg-gray-100">
        <Image
          src="/cities-skylines-topdown-district.jpg"
          alt="都市俯瞰図"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Delivery points with capacity */}
      <motion.div
        className="absolute top-[30%] left-[20%] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isAnimating ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
          3
        </div>
        <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm flex items-center">
          <Users className="h-3 w-3 mr-0.5" />
          <span>3名</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[45%] left-[35%] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isAnimating ? 1 : 0 }}
        transition={{ delay: 1.0, duration: 0.3 }}
      >
        <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
          2
        </div>
        <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm flex items-center">
          <Users className="h-3 w-3 mr-0.5" />
          <span>2名</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[25%] left-[60%] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isAnimating ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 0.3 }}
      >
        <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
          1
        </div>
        <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm flex items-center">
          <Users className="h-3 w-3 mr-0.5" />
          <span>1名</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[70%] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isAnimating ? 1 : 0 }}
        transition={{ delay: 2.0, duration: 0.3 }}
      >
        <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
          4
        </div>
        <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm flex items-center">
          <Users className="h-3 w-3 mr-0.5" />
          <span>4名</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-[70%] left-[40%] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isAnimating ? 1 : 0 }}
        transition={{ delay: 2.5, duration: 0.3 }}
      >
        <div className="h-6 w-6 rounded-full bg-red-500 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
          2
        </div>
        <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm flex items-center">
          <Users className="h-3 w-3 mr-0.5" />
          <span>2名</span>
        </div>
      </motion.div>

      {/* Starting point */}
      <motion.div
        className="absolute top-[50%] left-[50%] z-10"
        initial={{ scale: 0 }}
        animate={{ scale: isAnimating ? 1 : 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="h-8 w-8 rounded-full bg-primary-600 border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
          S
        </div>
        <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm">拠点</div>
      </motion.div>

      {/* Route path */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
        <motion.path
          d="M 50% 50% L 20% 30% L 35% 45% L 60% 25% L 70% 60% L 40% 70% L 50% 50%"
          fill="none"
          stroke="#5651e5"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isAnimating ? 1 : 0 }}
          transition={{ duration: 3, delay: 3 }}
        />
      </svg>

      {/* Vehicle icon */}
      <motion.div
        className="absolute z-20"
        initial={{ left: "50%", top: "50%", rotate: 0 }}
        animate={
          isAnimating
            ? [
                { left: "50%", top: "50%", rotate: 0, transition: { duration: 0 } },
                { left: "20%", top: "30%", rotate: -30, transition: { duration: 0.8, delay: 3 } },
                { left: "35%", top: "45%", rotate: 45, transition: { duration: 0.8 } },
                { left: "60%", top: "25%", rotate: -45, transition: { duration: 0.8 } },
                { left: "70%", top: "60%", rotate: 90, transition: { duration: 0.8 } },
                { left: "40%", top: "70%", rotate: 180, transition: { duration: 0.8 } },
                { left: "50%", top: "50%", rotate: 0, transition: { duration: 0.8 } },
              ]
            : { left: "50%", top: "50%", rotate: 0 }
        }
      >
        <div className="bg-primary-600 text-white p-1 rounded-full shadow-lg">
          <Truck className="h-6 w-6" />
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-2 shadow-lg z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="text-xs font-bold mb-1">凡例</div>
        <div className="flex items-center gap-1 text-xs">
          <div className="w-3 h-3 rounded-full bg-primary-600"></div>
          <span>拠点</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <span>乗車地点</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <div className="w-3 h-0.5 bg-primary-600"></div>
          <span>最適ルート</span>
        </div>
      </motion.div>

      {/* Capacity indicator */}
      <motion.div
        className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-2 shadow-lg z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <div className="text-xs font-bold mb-1">乗車人数</div>
        <div className="flex items-center gap-1 text-xs">
          <Users className="h-3 w-3" />
          <span>最大: 10名</span>
        </div>
        <motion.div
          className="w-full bg-gray-200 h-2 rounded-full mt-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <motion.div
            className="bg-primary-600 h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: isAnimating ? "70%" : "0%" }}
            transition={{ duration: 2, delay: 4 }}
          />
        </motion.div>
        <motion.div
          className="text-xs text-right mt-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimating ? 1 : 0 }}
          transition={{ delay: 6 }}
        >
          7/10名
        </motion.div>
      </motion.div>

      {/* Optimization indicator */}
      <motion.div
        className="absolute bottom-4 right-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAnimating ? 1 : 0 }}
        transition={{ delay: 6, duration: 0.5 }}
      >
        <div className="text-sm font-bold text-primary-800">ルート最適化完了</div>
        <div className="text-xs text-gray-700">走行距離: 15% 削減</div>
        <div className="text-xs text-gray-700">移動時間: 20% 短縮</div>
        <div className="text-xs text-gray-700">CO2排出量: 18% 削減</div>
      </motion.div>
    </div>
  )
}
