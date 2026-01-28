'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useI18n } from '@/contexts/I18nContext';
import { availableLanguages } from '../../translations';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
}

/**
 * Language switcher component that provides a toggle interface for switching between languages.
 * Features:
 * - Toggle/switch UI with visual indication of current language
 * - Accessible with proper ARIA labels
 * - Integrates with I18n context for language switching
 * - Styled to match existing UI design patterns
 */
export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { t, language } = useTranslation();
  const { toggleLanguage } = useI18n();

  // Get the current and other language info
  const currentLang = availableLanguages[language];
  const otherLanguage = language === 'en' ? 'es' : 'en';
  const otherLang = availableLanguages[otherLanguage];

  const handleToggle = () => {
    toggleLanguage();
  };

  return (
    <div className={cn('flex items-center', className)}>
      {/* Language toggle button */}
      <button
        onClick={handleToggle}
        className={cn(
          'pill-nav px-4 py-2 flex items-center gap-2 transition-all duration-200',
          'hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2',
          'text-sm font-medium text-gray-700 hover:text-lime-600'
        )}
        aria-label={t('languageSwitcher.switchTo', { language: otherLang.nativeName })}
        title={t('languageSwitcher.switchTo', { language: otherLang.nativeName })}
      >
        {/* Language indicator */}
        <div className="flex items-center gap-1">
          {/* Current language flag/indicator */}
          <span className="text-base" role="img" aria-label={currentLang.name}>
            {language === 'en' ? '🇺🇸' : '🇪🇸'}
          </span>
          
          {/* Language code */}
          <span className="font-semibold uppercase tracking-wide">
            {language}
          </span>
        </div>

        {/* Toggle arrow/indicator */}
        <div className="flex items-center">
          <svg
            className="w-4 h-4 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </div>
      </button>

      {/* Screen reader only current language indicator */}
      <span className="sr-only">
        {t('languageSwitcher.currentLanguage', { language: currentLang.nativeName })}
      </span>
    </div>
  );
}