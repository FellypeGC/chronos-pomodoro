import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import pt from "./locales/pt/translation.json";
import en from "./locales/en/translation.json";

const resources = {
  en: { translation: en },
  pt: { translation: pt },
};

const MIGRATION_KEY = "langMigratedToEn";
if (!localStorage.getItem(MIGRATION_KEY)) {
  const storedLang = localStorage.getItem("i18nextLng");
  if (storedLang && storedLang.startsWith("pt")) {
    localStorage.removeItem("i18nextLng");
  }
  localStorage.setItem(MIGRATION_KEY, "true");
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],
    load: "languageOnly",
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: { useSuspense: false },
  });

export default i18n;
