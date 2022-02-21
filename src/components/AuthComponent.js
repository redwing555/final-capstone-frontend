import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthComponent = ({ children }) => {
  const user = useSelector((state) => state.userReducer);

  const isLoggedIn = () => {
    if (user === '') {
      return false;
    }
    return true;
  };

  return isLoggedIn() ? children : <Navigate to="/" />;
};

AuthComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default AuthComponent;
