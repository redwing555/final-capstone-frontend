import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/user/user";
import {
  useNavigate
} from 'react-router-dom';
import '../assets/styles/Homepage.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userReducer);
  const dispatchUsername = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    dispatch(addUser(name))
    console.log(user !== "")
    checkUser()
    navigate('/displayItems')
  }
  const checkUser = () => {
    if (user !== "") {
      navigate('/displayItems')
    }
  }
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
  )
}

export default Homepage
