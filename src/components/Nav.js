import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
  const [activePage, setActivePage] = React.useState('RacersPage');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    console.log('Nav is running'),
    <nav id="top-nav">
      <div className="nav-item">
        <NavLink to ="/RacersPage" activeClassName="active" onClick={() => handlePageChange('RacersPage')}>Racers</NavLink>
      </div>
      <div className="nav-item">Crew</div>
      <div className="nav-item">
        <NavLink to ="/ProfilePage" activeClassName="active" onClick={() => handlePageChange('ProfilePage')}>Profile</NavLink>  
      </div>
      <div className="nav-item">Test</div>
    </nav>
  );
};

export default Nav;