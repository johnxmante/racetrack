import React from 'react';
import { MyProvider } from './Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import RacersPage from './pages/RacersPage';


function App() {
  console.log('App is running');
  return(
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/RacersPage" element={<RacersPage />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
