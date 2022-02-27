import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthComponent from './components/AuthComponent';
import NavPanel from './components/NavPanel';
import AddCar from './components/AddCar';
import Homepage from './components/Homepage';
import DisplayItems from './components/DisplayItems';
import ItemDetails from './components/ItemDetails';
import RemoveCar from './components/RemoveCar';
import Reservations from './components/Reservations';
import ReservationForm from './components/ReservationForm';
import { loadCars } from './redux/cars/cars';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCars());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/addItem"
          element={(
            <AuthComponent>
              <NavPanel />
              <AddCar />
            </AuthComponent>
          )}
        />
        <Route
          path="/reserve"
          element={(
            <AuthComponent>
              <NavPanel />
              <ReservationForm />
            </AuthComponent>
          )}
        />
        <Route
          path="/myReservations"
          element={(
            <AuthComponent>
              <NavPanel />
              <Reservations />
            </AuthComponent>
          )}
        />
        <Route
          path="/deleteItem"
          element={(
            <AuthComponent>
              <NavPanel />
              <RemoveCar />
            </AuthComponent>
          )}
        />
        <Route
          path="/collection"
          element={(
            <AuthComponent>
              <NavPanel />
              <DisplayItems />
            </AuthComponent>
          )}
        />
        <Route
          path="collection/:id"
          element={(
            <AuthComponent>
              <NavPanel />
              <ItemDetails />
            </AuthComponent>
              )}
        />
      </Routes>
    </Router>
  );
};
export default App;
