import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Function to handle language change
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    window.location.reload();
  };

  return (
    <div className="language-switcher">
      <span
        className={i18n.language === "ar" ? "active-language" : "language-link"}
        onClick={() => changeLanguage("ar")}
      >
        العربية
      </span>

      <span className="separator">/</span>

      <span
        className={i18n.language === "en" ? "active-language" : "language-link"}
        onClick={() => changeLanguage("en")}
      >
        English
      </span>
    </div>
  );
};

export default LanguageSwitcher;
