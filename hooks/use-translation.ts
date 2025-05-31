"use client"

import { useCallback } from "react"
import { useLanguage } from "./use-language"

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact RNE",
    },
    hero: {
      title: "Check Your Company Name with Ease",
      subtitle: "Instantly verify availability, ensure compliance, and get suggestions in English, French, or Arabic.",
      cta: "Start Chatting",
    },
    features: {
      check: {
        title: "Name Availability",
        description: "Quickly check if your desired company name is available in the registry.",
      },
      compliance: {
        title: "Legal Compliance",
        description: "Ensure your company name meets all legal requirements and regulations.",
      },
      multilingual: {
        title: "Multilingual Support",
        description: "Get assistance in English, French, or Arabic for your convenience.",
      },
    },
    chat: {
      title: "RNE Assistant",
      subtitle: "Ask me about company name availability",
      welcome:
        "Hello! I'm here to help you check company name availability and ensure legal compliance. What company name would you like to check?",
      placeholder: "Type your company name here...",
      back: "Back to Home",
      error: "Sorry, there was an error processing your request.",
      redirect: "For more assistance, please visit:",
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact RNE",
      built: "Built with",
      hackathon: "for Hack4Justice 2025",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      contact: "Contacter RNE",
    },
    hero: {
      title: "Vérifiez Votre Nom d'Entreprise Facilement",
      subtitle:
        "Vérifiez instantanément la disponibilité, assurez la conformité et obtenez des suggestions en anglais, français ou arabe.",
      cta: "Commencer à Discuter",
    },
    features: {
      check: {
        title: "Disponibilité du Nom",
        description: "Vérifiez rapidement si le nom d'entreprise souhaité est disponible dans le registre.",
      },
      compliance: {
        title: "Conformité Légale",
        description: "Assurez-vous que votre nom d'entreprise respecte toutes les exigences légales.",
      },
      multilingual: {
        title: "Support Multilingue",
        description: "Obtenez de l'aide en anglais, français ou arabe pour votre commodité.",
      },
    },
    chat: {
      title: "Assistant RNE",
      subtitle: "Demandez-moi la disponibilité des noms d'entreprise",
      welcome:
        "Bonjour ! Je suis là pour vous aider à vérifier la disponibilité des noms d'entreprise et assurer la conformité légale. Quel nom d'entreprise souhaitez-vous vérifier ?",
      placeholder: "Tapez votre nom d'entreprise ici...",
      back: "Retour à l'Accueil",
      error: "Désolé, il y a eu une erreur lors du traitement de votre demande.",
      redirect: "Pour plus d'assistance, veuillez visiter :",
    },
    footer: {
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      contact: "Contacter RNE",
      built: "Construit avec",
      hackathon: "pour Hack4Justice 2025",
      rights: "Tous droits réservés.",
    },
    
  about: {
    "title": "À propos de nous",
    "description": "Nous sommes une équipe passionnée par la technologie, déterminée à créer des solutions innovantes pour améliorer l'accès à l'information et la communication."
  }

  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "حول",
      contact: "اتصل بـ RNE",
    },
    hero: {
      title: "تحقق من اسم شركتك بسهولة",
      subtitle: "تحقق فوراً من التوفر، وتأكد من الامتثال، واحصل على اقتراحات باللغة الإنجليزية أو الفرنسية أو العربية.",
      cta: "ابدأ المحادثة",
    },
    features: {
      check: {
        title: "توفر الاسم",
        description: "تحقق بسرعة من توفر اسم الشركة المرغوب في السجل.",
      },
      compliance: {
        title: "الامتثال القانوني",
        description: "تأكد من أن اسم شركتك يلبي جميع المتطلبات واللوائح القانونية.",
      },
      multilingual: {
        title: "دعم متعدد اللغات",
        description: "احصل على المساعدة باللغة الإنجليزية أو الفرنسية أو العربية لراحتك.",
      },
    },
    chat: {
      title: "مساعد RNE",
      subtitle: "اسألني عن توفر أسماء الشركات",
      welcome:
        "مرحباً! أنا هنا لمساعدتك في التحقق من توفر أسماء الشركات وضمان الامتثال القانوني. ما اسم الشركة الذي تريد التحقق منه؟",
      placeholder: "اكتب اسم شركتك هنا...",
      back: "العودة للرئيسية",
      error: "عذراً، حدث خطأ في معالجة طلبك.",
      redirect: "للمزيد من المساعدة، يرجى زيارة:",
    },
    footer: {
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "اتصل بـ RNE",
      built: "مبني بـ",
      hackathon: "لـ Hack4Justice 2025",
      rights: "جميع الحقوق محفوظة.",
    },
  },
}

export function useTranslation() {
  const { language } = useLanguage()

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".")
      let value: any = translations[language]

      for (const k of keys) {
        value = value?.[k]
      }

      return value || key
    },
    [language],
  )

  return { t }
}
