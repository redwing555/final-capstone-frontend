import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DisplayItems from '../components/DisplayItems';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('Test display items', () => {
  const useSelectorMock = redux.useSelector;
  const useDispatchMock = redux.useDispatch;
  const mockStore = {
    carsReducer: [
      {
        id: 1,
        price: 100,
        brand: 'Toyota',
        model: 'Corolla',
        image: 'https://4.bp.blogspot.com/-OIbgn_Ga4R0/VARzAvX7PaI/AAAAAAAAA-Y/xQbZt1CE8B8/s1600/buick.jpg',
        description: 'This is the test 1 description',
        created_at: '2022-02-23T09:14:23.045Z',
        updated_at: '2022-02-23T09:14:23.045Z',
      },
      {
        id: 2,
        price: 300,
        brand: 'Ferrari',
        model: 'f45-',
        image: 'https://4.bp.blogspot.com/-OIbgn_Ga4R0/VARzAvX7PaI/AAAAAAAAA-Y/xQbZt1CE8B8/s1600/buick.jpg',
        description: 'This is the test 2 description',
        created_at: '2022-02-23T09:14:23.045Z',
        updated_at: '2022-02-23T09:14:23.045Z',
      },

    ],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    renderWithRouter(<DisplayItems />);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  test('If component rendered correctly', () => {
    expect(screen.getByText('Our cars')).toBeInTheDocument();
  });
  test('If the component show the cars from store', () => {
    expect(screen.getByText(/Toyota/)).toBeInTheDocument();
    expect(screen.getByText(/Ferrari/)).toBeInTheDocument();
  });
  test("If the component show the cars' description", () => {
    expect(screen.getByText('This is the test 1 description')).toBeInTheDocument();
    expect(screen.getByText('This is the test 2 description')).toBeInTheDocument();
  });
});
