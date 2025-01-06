import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import "./App.css";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ar"], // English and Arabic
    fallbackLng: "en", // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Translation file path
    },
  });

export default i18n;
