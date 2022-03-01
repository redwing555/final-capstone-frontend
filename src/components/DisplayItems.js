import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCars } from '../redux/cars/cars';
import '../assets/styles/DisplayItems.css';

const DisplayItems = () => {
  const carList = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCars());
  }, []);
  const carsRef = useRef();

  const handleScrollLeft = () => {
    carsRef.current.scrollLeft -= carsRef.current.offsetWidth;
  };

  const handleScrollRight = () => {
    carsRef.current.scrollLeft += carsRef.current.offsetWidth;
  };

  const handleKeyScroll = (e) => {
    if (e.keyCode === 37) {
      carsRef.current.scrollLeft -= carsRef.current.offsetWidth;
    }
    if (e.keyCode === 39) {
      carsRef.current.scrollLeft += carsRef.current.offsetWidth;
    }
  };

  return (
    <section className="cars-container">
      <div className="titles">
        <h1>Our cars</h1>
        <h2>Please select a car model</h2>
      </div>
      <div className="cars-display">
        <i onClick={handleScrollLeft} onKeyDown={handleKeyScroll} tabIndex={0} aria-label="roll-left" role="button" className="fa fa-caret-left" />
        <div className="car-container" ref={carsRef}>
          {carList.map((car) => (
            <Link to={`${car.id}`} className="car" key={car.id}>
              <img src={car.image} alt="" />
              <h3>
                {car.brand}
                {' '}
                {car.model}
              </h3>
              <p>{car.description ? car.description : '‎'}</p>
            </Link>
          ))}
        </div>
        <i onClick={handleScrollRight} onKeyDown={handleKeyScroll} aria-label="roll-right" role="button" tabIndex={0} className="fa fa-caret-right" />
      </div>
    </section>
  );
};

export default DisplayItems;
