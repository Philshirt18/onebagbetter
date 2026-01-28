import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { I18nProvider } from '../../contexts/I18nContext';
import { useTranslation } from '../useTranslation';

// Test component that uses the useTranslation hook
function TestComponent() {
  const { t, language } = useTranslation();
  
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <span data-testid="translation">{t('navigation.home')}</span>
    </div>
  );
}

describe('useTranslation', () => {
  it('should provide translation function and current language', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('Home');
  });

  it('should work with Spanish language', () => {
    render(
      <I18nProvider initialLanguage="es">
        <TestComponent />
      </I18nProvider>
    );
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('es');
    expect(screen.getByTestId('translation')).toHaveTextContent('Inicio');
  });

  it('should handle translation with variables', () => {
    function TestComponentWithVariables() {
      const { t } = useTranslation();
      
      return (
        <span data-testid="translation-with-vars">
          {t('activity.collected', { amount: '3 bags' })}
        </span>
      );
    }

    render(
      <I18nProvider>
        <TestComponentWithVariables />
      </I18nProvider>
    );
    
    expect(screen.getByTestId('translation-with-vars')).toHaveTextContent('Collected 3 bags');
  });

  it('should throw error when used outside I18nProvider', () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useI18n must be used within an I18nProvider');
    
    consoleSpy.mockRestore();
  });
});