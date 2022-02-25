import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import AuthComponent from './components/AuthComponent';
import NavPanel from './components/NavPanel';
import AddCar from './components/AddCar';
import Homepage from './components/Homepage';
import DisplayItems from './components/DisplayItems';
import RemoveCar from './components/RemoveCar';
import Reservations from './components/Reservations';

const App = () => (
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
            <DisplayItems />
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
      >
        <Route
          path=":id"
          element={(
            <AuthComponent>
              <NavPanel />
              <DisplayItems />
            </AuthComponent>
              )}
        />
      </Route>
    </Routes>
  </Router>
);
export default App;
