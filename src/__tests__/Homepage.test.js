import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Homepage from '../components/Homepage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Test homepage component', () => {
  beforeEach(() => {
    render(<Homepage />);
  });

  test('show header', () => {
    expect(screen.getByText('Book a car test-ride today!')).toBeInTheDocument();
  });
  test('show paragraph', () => {
    expect(screen.getByText('We have over 10 different cars from which to choose from')).toBeInTheDocument();
  });
  test('show input', () => {
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
  });
  test('show button', () => {
    expect(screen.getByText('Insert Username')).toBeInTheDocument();
  });
});
