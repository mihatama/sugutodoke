"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Truck, Navigation, Clock, TrendingDown, Users } from "lucide-react"

export default function RouteOptimizationMap() {
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

  // Locations on city map (approximate coordinates in percentage)
  const locations = [
    { id: "start", x: 50, y: 50, isStart: true, capacity: null },
    { id: "loc1", x: 30, y: 30, isStart: false, capacity: 3 },
    { id: "loc2", x: 70, y: 25, isStart: false, capacity: 2 },
    { id: "loc3", x: 75, y: 60, isStart: false, capacity: 1 },
    { id: "loc4", x: 35, y: 70, isStart: false, capacity: 4 },
    { id: "loc5", x: 20, y: 55, isStart: false, capacity: 2 },
  ]

  useEffect(() => {
    // Start animation sequence
    const startAnimation = () => {
      setStep(0)

      // Sequence through steps
      const interval = setInterval(() => {
        setStep((prev) => {
          const nextStep = prev + 1
          if (nextStep >= steps.length) {
            clearInterval(interval)

            // Restart after a pause
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
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Generate SVG path for the optimal route
  const getOptimalRoute = () => {
    const startLocation = locations.find((loc) => loc.isStart)
    const deliveryLocations = locations.filter((loc) => !loc.isStart)

    // Optimal route order (this would normally be calculated by an algorithm)
    // For this example, we'll create a route that makes sense for local delivery
    const optimalOrder = [4, 0, 1, 2, 3] // Indices of locations in the optimal order

    if (!startLocation) return ""

    let path = `M ${startLocation.x}% ${startLocation.y}%`

    // Add path segments in the optimal order
    optimalOrder.forEach((index) => {
      if (index < deliveryLocations.length) {
        const location = deliveryLocations[index]
        path += ` L ${location.x}% ${location.y}%`
      }
    })

    // Close the loop back to the start
    path += ` L ${startLocation.x}% ${startLocation.y}%`

    return path
  }

  // Generate SVG path for the inefficient route
  const getInefficientRoute = () => {
    const startLocation = locations.find((loc) => loc.isStart)
    const deliveryLocations = locations.filter((loc) => !loc.isStart)

    if (!startLocation) return ""

    let path = `M ${startLocation.x}% ${startLocation.y}%`

    // Add path segments in a non-optimal order (zigzag pattern)
    path += ` L ${deliveryLocations[2].x}% ${deliveryLocations[2].y}%`
    path += ` L ${deliveryLocations[0].x}% ${deliveryLocations[0].y}%`
    path += ` L ${deliveryLocations[3].x}% ${deliveryLocations[3].y}%`
    path += ` L ${deliveryLocations[1].x}% ${deliveryLocations[1].y}%`
    path += ` L ${deliveryLocations[4].x}% ${deliveryLocations[4].y}%`

    // Close the loop back to the start
    path += ` L ${startLocation.x}% ${startLocation.y}%`

    return path
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl bg-white">
      <div className="aspect-[4/3] relative">
        {/* Top-down city map background */}
        <Image src="/cities-skylines-topdown.jpg" alt="都市俯瞰図" fill className="object-cover" />

        {/* Location points */}
        {locations.map((location, index) => (
          <div
            key={index}
            className="absolute z-10"
            style={{
              left: `${location.x}%`,
              top: `${location.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              className={`flex flex-col items-center`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <div
                className={`
                ${
                  location.isStart
                    ? "h-8 w-8 bg-primary-600 text-white flex items-center justify-center"
                    : "h-6 w-6 bg-red-500 text-white flex items-center justify-center"
                } 
                rounded-full border-2 border-white shadow-md`}
              >
                {location.isStart ? (
                  <span className="text-xs font-bold">S</span>
                ) : (
                  location.capacity && <span className="text-xs font-bold">{location.capacity}</span>
                )}
              </div>
              {location.isStart ? (
                <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm">拠点</div>
              ) : (
                <div className="mt-1 px-1.5 py-0.5 bg-white/80 rounded text-xs font-medium shadow-sm flex items-center">
                  <Users className="h-3 w-3 mr-0.5" />
                  <span>{location.capacity}</span>
                </div>
              )}
            </motion.div>
          </div>
        ))}

        {/* Route paths based on current step */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
          {/* Step 1: Initial inefficient connections */}
          {step === 1 && (
            <motion.path
              d={getInefficientRoute()}
              fill="none"
              stroke="#d1d5db"
              strokeWidth="3"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          )}

          {/* Step 2: Calculating optimal route */}
          {step === 2 && (
            <>
              <motion.path
                d={getInefficientRoute()}
                fill="none"
                stroke="#d1d5db"
                strokeWidth="2"
                strokeDasharray="5,5"
                initial={{ pathLength: 1 }}
                animate={{ pathLength: 1 }}
              />
              <motion.path
                d={getOptimalRoute()}
                fill="none"
                stroke="#9333ea"
                strokeWidth="3"
                strokeDasharray="3,3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2 }}
              />
            </>
          )}

          {/* Step 3: Final optimized route */}
          {step === 3 && (
            <motion.path
              d={getOptimalRoute()}
              fill="none"
              stroke="#5651e5"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />
          )}
        </svg>

        {/* Vehicle icon that follows the path */}
        {step === 3 && (
          <motion.div
            className="absolute z-20"
            initial={{ left: `${locations[0].x}%`, top: `${locations[0].y}%`, transform: "translate(-50%, -50%)" }}
            animate={[
              {
                left: `${locations[0].x}%`,
                top: `${locations[0].y}%`,
                rotate: 0,
                scale: 1,
                transition: { duration: 0 },
              },
              {
                left: `${locations[5].x}%`,
                top: `${locations[5].y}%`,
                rotate: -30,
                scale: 1.2,
                transition: { duration: 0.5, delay: 0.3 },
              },
              {
                left: `${locations[1].x}%`,
                top: `${locations[1].y}%`,
                rotate: 30,
                scale: 1.2,
                transition: { duration: 0.5 },
              },
              {
                left: `${locations[2].x}%`,
                top: `${locations[2].y}%`,
                rotate: 60,
                scale: 1.2,
                transition: { duration: 0.5 },
              },
              {
                left: `${locations[3].x}%`,
                top: `${locations[3].y}%`,
                rotate: 0,
                scale: 1.2,
                transition: { duration: 0.5 },
              },
              {
                left: `${locations[4].x}%`,
                top: `${locations[4].y}%`,
                rotate: -60,
                scale: 1.2,
                transition: { duration: 0.5 },
              },
              {
                left: `${locations[0].x}%`,
                top: `${locations[0].y}%`,
                rotate: 0,
                scale: 1,
                transition: { duration: 0.5 },
              },
            ]}
          >
            <div className="bg-primary-600 text-white p-1 rounded-full shadow-lg">
              <Truck className="h-5 w-5" />
            </div>
          </motion.div>
        )}

        {/* Capacity indicator - only show in final step */}
        {step === 3 && (
          <motion.div
            className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="text-sm font-bold text-primary-800">乗車人数管理</div>
            <div className="flex items-center gap-1 text-xs text-gray-700">
              <Users className="h-3 w-3" />
              <span>最大乗車人数: 10名</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-700">
              <span>現在の乗車人数: 7名</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
              <motion.div
                className="h-full bg-primary-600 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "70%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </div>
          </motion.div>
        )}

        {/* Optimization metrics - only show in final step */}
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

      {/* Step indicator and explanation */}
      <div className="p-4 bg-white border-t">
        <div className="flex justify-between mb-3">
          {steps.map((s, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 ${i === step ? "opacity-100" : "opacity-40"}`}>
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
