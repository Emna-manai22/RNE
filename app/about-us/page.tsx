"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/hooks/use-translation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutUsPage() {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4"
    >
      {/* En-tête */}
      <Header />

      {/* Section principale */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {t("about.title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("about.description")}
          </p>
        </motion.div>

        {/* Carte mission */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl p-8 mb-12 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("about.title1")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            {t("about.mission")}
          </p>
        </motion.div>

        {/* Carte supplémentaire - si besoin */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("about.additional_title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            {t("about.additional_description")}
          </p>
        </motion.div>

        {/* Bouton Retour */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            ← {t("chat.choice.back")}
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  )
}