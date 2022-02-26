import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
// import { useSelector } from 'react-redux';
import AuthComponent from './components/AuthComponent';
import NavPanel from './components/NavPanel';
import AddCar from './components/AddCar';
import Homepage from './components/Homepage';
import DisplayItems from './components/DisplayItems';
import ItemDetails from './components/ItemDetails';

const App = () => (
  // const user  = userSelector((state) => state.userReducer)

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
            <DisplayItems />
          </AuthComponent>
          )}
      />
      <Route
        path="/deleteItem"
        element={(
          <AuthComponent>
            <NavPanel />
            <DisplayItems />
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
              <ItemDetails/>
            </AuthComponent>
              )}
        />
    </Routes>
  </Router>
);

export default App;
