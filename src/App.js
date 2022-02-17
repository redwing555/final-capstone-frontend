import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import './App.css';

const App = () => {
  const user = useSelector((state) => state.userReducer);

  const checkUser = () => {
    if (user !== '') {
      return (
        <>
          <Route path="/addItem" element="placeholder" />
          <Route path="/deleteItem" element="placeholder" />
          <Route path="/displayItem" element="placeholder">
            <Route path=":id" element="placeholder" />
          </Route>
        </>
      );
    }
    return <Route path="*" element={<Navigate to="/" />} />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element="placeholderHome" />
        {checkUser()}
      </Routes>
    </Router>
  );
};

export default App;
