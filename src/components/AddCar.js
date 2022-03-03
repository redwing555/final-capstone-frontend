import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CarFormInput from './CarFormInput';
import { createCar } from '../redux/cars/cars';
import '../assets/styles/AddCar.css';

function AddCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    price: '',
    brand: '',
    model: '',
    image: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'price',
      type: 'number',
      placeholder: 'price',
      errorMessage: 'Price must be a number',
      label: 'Price',
      pattern: '/^[+-]?([0-9]+.?[0-9]*|.[0-9]+)$',
      required: true,
    },
    {
      id: 2,
      name: 'brand',
      type: 'text',
      placeholder: 'eg : Porsche',
      errorMessage: '',
      label: 'Brand',
      required: true,
    },
    {
      id: 3,
      name: 'model',
      type: 'text',
      placeholder: 'eg : Porsche 911/911S - 1983',
      label: 'Model',
      required: true,
    },
    {
      id: 4,
      name: 'image',
      type: 'url',
      placeholder: 'Image URL',
      label: 'Image',
      required: true,
    },

    {
      id: 5,
      name: 'description',
      type: 'text',
      placeholder: 'car description',
      label: 'description',
      required: false,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCar(values));
    setTimeout(() => {
      window.location.reload(true);
      navigate('/collection');
    }, 1000);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="car-form">
      <div className="background" />

      <form className="form" onSubmit={handleSubmit}>

        <h1>Add car to our collection</h1>
        {inputs.map((input) => (
          <CarFormInput
            key={input.id}
            name={input.name}
            type={input.type}
            label={input.label}
            pattern={input.pattern !== null && input.pattern}
            placeholder={input.placeholder}
            required={input.required}
            value={values[input.name]}
            errorMessage={input.errorMessage}
            onChange={onChange}
          />
        ))}
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddCar;
