"use client"

import { useState, useEffect } from "react"

export function useLanguage() {
  const [language, setLanguage] = useState<"en" | "fr" | "ar">("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "fr" | "ar" | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const updateLanguage = (newLanguage: "en" | "fr" | "ar") => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  return { language, setLanguage: updateLanguage }
}
