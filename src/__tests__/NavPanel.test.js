import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import NavPanel from '../components/NavPanel';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Test display items', () => {
  beforeEach(() => {
    renderWithRouter(<NavPanel />);
  });
  test('If component rendered correctly', () => {
    expect(screen.getByText('Collection')).toBeInTheDocument();
    expect(screen.getByText('My Reservations')).toBeInTheDocument();
    expect(screen.getByText('Add to collection')).toBeInTheDocument();
    expect(screen.getByText('Remove from collection')).toBeInTheDocument();
    expect(screen.getByText('Rent car')).toBeInTheDocument();
  });
});
