import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/NavPanel.css';
import logo from '../assets/images/logo.png';

const NavPanel = () => {
  const [responsive, setResponsive] = useState(false);
  const [times, setFaTimes] = useState(false);

  const toggleResponsive = () => {
    setResponsive((prev) => !prev);
    setFaTimes(((prev) => !prev));
  };

  const links = [
    {
      id: 1,
      path: '/collection',
      text: 'Collection',
    },
    {
      id: 2,
      path: '/myReservations',
      text: 'My Reservations',
    },
    {
      id: 3,
      path: '/addItem',
      text: 'Add to collection',
    },

    {
      id: 4,
      path: '/deleteItem',
      text: 'Remove from collection',
    },

    {
      id: 5,
      path: '/reserve',
      text: 'Rent car',
    },

  ];

  return (
    <div className="nav-container">
      <nav>

        <ul className={responsive ? 'sidebar responsive' : 'sidebar'}>

          <img className="logo" src={logo} alt="logo" />

          {links.map((link) => (
            <li key={link.id} className="nav-link">
              <NavLink className="link" to={link.path} exact="true">
                {link.text}
              </NavLink>
            </li>
          ))}

        </ul>

        <button className="icon" type="button" onClick={toggleResponsive}>
          <i className={times ? 'fa fa-bars fa fa-times' : 'fa fa-bars'} />
        </button>
      </nav>
    </div>

  );
};
export default NavPanel;
