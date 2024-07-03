import React from 'react';
import './Nav.css';

const Nav = () => {
  const [activePage, setActivePage] = React.useState('RacersPage');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <nav id="top-nav">
      <div class="nav-item">
        <a href="#" onClick={() => handlePageChange('RacersPage')}>Racers</a></div>
      <div class="nav-item">Crew</div>
      <div class="nav-item">
        <a href="#" onClick={() => handlePageChange('ProfilePage')}>Profile</a></div>
      <div class="nav-item">Test</div>
    </nav>
  );
};

export default Nav;