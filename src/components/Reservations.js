import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCars } from '../redux/cars/cars';
import { getReservations } from '../redux/reservations/reservationsReducer';
import ReservationCard from './ReservationCard';
import './Reservations.css';

function Reservations() {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationsReducer);
  const cars = useSelector((state) => state.carsReducer);
  const user = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getReservations(user));
    dispatch(loadCars());
  }, []);
  return (
    <>
      <h1 className="myreservations-title">My Reservations</h1>
      <ul className="reservations-container">
        {reservations.length === 0 ? (<div className="no-reservations">You have no rented cars yet!</div>)
          : (
            <h2 className="reservation-notice">
              Cancel your reservation before 24h
            </h2>
          )}
        { reservations.map((reservation) => (

          <ReservationCard
            key={reservation.id}
            reservation={reservation}
            reservedCar={cars.filter((car) => car.id === reservation.car_id)}
          />
        ))}
      </ul>
    </>
  );
}

export default Reservations;
