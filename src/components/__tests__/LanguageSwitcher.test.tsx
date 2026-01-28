import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { I18nProvider } from '../../contexts/I18nContext';
import LanguageSwitcher from '../LanguageSwitcher';

// Test component wrapper with I18n provider
function TestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      {children}
    </I18nProvider>
  );
}

describe('LanguageSwitcher', () => {
  it('should render with default English language', () => {
    render(
      <TestWrapper>
        <LanguageSwitcher />
      </TestWrapper>
    );
    
    // Check if the component renders
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
    // Check if it shows en for English (lowercase as per implementation)
    expect(screen.getByText('en')).toBeInTheDocument();
    
    // Check if it has proper accessibility attributes
    expect(button).toHaveAttribute('aria-label');
    expect(button).toHaveAttribute('title');
  });

  it('should toggle language when clicked', () => {
    render(
      <TestWrapper>
        <LanguageSwitcher />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    
    // Initially should show en
    expect(screen.getByText('en')).toBeInTheDocument();
    
    // Click to toggle to Spanish
    act(() => {
      button.click();
    });
    
    // Should now show es
    expect(screen.getByText('es')).toBeInTheDocument();
    
    // Click to toggle back to English
    act(() => {
      button.click();
    });
    
    // Should show en again
    expect(screen.getByText('en')).toBeInTheDocument();
  });

  it('should have proper accessibility features', () => {
    render(
      <TestWrapper>
        <LanguageSwitcher />
      </TestWrapper>
    );
    
    const button = screen.getByRole('button');
    
    // Should have aria-label
    expect(button).toHaveAttribute('aria-label');
    
    // Should have title attribute
    expect(button).toHaveAttribute('title');
    
    // Should have screen reader only text
    expect(screen.getByText(/Current language:/)).toBeInTheDocument();
  });

  it('should accept custom className', () => {
    render(
      <TestWrapper>
        <LanguageSwitcher className="custom-class" />
      </TestWrapper>
    );
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('custom-class');
  });
});