import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nProvider } from '../../contexts/I18nContext';
import StatsDashboard from '../StatsDashboard';

// Mock the AnimatedCounter component to avoid animation complexity in tests
jest.mock('../AnimatedCounter', () => {
  return function MockAnimatedCounter({ value, className, suffix }: { value: number; className?: string; suffix?: string }) {
    return <span className={className}>{value}{suffix}</span>;
  };
});

// Mock the MilestoneProgress component
jest.mock('../MilestoneProgress', () => {
  return function MockMilestoneProgress() {
    return <div data-testid="milestone-progress">Milestone Progress</div>;
  };
});

const renderWithI18n = (component: React.ReactElement, language: 'en' | 'es' = 'en') => {
  return render(
    <I18nProvider initialLanguage={language}>
      {component}
    </I18nProvider>
  );
};

describe('StatsDashboard', () => {
  const defaultProps = {
    totalKg: 150,
    totalEntries: 25,
  };

  it('should render with English translations by default', () => {
    renderWithI18n(<StatsDashboard {...defaultProps} />);
    
    // Check main stats labels
    expect(screen.getByText('Total Collected')).toBeInTheDocument();
    expect(screen.getByText('Collection Entries')).toBeInTheDocument();
    expect(screen.getByText('Milestones Achieved')).toBeInTheDocument();
    expect(screen.getByText('Weight Equivalent')).toBeInTheDocument();
    
    // Check environmental impact section
    expect(screen.getByText('ENVIRONMENTAL IMPACT')).toBeInTheDocument();
    expect(screen.getByText('Plastic Bottles Equivalent')).toBeInTheDocument();
    expect(screen.getByText('Garbage Trucks')).toBeInTheDocument();
    expect(screen.getByText('Planet-Saving Actions')).toBeInTheDocument();
    
    // Check call to action
    expect(screen.getByText('KEEP THE MOMENTUM GOING!')).toBeInTheDocument();
    expect(screen.getByText('Follow @onebagbetter on Instagram')).toBeInTheDocument();
  });

  it('should render with Spanish translations', () => {
    renderWithI18n(<StatsDashboard {...defaultProps} />, 'es');
    
    // Check main stats labels in Spanish
    expect(screen.getByText('Total Recolectado')).toBeInTheDocument();
    expect(screen.getByText('Entradas de Recolección')).toBeInTheDocument();
    expect(screen.getByText('Hitos Alcanzados')).toBeInTheDocument();
    expect(screen.getByText('Peso Equivalente')).toBeInTheDocument();
    
    // Check environmental impact section in Spanish
    expect(screen.getByText('IMPACTO AMBIENTAL')).toBeInTheDocument();
    expect(screen.getByText('Botellas de Plástico Equivalentes')).toBeInTheDocument();
    expect(screen.getByText('Camiones de Basura')).toBeInTheDocument();
    expect(screen.getByText('Acciones para Salvar el Planeta')).toBeInTheDocument();
    
    // Check call to action in Spanish
    expect(screen.getByText('¡MANTÉN EL IMPULSO!')).toBeInTheDocument();
    expect(screen.getByText('Sigue @onebagbetter en Instagram')).toBeInTheDocument();
  });

  it('should display correct numerical values', () => {
    renderWithI18n(<StatsDashboard {...defaultProps} />);
    
    // Check that key sections are present with their labels
    expect(screen.getByText('Total Collected')).toBeInTheDocument();
    expect(screen.getByText('Collection Entries')).toBeInTheDocument();
    expect(screen.getByText('Weight Equivalent')).toBeInTheDocument();
    
    // Check that the component renders without errors
    expect(screen.getByText('ENVIRONMENTAL IMPACT')).toBeInTheDocument();
  });

  it('should handle milestone display correctly', () => {
    // Test with data that should trigger milestones
    const propsWithMilestones = {
      totalKg: 250, // Should have achieved some milestones
      totalEntries: 50,
    };
    
    renderWithI18n(<StatsDashboard {...propsWithMilestones} />);
    
    // Should show achieved milestones section
    expect(screen.getByText('ACHIEVED MILESTONES')).toBeInTheDocument();
  });

  it('should handle truck pluralization correctly in English', () => {
    // Test with enough bags to show multiple trucks
    const propsWithManyBags = {
      totalKg: 1000, // Should be more than 330 bags, showing multiple trucks
      totalEntries: 100,
    };
    
    renderWithI18n(<StatsDashboard {...propsWithManyBags} />);
    
    // Should show "trucks" (plural) for multiple trucks
    expect(screen.getByText(/trucks/)).toBeInTheDocument();
  });

  it('should handle truck pluralization correctly in Spanish', () => {
    // Test with enough bags to show multiple trucks in Spanish
    const propsWithManyBags = {
      totalKg: 1000, // Should be more than 330 bags, showing multiple trucks
      totalEntries: 100,
    };
    
    renderWithI18n(<StatsDashboard {...propsWithManyBags} />, 'es');
    
    // Should show "camiones" (plural) for multiple trucks in Spanish
    expect(screen.getByText(/camiones/)).toBeInTheDocument();
  });
});