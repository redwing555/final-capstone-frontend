import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import './App.css';
import AuthComponent from './components/AuthComponent';

import Homepage from './components/Homepage';
import DisplayItems from './components/DisplayItems';

const App = () => {
  const user = useSelector((state) => state.userReducer);

  const checkUser = () => {
    if (user !== '') {
      return false;
    }
    true
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/addItem' 
          element={
            <AuthComponent>
              'placeholder'
            </AuthComponent>
          }
        />
        <Route path='/deleteItem' 
          element={
            <AuthComponent>
              'placeholder'
            </AuthComponent>
          }
        />
        <Route path='/displayItems' 
          element={
            <AuthComponent>
              <DisplayItems />
            </AuthComponent>
          }>
            <Route path=':id'
              element = {
                <AuthComponent>
                  'placeholder id'
                </AuthComponent>
              }
            />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
