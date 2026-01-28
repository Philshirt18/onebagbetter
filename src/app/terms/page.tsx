'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useI18n } from '@/contexts/I18nContext';
import { translations } from '../../../translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function TermsPage() {
  const { t } = useTranslation();
  const { language } = useI18n();
  
  // Access arrays directly from translations
  const currentTranslations = translations[language];
  
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      {/* Language Switcher - positioned in top-left */}
      <div className="fixed top-6 left-6 z-50">
        <LanguageSwitcher />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-display text-3xl font-bold text-gray-800 mb-8 text-center">
            {t('terms.title')}
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>{t('terms.lastUpdated')}</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.about.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.about.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.whatWeCollect.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.whatWeCollect.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.terms.whatWeCollect.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600 mb-4">
                <strong>{t('terms.whatWeCollect.dontCollect')}</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.howWeUse.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.howWeUse.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.terms.howWeUse.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.dataStorage.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.dataStorage.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.socialMedia.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.socialMedia.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.terms.socialMedia.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.responsibilities.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.responsibilities.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.terms.responsibilities.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.disclaimer.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.disclaimer.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.terms.disclaimer.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.changes.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.changes.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('terms.contact.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('terms.contact.description')} 
                <a href="https://www.instagram.com/onebagbetter/" target="_blank" rel="noopener noreferrer" 
                   className="text-lime-600 hover:text-lime-700 font-medium">
                  @onebagbetter
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <a 
              href="/" 
              className="btn-adventure inline-block px-6 py-3 font-medium"
            >
              {t('terms.backButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}