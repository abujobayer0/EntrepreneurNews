import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import bn from "../locales/bn.json";

export const languageResources = {
  en: { translation: en },
  bn: { translation: bn },
};

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: languageResources,
  interpolation: {
    escapeValue: false, // react already escapes values
  },
});

export default i18next;
