import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsReducer';
import ReservationCard from './ReservationCard';
import './Reservations.css';

function Reservations() {
  const dispatch = useDispatch();
  const allReservations = useSelector((state) => state.reservationsReducer);

  const user = useSelector((state) => state.userReducer);

  const reservations = allReservations.filter((reservation) => reservation.username === user);

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  return (
    <>
      <h1 className="myreservations-title">My Reservations</h1>
      <ul className="reservations-container">
        {reservations.length === 0 ? (<div className="no-reservations">You have rented cars yet!</div>)
          : (
            <h2 className="reservation-notice">
              You are able to cancel the reservation before 24 hours of the
              reservation date
            </h2>
          )}
        { reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />))}
      </ul>
    </>
  );
}

export default Reservations;
