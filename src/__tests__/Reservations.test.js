import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as redux from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Reservations from '../components/Reservations';

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
    userReducer: 'John',
    reservationsReducer: [
      {
        id: 1,
        username: 'John',
        car_id: 1,
        reservation_date: '2020/02/20',
        to_date: '2020/02/20',
        city: 'Casablanca',
        created_at: '2022-02-27T16:50:33.641Z',
        updated_at: '2022-02-27T16:50:33.641Z',
      },
      {
        id: 2,
        username: 'John',
        car_id: 2,
        created_at: '2022-02-27T22:07:34.042Z',
        updated_at: '2022-02-27T22:07:34.042Z',
        city: 'dakhla',
        reservation_date: '2022-02-27T22:07:24.000Z',
        to_date: 'Sat Mar 05 2022 23:07:24 GMT+0100 (UTC+01:00)',
      },

    ],
  };
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    renderWithRouter(<Reservations />);
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });
  test('If component rendered correctly', () => {
    expect(screen.getByText('My Reservations')).toBeInTheDocument();
    expect(screen.getByText('You are able to cancel the reservation before 24 hours of the reservation date')).toBeInTheDocument();
  });
  test('If the component show the reservations from store', () => {
    expect(screen.getByText(/2022-02-27/)).toBeInTheDocument();
    expect(screen.getByText(/2022-03-05/)).toBeInTheDocument();
    expect(screen.getByText(/Ferrari/)).toBeInTheDocument();
    expect(screen.getByText(/Casablanca/)).toBeInTheDocument();
    expect(screen.getByText(/dakhla/)).toBeInTheDocument();
    expect(screen.getByText(/Corolla/)).toBeInTheDocument();
  });
});
