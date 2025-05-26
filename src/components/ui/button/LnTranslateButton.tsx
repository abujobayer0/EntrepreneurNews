"use client";

import React, { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18next, { languageResources } from "@/services/i18next";
import languageList from "@/services/languageList.json";
import { Button } from "./Button";

const LANGUAGE_KEY = "user-language";

const LnTranslateButton: React.FC = () => {
  const { i18n } = useTranslation();
  const currentCode = i18n.language || "en";

  const availableLanguages = useMemo(() => Object.keys(languageResources), []);

  const filteredLanguageList = useMemo(
    () => languageList.filter((lang) => availableLanguages.includes(lang.code)),
    [availableLanguages]
  );

  const { nextLangCode, nextLangLabel } = useMemo(() => {
    const currentIndex = filteredLanguageList.findIndex(
      (lang) => lang.code === currentCode
    );
    const nextIndex = (currentIndex + 1) % filteredLanguageList.length;
    const nextLang = filteredLanguageList[nextIndex];

    return {
      nextLangCode: nextLang?.code,
      nextLangLabel: nextLang?.label || "Language",
    };
  }, [currentCode, filteredLanguageList]);

  const changeLanguage = useCallback(async (langCode: string) => {
    await i18next.changeLanguage(langCode);
    localStorage.setItem(LANGUAGE_KEY, langCode); // Save to browser storage
  }, []);

  const toggleLanguage = useCallback(() => {
    if (nextLangCode) {
      changeLanguage(nextLangCode);
    }
  }, [nextLangCode, changeLanguage]);

  return (
    <Button
      onClick={toggleLanguage}
      className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
      title={nextLangLabel}
    />
  );
};

export default LnTranslateButton;
