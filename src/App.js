import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import AuthComponent from './components/AuthComponent';

import Homepage from './components/Homepage';
import DisplayItems from './components/DisplayItems';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/addItem"
        element={(
          <AuthComponent>
            <DisplayItems />
          </AuthComponent>
          )}
      />
      <Route
        path="/deleteItem"
        element={(
          <AuthComponent>
            <DisplayItems />
          </AuthComponent>
          )}
      />
      <Route
        path="/displayItems"
        element={(
          <AuthComponent>
            <DisplayItems />
          </AuthComponent>
          )}
      >
        <Route
          path=":id"
          element={(
            <AuthComponent>
              <DisplayItems />
            </AuthComponent>
              )}
        />
      </Route>
    </Routes>
  </Router>
);

export default App;
