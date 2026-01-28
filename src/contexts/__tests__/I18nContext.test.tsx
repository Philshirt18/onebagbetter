import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { I18nProvider, useI18n } from '../I18nContext';

// Test component that uses the I18n context
function TestComponent() {
  const { language, toggleLanguage, t } = useI18n();
  
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <span data-testid="translation">{t('navigation.home')}</span>
      <button data-testid="toggle-button" onClick={toggleLanguage}>
        Toggle Language
      </button>
    </div>
  );
}

describe('I18nContext', () => {
  it('should provide default language as English', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('Home');
  });

  it('should accept initial language prop', () => {
    render(
      <I18nProvider initialLanguage="es">
        <TestComponent />
      </I18nProvider>
    );
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('es');
    expect(screen.getByTestId('translation')).toHaveTextContent('Inicio');
  });

  it('should toggle between English and Spanish', () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );
    
    // Initially English
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('Home');
    
    // Toggle to Spanish
    act(() => {
      screen.getByTestId('toggle-button').click();
    });
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('es');
    expect(screen.getByTestId('translation')).toHaveTextContent('Inicio');
    
    // Toggle back to English
    act(() => {
      screen.getByTestId('toggle-button').click();
    });
    
    expect(screen.getByTestId('current-language')).toHaveTextContent('en');
    expect(screen.getByTestId('translation')).toHaveTextContent('Home');
  });

  it('should handle translation with variables', () => {
    function TestComponentWithVariables() {
      const { t } = useI18n();
      
      return (
        <span data-testid="translation-with-vars">
          {t('form.shareText', { amount: '5', unit: 'bags', location: ' in Central Park', name: ' by John' })}
        </span>
      );
    }

    render(
      <I18nProvider>
        <TestComponentWithVariables />
      </I18nProvider>
    );
    
    expect(screen.getByTestId('translation-with-vars')).toHaveTextContent(
      'Just collected 5 bags of trash in Central Park by John! 🌱 Join the movement to clean up our planet! #onebagbetter'
    );
  });

  it('should return key if translation not found', () => {
    function TestComponentWithMissingKey() {
      const { t } = useI18n();
      
      return (
        <span data-testid="missing-translation">
          {t('nonexistent.key')}
        </span>
      );
    }

    // Mock console.warn to avoid noise in tests
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});

    render(
      <I18nProvider>
        <TestComponentWithMissingKey />
      </I18nProvider>
    );
    
    expect(screen.getByTestId('missing-translation')).toHaveTextContent('nonexistent.key');
    expect(consoleSpy).toHaveBeenCalledWith('Translation key not found: nonexistent.key');
    
    consoleSpy.mockRestore();
  });

  it('should throw error when used outside provider', () => {
    // Mock console.error to avoid noise in tests
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useI18n must be used within an I18nProvider');
    
    consoleSpy.mockRestore();
  });
});