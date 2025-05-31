"use client"

import { motion } from "framer-motion"
import { useTranslation } from "@/hooks/use-translation"

export default function AboutUsPage() {
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-20"
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {t("about.title")}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
        {t("about.description")}
      </p>
    </motion.section>
  )
}