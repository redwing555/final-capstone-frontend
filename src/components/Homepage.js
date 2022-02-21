import React from 'react';
import { useDispatch } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';
import { addUser } from '../redux/user/user';
import '../assets/styles/Homepage.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dispatchUsername = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    dispatch(addUser(name));
    navigate('/displayItems');
  };
  return (
    <>
      <section className="homepage-container">
        <h1>Book a car test-ride today!</h1>
        <p>We have over 10 different cars from which to choose from</p>
        <form onSubmit={dispatchUsername} action="#">
          <label htmlFor="name">
            <input type="text" id="name" placeholder="Username" />
          </label>
          <button type="submit">Insert Username</button>
        </form>
      </section>
    </>
  );
};

export default Homepage;
