import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { enUSTranslation } from "./translations/en-US";
import { thTHTranslation } from "./translations/th-TH";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'enUS',
    resources: {
      enUS: {
        translation: enUSTranslation
      },
      thTH: {
        translation: thTHTranslation
      }
    }
  });

export default i18n;