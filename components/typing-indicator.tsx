"use client"

import { motion } from "framer-motion"
import { Bot } from "lucide-react"

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-start"
    >
      <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100 dark:bg-gray-700 text-blue-600 dark:text-gray-300">
          <Bot className="w-4 h-4" />
        </div>
        <div className="px-4 py-2 rounded-2xl bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"
                animate={{
                  y: [0, -4, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}