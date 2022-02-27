import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ReservationForm.css';
import { createReservation } from '../redux/reservations/reservationsReducer';
import { loadCars } from '../redux/cars/cars';

function ReservationForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carList = useSelector((state) => state.carsReducer);
  const user = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loadCars);
    dispatch(createReservation({
      username: user,
      car_id: carList[e.target.selectDropdown.value].id,
      reservation_date: startDate.toString(),
      to_date: endDate.toString(),
      city: city.target.value,
    }, user));
    navigate('/myReservations');
  };

  return (
    <div className="car-form reservation-form">
      <div className="background" />

      <form className="reserve-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Make your reservation</h1>

        <select className="formInput" id="selectDropdown">
          {carList.map((car, index) => (
            <option className="select-values" key={car.id} value={index}>
              {car.id}
              :
              {' '}
              {car.brand}
              {' '}
              {car.model}
              {' '}
            </option>
          ))}
        </select>

        <label htmlFor="city">
          City
          <input onChange={(city) => setCity(city)} type="text" name="name" id="city" />
        </label>
        <h4 className="date-label">Start Date</h4>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <h4 className="date-label">End Date</h4>

        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReservationForm;
