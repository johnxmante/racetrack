import React from 'react';
import { MyProvider } from './Context';
import RaceTrackApp from './components/RaceTrackApp';


function App() {
  return (
    <MyProvider>
      <div className="App">
        <RaceTrackApp />
      </div>
    </MyProvider>
  );
}

export default App;
