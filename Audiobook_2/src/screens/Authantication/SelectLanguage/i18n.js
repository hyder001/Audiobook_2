
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {az,ru} from '../../../../src';


i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: az,
    ru:ru,
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;