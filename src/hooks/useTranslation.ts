import { useI18n } from '../contexts/I18nContext';
import type { Language } from '../../translations';

// Hook interface
interface UseTranslationReturn {
  t: (key: string, variables?: Record<string, string | number>) => string;
  language: Language;
}

/**
 * Hook for consuming translations in components
 * 
 * @returns Object containing translation function and current language
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { t, language } = useTranslation();
 *   
 *   return (
 *     <div>
 *       <h1>{t('navigation.home')}</h1>
 *       <p>{t('form.shareText', { amount: '5', unit: 'bags' })}</p>
 *       <span>Current language: {language}</span>
 *     </div>
 *   );
 * }
 * ```
 */
export function useTranslation(): UseTranslationReturn {
  const { t, language } = useI18n();
  
  return {
    t,
    language,
  };
}