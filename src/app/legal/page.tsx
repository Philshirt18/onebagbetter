'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { useI18n } from '@/contexts/I18nContext';
import { translations } from '../../../translations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function LegalPage() {
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
            {t('legal.title')}
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>{t('legal.lastUpdated')}</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="bg-lime-50 border border-lime-200 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-bold text-lime-800 mb-2">{t('legal.environmentalInitiative')}</h2>
              <p className="text-lime-700">
                {t('legal.environmentalDescription')}
              </p>
            </div>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('legal.operatorInfo.title')}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>{t('legal.operatorInfo.operator')}</strong> Philipp Schaefer
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>{t('legal.operatorInfo.basedIn')}</strong> Almayate, Spain
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>{t('legal.operatorInfo.email')}</strong> appfactorymalaga@gmail.com
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('legal.purpose.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('legal.purpose.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                {currentTranslations.legal.purpose.points.map((point: string, index: number) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <p className="text-gray-600">
                {t('legal.purpose.noCommercial')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('legal.law.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('legal.law.description')}
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>LSSI-CE</strong> ({t('legal.law.lssi')})</li>
                <li><strong>GDPR</strong> ({t('legal.law.gdpr')})</li>
                <li><strong>Spanish Data Protection Law</strong> ({t('legal.law.spanish')})</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('legal.intellectualProperty.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('legal.intellectualProperty.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('legal.liability.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('legal.liability.description')}
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('legal.contact.title')}</h2>
              <p className="text-gray-600 mb-4">
                {t('legal.contact.description')}
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> appfactorymalaga@gmail.com<br />
                  <strong>{t('legal.contact.instagram')}</strong> 
                  <a href="https://www.instagram.com/onebagbetter/" target="_blank" rel="noopener noreferrer" 
                     className="text-lime-600 hover:text-lime-700 font-medium ml-1">
                    @onebagbetter
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t('legal.relatedDocs.title')}</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/privacy" 
                  className="text-lime-600 hover:text-lime-700 font-medium underline"
                >
                  {t('legal.relatedDocs.privacy')}
                </a>
                <a 
                  href="/terms" 
                  className="text-lime-600 hover:text-lime-700 font-medium underline"
                >
                  {t('legal.relatedDocs.terms')}
                </a>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <a 
              href="/" 
              className="btn-adventure inline-block px-6 py-3 font-medium"
            >
              {t('legal.backButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}