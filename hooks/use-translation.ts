"use client";

import { useCallback } from "react";
import { useLanguage } from "./use-language";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      contact: "Contact RNE",
    },
    hero: {
      title: "Check Your Company Name with Ease",
      subtitle:
        "Instantly verify availability, ensure compliance, and get suggestions in English, French, or Arabic.",
      cta: "Start Chatting",
    },
    features: {
      check: {
        title: "Name Availability",
        description:
          "Quickly check if your desired company name is available in the registry.",
      },
      compliance: {
        title: "Legal Compliance",
        description:
          "Ensure your company name meets all legal requirements and regulations.",
      },
      multilingual: {
        title: "Multilingual Support",
        description:
          "Get assistance in English, French, or Arabic for your convenience.",
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
      // 👇 Nouvelles clés pour l'interface de choix
      choice: {
        title: "How can I help you today?",
        subtitle: "Choose an option below to get started.",
        option1: {
          title: "Check a Company Name",
          description: "Search if a name is available in the RNE registry.",
        },
        option2: {
          title: "Suggest an Idea & Get Names",
          description: "Discuss an idea to get relevant name suggestions.",
        },
        back: "Back to Home",
      },
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact RNE",
      built: "Built with",
      hackathon: "for Hack4Justice 2025",
      rights: "All rights reserved.",
    },
    about: {
      title: "about us ",
      description:
        "The National Business Register Centre (CRNE) was created under Article 4 of Law No. 2018-52 of 29 November 2018, relating to the national business register. It is organised in accordance with Decree No. 52-2019 relating to the administrative and financial organisation of the National Business Register Centre. The CNRE is a Non-Administrative Public Establishment (EPNA) with legal personality and financial and administrative autonomy under the supervision of the Presidency of the Government.",
      title1: "Assignment",
      mission:
        "Instantly check name availability, ensure compliance, and explore relevant suggestions in French, English, or Arabic ",
      additional_title: "Learn More",
      additional_description:
        "We use the latest technologies to ensure a smooth and intuitive user experience.",
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
        description:
          "Vérifiez rapidement si le nom d'entreprise souhaité est disponible dans le registre.",
      },
      compliance: {
        title: "Conformité Légale",
        description:
          "Assurez-vous que votre nom d'entreprise respecte toutes les exigences légales.",
      },
      multilingual: {
        title: "Support Multilingue",
        description:
          "Obtenez de l'aide en anglais, français ou arabe pour votre commodité.",
      },
    },
    chat: {
      title: "Assistant RNE",
      subtitle: "Demandez-moi la disponibilité des noms d'entreprise",
      welcome: "Bonjour ! Je suis ici pour vous aider à vérifier la disponibilité des noms d'entreprise et à assurer la conformité légale. Quel nom d'entreprise souhaitez-vous vérifier ?",
      placeholder: "Tapez votre message ici...",
      back: "Retour à l'accueil",
      error:
        "Désolé, il y a eu une erreur lors du traitement de votre demande.",
      redirect: "Pour plus d'aide, veuillez visiter :",
      // 👇 Interface de choix - FR
      choice: {
        title: "Comment puis-je vous aider ?",
        subtitle: "Choisissez une option ci-dessous pour commencer.",
        option1: {
          title: "Vérifier un Nom d'Entreprise",
          description:
            "Rechercher si un nom est disponible dans le registre RNE.",
        },
        option2: {
          title: "Suggérer une Idée & Obtenir des Noms",
          description:
            "Discutez d'une idée pour obtenir des suggestions de noms.",
        },
        back: "Retour",
      },
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
      title: "À propos de nous",
      description:
        "le Centre National du Registre des Entreprises (CRNE) a été créé en vertu de l'article 4 de la loi N°2018-52 du 29 novembre 2018, relative au registre national des entreprises. Il est organisé conformément au décret N°52-2019 relatif à l'organisation administrative et financière du CRNE. Le CNRE est un Établissement Public Non Administratif (EPNA) doté de la personnalité morale et de l'autonomie financière et administrative sous tutelle de la Présidence du Gouvernement.",
      title1: "Mission",
      mission:
        "Vérifiez en un instant la disponibilité d’un nom, assurez sa conformité, et explorez des suggestions pertinentes en français, anglais ou arabe ",
      additional_title: "En savoir plus",
      additional_description:
        "Nous utilisons les dernières technologies pour garantir une expérience utilisateur fluide et intuitive.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "حول",
      contact: "اتصل بـ RNE",
    },
    hero: {
      title: "تحقق من اسم شركتك بسهولة",
      subtitle:
        "تحقق فوراً من التوفر، وتأكد من الامتثال، واحصل على اقتراحات باللغة الإنجليزية أو الفرنسية أو العربية.",
      cta: "ابدأ المحادثة",
    },
    features: {
      check: {
        title: "توفر الاسم",
        description: "تحقق بسرعة من توفر اسم الشركة المرغوب في السجل.",
      },
      compliance: {
        title: "الامتثال القانوني",
        description:
          "تأكد من أن اسم شركتك يلبي جميع المتطلبات واللوائح القانونية.",
      },
      multilingual: {
        title: "دعم متعدد اللغات",
        description:
          "احصل على المساعدة باللغة الإنجليزية أو الفرنسية أو العربية لراحتك.",
      },
    },
    chat: {
      title: "مساعد RNE",
      subtitle: "اسألني عن توفر أسماء الشركات",
      welcome:
        "مرحبًا! أنا هنا لمساعدتك في التحقق من توفر أسماء الشركات وضمان الامتثال القانوني. ما اسم الشركة الذي تريد التحقق منه؟",
      placeholder: "اكتب اسمك هنا...",
      back: "العودة للرئيسية",
      error: "عذراً، حدث خطأ في معالجة طلبك.",
      redirect: "للمزيد من المساعدة، يرجى زيارة:",
      // 👇 Interface de choix - AR
      choice: {
        title: "كيف يمكنني مساعدتك؟",
        subtitle: "اختر خياراً أدناه للبدء.",
        option1: {
          title: "التحقق من اسم الشركة",
          description:
            "ابحث إذا كان الاسم متاحًا في السجل الوطني للمؤسسات (RNE).",
        },
        option2: {
          title: "اقترح فكرة واحصل على أسماء",
          description: "ناقش فكرتك للحصول على اقتراحات بأسماء مناسبة.",
        },
        back: "العودة إلى الصفحة الرئيسية",
      },
    },
    footer: {
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "اتصل بـ RNE",
      built: "مبني بـ",
      hackathon: "لـ Hack4Justice 2025",
      rights: "جميع الحقوق محفوظة.",
    },
    about: {
      title: "معلومات عنا",
      description:
        "نحن فريق شغوف بالتكنولوجيا، مصمم على إنشاء حلول مبتكرة لتحسين الوصول إلى المعلومات والاتصالات",
      title1: "مهمتنا",
      mission:
        "التحقق الفوري من التوفر، والتأكد من الامتثال، والحصول على اقتراحات باللغة الإنجليزية أو الفرنسية أو العربية ",
      additional_title: "مزيد من المعلومات",
      additional_description:
        "نحن نستخدم أحدث التقنيات لضمان تجربة مستخدم سلسة وسهلة",
    },
  },
};

export function useTranslation() {
  const { language } = useLanguage();

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      let value: any = translations[language];

      for (const k of keys) {
        value = value?.[k];
      }

      return value || key;
    },
    [language]
  );

  return { t };
}
