import { en, type TranslationKeys } from './en';
import { es } from './es';

// Supported languages
export type Language = 'en' | 'es';

// Translation type definitions
export type { TranslationKeys };

// Translation objects
export const translations = {
  en,
  es,
} as const;

// Available languages with display names
export const availableLanguages: Record<Language, { name: string; nativeName: string }> = {
  en: {
    name: 'English',
    nativeName: 'English',
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
  },
};

// Default language
export const defaultLanguage: Language = 'en';

// Helper function to get translation by key path
export function getTranslation(
  translations: TranslationKeys,
  key: string
): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Return the key itself if translation not found
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Helper function to interpolate variables in translation strings
export function interpolateTranslation(
  template: string,
  variables: Record<string, string | number>
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return variables[key]?.toString() || match;
  });
}

// Validation function to check if all keys exist in both languages
export function validateTranslations(): {
  isValid: boolean;
  missingKeys: { language: Language; keys: string[] }[];
} {
  const missingKeys: { language: Language; keys: string[] }[] = [];
  
  // Get all keys from English (reference language)
  const getAllKeys = (obj: any, prefix = ''): string[] => {
    const keys: string[] = [];
    for (const key in obj) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        keys.push(...getAllKeys(obj[key], fullKey));
      } else {
        keys.push(fullKey);
      }
    }
    return keys;
  };
  
  const englishKeys = getAllKeys(en);
  
  // Check each language for missing keys
  Object.entries(translations).forEach(([lang, translation]) => {
    const missing: string[] = [];
    
    englishKeys.forEach(key => {
      const value = getTranslation(translation as TranslationKeys, key);
      if (value === key) {
        // Translation not found
        missing.push(key);
      }
    });
    
    if (missing.length > 0) {
      missingKeys.push({
        language: lang as Language,
        keys: missing,
      });
    }
  });
  
  return {
    isValid: missingKeys.length === 0,
    missingKeys,
  };
}

// Export individual translation objects
export { en, es };