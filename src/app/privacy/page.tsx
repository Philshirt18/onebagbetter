'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useI18n } from '@/contexts/I18nContext';
import { translations } from '../../../translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function PrivacyPage() {
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
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>{t('privacy.lastUpdated')}</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="bg-lime-50 border border-lime-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-lime-800 mb-2">{t('privacy.promise.title')}</h2>
              <p className="text-lime-700">
                <strong>{t('privacy.promise.description')}</strong>
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.infoCollected.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.infoCollected.description')}
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacy.infoCollected.doCollect')}</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.infoCollected.doCollectItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacy.infoCollected.dontCollect')}</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.infoCollected.dontCollectItems.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.howWeUse.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.howWeUse.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.howWeUse.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.dataStorage.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.dataStorage.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.dataStorage.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.dataSharing.title')}</h2>
              <p className="text-gray-600 mb-4">
                <strong>{t('privacy.dataSharing.noSharing')}</strong>
              </p>
              <p className="text-gray-600 mb-4">
                {t('privacy.dataSharing.onlySharing')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.dataSharing.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.socialMedia.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.socialMedia.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.socialMedia.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.cookies.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.cookies.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.cookies.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.rights.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.rights.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.privacy.rights.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.children.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.children.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.changes.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.changes.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('privacy.contact.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('privacy.contact.description')} 
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
              {t('privacy.backButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}