import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { I18nProvider } from '../../contexts/I18nContext';
import CollectionEntryForm from '../CollectionEntryForm';

// Mock the API call
jest.mock('../../lib/api', () => ({
  createCollectionEntry: jest.fn(),
}));

const renderWithI18n = (component: React.ReactElement, language: 'en' | 'es' = 'en') => {
  return render(
    <I18nProvider initialLanguage={language}>
      {component}
    </I18nProvider>
  );
};

describe('CollectionEntryForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with English translations by default', () => {
    renderWithI18n(<CollectionEntryForm />);
    
    // Check form title
    expect(screen.getByText('ADD YOUR COLLECTION')).toBeInTheDocument();
    
    // Check form labels
    expect(screen.getByText('Amount Collected *')).toBeInTheDocument();
    expect(screen.getByText('Unit *')).toBeInTheDocument();
    expect(screen.getByText('Your Name (Optional)')).toBeInTheDocument();
    expect(screen.getByText('Location (Optional)')).toBeInTheDocument();
    
    // Check placeholders
    expect(screen.getByPlaceholderText('Enter amount')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Where did you collect trash?')).toBeInTheDocument();
    
    // Check unit buttons
    expect(screen.getByText('Trash Bags')).toBeInTheDocument();
    expect(screen.getByText('Kilograms')).toBeInTheDocument();
    expect(screen.getByText('Pounds')).toBeInTheDocument();
    
    // Check submit button
    expect(screen.getByText('Record Collection')).toBeInTheDocument();
  });

  it('should render with Spanish translations', () => {
    renderWithI18n(<CollectionEntryForm />, 'es');
    
    // Check form title
    expect(screen.getByText('AGREGA TU RECOLECCIÓN')).toBeInTheDocument();
    
    // Check form labels
    expect(screen.getByText('Cantidad Recolectada *')).toBeInTheDocument();
    expect(screen.getByText('Unidad *')).toBeInTheDocument();
    expect(screen.getByText('Tu Nombre (Opcional)')).toBeInTheDocument();
    expect(screen.getByText('Ubicación (Opcional)')).toBeInTheDocument();
    
    // Check placeholders
    expect(screen.getByPlaceholderText('Ingresa la cantidad')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingresa tu nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('¿Dónde recolectaste basura?')).toBeInTheDocument();
    
    // Check unit buttons
    expect(screen.getByText('Bolsas de Basura')).toBeInTheDocument();
    expect(screen.getByText('Kilogramos')).toBeInTheDocument();
    expect(screen.getByText('Libras')).toBeInTheDocument();
    
    // Check submit button
    expect(screen.getByText('Registrar Recolección')).toBeInTheDocument();
  });

  it('should display validation errors in the correct language', async () => {
    renderWithI18n(<CollectionEntryForm />);
    
    // Try to submit without entering amount
    const submitButton = screen.getByText('Record Collection');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Amount is required')).toBeInTheDocument();
    });
  });

  it('should display Spanish validation errors', async () => {
    renderWithI18n(<CollectionEntryForm />, 'es');
    
    // Try to submit without entering amount
    const submitButton = screen.getByText('Registrar Recolección');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('La cantidad es requerida')).toBeInTheDocument();
    });
  });

  it('should show submitting state in correct language', async () => {
    const mockCreateEntry = require('../../lib/api').createCollectionEntry;
    mockCreateEntry.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
    
    renderWithI18n(<CollectionEntryForm />);
    
    // Fill in the form
    const amountInput = screen.getByPlaceholderText('Enter amount');
    fireEvent.change(amountInput, { target: { value: '5' } });
    
    // Submit the form
    const submitButton = screen.getByText('Record Collection');
    fireEvent.click(submitButton);
    
    // Check submitting state
    await waitFor(() => {
      expect(screen.getByText('Recording...')).toBeInTheDocument();
    });
  });

  it('should show Spanish submitting state', async () => {
    const mockCreateEntry = require('../../lib/api').createCollectionEntry;
    mockCreateEntry.mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)));
    
    renderWithI18n(<CollectionEntryForm />, 'es');
    
    // Fill in the form
    const amountInput = screen.getByPlaceholderText('Ingresa la cantidad');
    fireEvent.change(amountInput, { target: { value: '5' } });
    
    // Submit the form
    const submitButton = screen.getByText('Registrar Recolección');
    fireEvent.click(submitButton);
    
    // Check submitting state
    await waitFor(() => {
      expect(screen.getByText('Registrando...')).toBeInTheDocument();
    });
  });
});