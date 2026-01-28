import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';
import { I18nProvider } from '../../contexts/I18nContext';

// Mock the utils module
jest.mock('../../lib/utils', () => ({
  cn: (...classes: any[]) => classes.filter(Boolean).join(' ')
}));

const NavigationWithProvider = (props: any) => (
  <I18nProvider>
    <Navigation {...props} />
  </I18nProvider>
);

describe('Navigation Component', () => {
  beforeEach(() => {
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', {
      value: 0,
      writable: true
    });
  });

  it('should render navigation items with English translations by default', () => {
    render(<NavigationWithProvider />);
    
    // Check that navigation items are rendered with English translations
    // Use getAllByText since both desktop and mobile versions are rendered
    expect(screen.getAllByText('Home')).toHaveLength(2);
    expect(screen.getAllByText('Add Entry')).toHaveLength(2);
    expect(screen.getAllByText('Community')).toHaveLength(2);
    expect(screen.getAllByText('Stats')).toHaveLength(2);
  });

  it('should render navigation items with Spanish translations when language is Spanish', () => {
    render(
      <I18nProvider initialLanguage="es">
        <Navigation />
      </I18nProvider>
    );
    
    // Check that navigation items are rendered with Spanish translations
    expect(screen.getAllByText('Inicio')).toHaveLength(2);
    expect(screen.getAllByText('Agregar Entrada')).toHaveLength(2);
    expect(screen.getAllByText('Comunidad')).toHaveLength(2);
    expect(screen.getAllByText('Estadísticas')).toHaveLength(2);
  });

  it('should have correct aria-label for toggle menu button', () => {
    render(<NavigationWithProvider />);
    
    // Find the mobile menu toggle button
    const toggleButton = screen.getByLabelText('Toggle menu');
    expect(toggleButton).toBeInTheDocument();
  });

  it('should call onNavigate when navigation item is clicked', () => {
    const mockOnNavigate = jest.fn();
    render(<NavigationWithProvider onNavigate={mockOnNavigate} />);
    
    // Click on the first Home navigation item (desktop version)
    fireEvent.click(screen.getAllByText('Home')[0]);
    expect(mockOnNavigate).toHaveBeenCalledWith('home');
  });

  it('should highlight active navigation item', () => {
    render(<NavigationWithProvider currentPage="stats" />);
    
    // The Stats buttons should have active styling
    const statsButtons = screen.getAllByText('Stats');
    statsButtons.forEach(button => {
      const buttonElement = button.closest('button');
      expect(buttonElement).toHaveClass('text-lime-600', 'font-semibold', 'bg-lime-50');
    });
  });

  it('should open and close mobile menu', () => {
    render(<NavigationWithProvider />);
    
    // Find the mobile menu toggle button
    const toggleButton = screen.getByLabelText('Toggle menu');
    
    // Initially menu should be closed (aria-expanded="false")
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    
    // Click to open menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
    
    // Click to close menu
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });
});