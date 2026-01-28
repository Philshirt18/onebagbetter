'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { createCollectionEntry } from '@/lib/api';
import { isValidAmount, isValidUnit, getErrorMessage } from '@/lib/utils';
import { useTranslation } from '@/hooks/useTranslation';
import type { FormErrors } from '@/types';

interface CollectionEntryFormProps {
  onSuccess?: (entry: any) => void;
  onCancel?: () => void;
  className?: string;
}

export default function CollectionEntryForm({
  onSuccess,
  onCancel,
  className,
}: CollectionEntryFormProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    amount: '',
    unit: 'bags' as 'bags' | 'kg' | 'lbs',
    location: '',
    name: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastEntry, setLastEntry] = useState<any>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validate amount
    if (!formData.amount.trim()) {
      newErrors.amount = t('form.validation.amountRequired');
    } else if (!isValidAmount(formData.amount)) {
      newErrors.amount = t('form.validation.amountInvalid');
    }

    // Validate unit
    if (!isValidUnit(formData.unit)) {
      newErrors.unit = t('form.validation.unitInvalid');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const entry = await createCollectionEntry({
        amount: parseFloat(formData.amount),
        unit: formData.unit,
        location: formData.location.trim() || undefined,
        name: formData.name.trim() || undefined,
      });

      // Reset form
      setFormData({
        amount: '',
        unit: 'bags',
        location: '',
        name: '',
      });

      // Store entry for social sharing
      setLastEntry(entry);

      // Show success message
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 8000); // Longer to show sharing options

      onSuccess?.(entry);
    } catch (error) {
      setErrors({
        general: getErrorMessage(error),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFormData(prev => ({ ...prev, amount: value }));
      // Clear amount error when user starts typing
      if (errors.amount) {
        setErrors(prev => ({ ...prev, amount: undefined }));
      }
    }
  };

  const handleUnitChange = (unit: 'bags' | 'kg' | 'lbs') => {
    setFormData(prev => ({ ...prev, unit }));
    if (errors.unit) {
      setErrors(prev => ({ ...prev, unit: undefined }));
    }
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, location: e.target.value }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, name: e.target.value }));
  };

  // Social sharing functions
  const generateShareText = () => {
    if (!lastEntry) return '';
    const location = lastEntry.location ? ` in ${lastEntry.location}` : '';
    const name = lastEntry.name ? ` by ${lastEntry.name}` : '';
    return t('form.shareText', {
      amount: lastEntry.amount,
      unit: lastEntry.unit,
      location,
      name
    });
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(generateShareText());
    const url = encodeURIComponent(window.location.origin);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  };

  const shareOnInstagram = () => {
    // Open Instagram profile and copy text to clipboard
    const text = generateShareText();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        // Open Instagram profile in new tab
        window.open('https://www.instagram.com/onebagbetter/', '_blank');
        alert(t('form.success.shareTitle') + ' ' + t('form.success.hashtag'));
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        window.open('https://www.instagram.com/onebagbetter/', '_blank');
        alert(t('form.success.shareTitle') + ' ' + t('form.success.hashtag'));
      });
    } else {
      // Just open Instagram if clipboard not available
      window.open('https://www.instagram.com/onebagbetter/', '_blank');
    }
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.origin);
    const quote = encodeURIComponent(generateShareText());
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`;
    window.open(facebookUrl, '_blank', 'width=550,height=420');
  };

  return (
    <div className={cn('card-adventure p-4 sm:p-6 max-w-md mx-auto', className)}>
      <h2 className="text-display text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
        {t('form.title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Success Message with Social Sharing */}
        {showSuccess && (
          <div className="bg-lime-50 border border-lime-200 rounded-lg p-3 sm:p-4 space-y-3 sm:space-y-4">
            <div className="flex items-center">
              <div className="text-lime-600 text-lg sm:text-xl mr-3">🌱</div>
              <div>
                <p className="text-lime-800 font-medium text-sm sm:text-base">{t('form.success.title')}</p>
                <p className="text-lime-700 text-xs sm:text-sm">{t('form.success.description')}</p>
              </div>
            </div>
            
            {/* Social Sharing Section */}
            <div className="border-t border-lime-200 pt-3 sm:pt-4">
              <p className="text-lime-800 font-medium text-xs sm:text-sm mb-3">
                {t('form.success.shareTitle')}
              </p>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={shareOnTwitter}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-blue-500 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-600 transition-colors"
                >
                  🐦 <span className="hidden xs:inline">{t('form.success.twitter')}</span>
                </button>
                <button
                  onClick={shareOnInstagram}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs sm:text-sm rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                >
                  <img src="/instagram-icon.png" alt="Instagram" className="w-4 h-4" />
                  <span className="hidden xs:inline">{t('form.success.instagram')}</span>
                </button>
                <button
                  onClick={shareOnFacebook}
                  className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-blue-600 text-white text-xs sm:text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  📘 <span className="hidden xs:inline">{t('form.success.facebook')}</span>
                </button>
              </div>
              <p className="text-lime-600 text-xs mt-2">
                {t('form.success.hashtag')}
              </p>
            </div>
          </div>
        )}

        {/* General Error */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-600 text-sm">{errors.general}</p>
          </div>
        )}

        {/* Amount Input */}
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.labels.amount')}
          </label>
          <div className="relative">
            <input
              id="amount"
              type="text"
              value={formData.amount}
              onChange={handleAmountChange}
              placeholder={t('form.placeholders.amount')}
              className={cn(
                'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors text-gray-900 placeholder-gray-500',
                errors.amount
                  ? 'border-red-300 bg-red-50'
                  : 'border-gray-300 bg-white hover:border-gray-400'
              )}
              disabled={isSubmitting}
            />
          </div>
          {errors.amount && (
            <p className="mt-1 text-sm text-red-600">{errors.amount}</p>
          )}
        </div>

        {/* Unit Selector */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.labels.unit')}
          </label>
          <div className="flex gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => handleUnitChange('bags')}
              className={cn(
                'flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border-2 font-medium transition-all duration-200 text-sm sm:text-base',
                formData.unit === 'bags'
                  ? 'border-lime-500 bg-lime-50 text-lime-700'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              )}
              disabled={isSubmitting}
            >
              <span className="sm:hidden">{t('form.units.bagsShort')}</span>
              <span className="hidden sm:inline">{t('form.units.bags')}</span>
            </button>
            <button
              type="button"
              onClick={() => handleUnitChange('kg')}
              className={cn(
                'flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border-2 font-medium transition-all duration-200 text-sm sm:text-base',
                formData.unit === 'kg'
                  ? 'border-lime-500 bg-lime-50 text-lime-700'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              )}
              disabled={isSubmitting}
            >
              <span className="sm:hidden">{t('form.units.kgShort')}</span>
              <span className="hidden sm:inline">{t('form.units.kg')}</span>
            </button>
            <button
              type="button"
              onClick={() => handleUnitChange('lbs')}
              className={cn(
                'flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg border-2 font-medium transition-all duration-200 text-sm sm:text-base',
                formData.unit === 'lbs'
                  ? 'border-lime-500 bg-lime-50 text-lime-700'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              )}
              disabled={isSubmitting}
            >
              <span className="sm:hidden">{t('form.units.lbsShort')}</span>
              <span className="hidden sm:inline">{t('form.units.lbs')}</span>
            </button>
          </div>
          {errors.unit && (
            <p className="mt-1 text-sm text-red-600">{errors.unit}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            {t('form.tips.ruleOfThumb')}
          </p>
        </div>

        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.labels.name')}
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleNameChange}
            placeholder={t('form.placeholders.name')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors bg-white hover:border-gray-400 text-gray-900 placeholder-gray-500"
            disabled={isSubmitting}
            maxLength={100}
          />
          <p className="mt-1 text-xs text-gray-500">
            {t('form.tips.nameCredit')}
          </p>
        </div>

        {/* Location Input */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.labels.location')}
          </label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={handleLocationChange}
            placeholder={t('form.placeholders.location')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-colors bg-white hover:border-gray-400 text-gray-900 placeholder-gray-500"
            disabled={isSubmitting}
            maxLength={255}
          />
          <p className="mt-1 text-xs text-gray-500">
            {t('form.tips.locationShare')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed order-2 sm:order-1"
            >
              {t('form.buttons.cancel')}
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'flex-1 btn-adventure py-3 px-4 font-medium disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2',
              isSubmitting && 'animate-pulse'
            )}
          >
            {isSubmitting ? t('form.buttons.submitting') : t('form.buttons.submit')}
          </button>
        </div>
      </form>

      {/* Helper Text */}
      <p className="mt-4 text-xs text-gray-500 text-center leading-relaxed">
        {t('form.helperText')}<br/>
        <span className="text-lime-600 font-medium">{t('form.helperTextInstagram')}</span>
      </p>
    </div>
  );
}