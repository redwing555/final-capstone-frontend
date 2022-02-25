import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsReducer';
import ReservationCard from './ReservationCard';

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
        {reservations
         && reservations.map((reservation) => (
           <ReservationCard key={reservation.id} reservation={reservation} />))}
      </ul>
    </>
  );
}

export default Reservations;
