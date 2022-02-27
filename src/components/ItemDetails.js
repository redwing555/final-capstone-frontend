import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import '../assets/styles/ItemDetails.css';

const ItemDetails = () => {
  const carList = useSelector((state) => state.carsReducer);
  const location = useLocation();
  const navigate = useNavigate();
  const id = Number(location.pathname.split('/')[2]);
  const car = carList.filter((c) => c.id !== id)[0];
  const reserveHandle = () => {
    navigate('/reserve');
  };
  const backHandle = () => {
    navigate('/collection');
  };
  return (
    <>
      <section className="details-container">
        <div className="image-container">
          <img src={car.image} alt="car" />
        </div>
        <div className="info-container">
          <table className="details-info">
            <tr>
              <td><p>Brand:</p></td>
              <td><p className="end">{car.brand}</p></td>
            </tr>
            <tr>
              <td><p>Model: </p></td>
              <td><p className="end">{car.model}</p></td>
            </tr>
            <tr>
              <td><p>Reservation Price:</p></td>
              <td><p className="end">{car.price}</p></td>
            </tr>
            <tr>
              <td><p>Id:</p></td>
              <td><p className="end">{car.id}</p></td>
            </tr>
          </table>
          <button type="button" onClick={reserveHandle}>
            <i className="fa fa-solid fa-cog" />
            {' '}
            Reserve
            {' '}
            <i className="far fa-arrow-circle-right" />
          </button>
        </div>
      </section>
      <div className="back-button-container">
        <button type="button" onClick={backHandle} className="back-button">
          ‎
          <i className="far fa-caret-left" />
        </button>
      </div>
    </>
  );
};

export default ItemDetails;
