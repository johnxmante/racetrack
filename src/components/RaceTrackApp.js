import React from 'react';
import RacersPage from '../pages/RacersPage';
import CrewPage from '../pages/CrewPage';

const RaceTrackApp = () => {
  const [activePage, setActivePage] = React.useState('RacersPage');

  const renderPage = () => {
    switch (activePage) {
      case 'RacersPage':
        return <RacersPage />;
      case 'CrewPage':
        return <CrewPage />;
      // Add more cases for other pages
      default:
        return null;
    }
  };

  return (
    <div className="RaceTrackApp">
      {renderPage()}
    </div>
  );
};

export default RaceTrackApp;