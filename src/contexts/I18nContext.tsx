'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { 
  translations, 
  type Language, 
  type TranslationKeys, 
  defaultLanguage,
  getTranslation,
  interpolateTranslation
} from '../../translations';

// Context interface
interface I18nContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
}

// Create the context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider props interface
interface I18nProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

// Provider component
export function I18nProvider({ children, initialLanguage = defaultLanguage }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage);

  // Toggle between English and Spanish
  const toggleLanguage = useCallback(() => {
    setLanguage(current => current === 'en' ? 'es' : 'en');
  }, []);

  // Translation function
  const t = useCallback((key: string, variables?: Record<string, string | number>) => {
    const currentTranslations = translations[language] as TranslationKeys;
    const translation = getTranslation(currentTranslations, key);
    
    // If variables are provided, interpolate them
    if (variables && Object.keys(variables).length > 0) {
      return interpolateTranslation(translation, variables);
    }
    
    return translation;
  }, [language]);

  const contextValue: I18nContextType = {
    language,
    toggleLanguage,
    t,
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook to use the I18n context
export function useI18n(): I18nContextType {
  const context = useContext(I18nContext);
  
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  
  return context;
}

// Export the context for testing purposes
export { I18nContext };