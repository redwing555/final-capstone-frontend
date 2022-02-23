import React, { useState } from 'react';
import './CarFormInput.css';
import propTypes from 'prop-types';

function CarFormInput(props) {
  const [focused, setFocused] = useState(false);
  const {
    label, errorMessage, onChange, id, name, type, placeholder, pattern, required,
  } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        onFocus={() => name === 'price' && setFocused(true)}

      />

      <span>{errorMessage}</span>

    </div>
  );
}

CarFormInput.propTypes = {
  label: propTypes.string,
  errorMessage: propTypes.string,
  id: propTypes.number,
  onChange: propTypes.func,
  required: propTypes.bool,
  name: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  pattern: propTypes.string,

};

CarFormInput.defaultProps = {
  label: '',
  errorMessage: '',
  id: 0,
  onChange: '',
  required: true,
  name: '',
  type: '',
  placeholder: 'placeholder',
  pattern: '[^\n]+',

};

export default CarFormInput;
