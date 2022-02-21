import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";

const AuthComponent = (props) => {
  const user = useSelector((state) => state.userReducer);

  const isLoggedIn = () => {
    if (user === "") {
      return false
    }
    return true
  }

  return isLoggedIn() ? props.children : <Navigate to="/" />;
}


export default AuthComponent
