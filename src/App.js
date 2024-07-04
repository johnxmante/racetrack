import React from 'react';
import { MyProvider } from './Context';
import RaceTrackApp from './components/RaceTrackApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import RacersPage from './pages/RacersPage';


function App() {
  return(
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/RacersPage" element={<RacersPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/" element={<RaceTrackApp />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
