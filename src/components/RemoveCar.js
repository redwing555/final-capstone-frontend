import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCar } from '../redux/cars/cars';

function RemoveCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const carList = useSelector((state) => state.carsReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteCar(carList[e.target.selectDropdown.value]));
    navigate('/collection');
  };

  return (
    <div className="car-form">
      <div className="background" />

      <form className="form" onSubmit={handleSubmit}>
        <h1>Remove a car from our collection</h1>
        <select className="formInput" id="selectDropdown">
          {carList.map((car, index) => (
            <option key={car.id} value={index}>
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
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RemoveCar;
