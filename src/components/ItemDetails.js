import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import '../assets/styles/ItemDetails.css'

const ItemDetails = () => {
  const carList = useSelector((state) => state.carsReducer)
  const location = useLocation()
  const id = Number(location.pathname.split('/')[2])
  const car = carList.map((c) => {
    if (c.id === id) {
      return c
    }
  })[0]
  return (
    <section className="details-container">
      <div className="image-container">
        <img src={car.image} alt="car image" />
      </div>
      <div className="info-container">
        <table className="details-info">
          <tr>
            <td><p>Brand:</p></td>
            <td><p>{car.brand}</p></td>
          </tr>
          <tr>
          <td><p>Model: </p></td>
          <td><p>{car.model}</p></td>
          </tr>
          <tr>
          <td><p>Reservation Price:</p></td>
          <td><p>{car.price}</p></td>
          </tr>
        </table>
      </div>
    </section>
  )
}

export default ItemDetails
