"use client"

import { motion } from "framer-motion"
import { ExternalLink, Heart } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function Footer() {
  const { t } = useTranslation()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-6">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("footer.privacy")}
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {t("footer.terms")}
            </a>
            <a
              href="https://www.registre-entreprises.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
            >
              {t("footer.contact")}
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>

          {/* Attribution */}
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>{t("footer.built")}</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>{t("footer.hackathon")}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 RNE Chatbot. {t("footer.rights")}
        </div>
      </div>
    </motion.footer>
  )
}
