import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './RacersPage.css';
import Nav from '../components/Nav';
import { useMyContext } from '../Context';

const RacersPage = () => {
  const [gotList, setGotList] = useState([]);
  const [selectedRacer, setSelectedRacer] = useState('');
  const [selectedCrew, setSelectedCrew] = useState('');

  const { racers, crew, addRacer, addCrew } = useMyContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fileName = 'SPEEDSTORM - RACERS & CREW.csv';
        const publicUrl = process.env.PUBLIC_URL || '';
        const fullUrl = `${publicUrl}/${fileName}`;
        
        const response = await fetch(fullUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            const nameColumn = results.meta.fields.find(field => 
              field.toLowerCase().includes('character') || field.toLowerCase().includes('name'));
            const typeColumn = results.meta.fields.find(field => 
              field.toLowerCase().includes('type'));

            if (!nameColumn || !typeColumn) {
              throw new Error('Required columns not found in CSV');
            }

            const parsedRacers = results.data
              .filter(item => item[typeColumn] === 'R')
              .map(item => ({ name: item[nameColumn], type: 'Racer' }));
            const parsedCrew = results.data
              .filter(item => item[typeColumn] === 'C')
              .map(item => ({ name: item[nameColumn], type: 'Crew' }));
            
            addRacer(parsedRacers);
            addCrew(parsedCrew);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleAddToGotList = (type) => {
    const selectedItem = type === 'Racer' ? selectedRacer : selectedCrew;
    if (selectedItem && !gotList.some(item => item.name === selectedItem)) {
      if (type === 'Racer') {
        addRacer({ name: selectedItem, type});
        setSelectedRacer('');
      } else {
        addCrew({ name: selectedItem, type });
        setSelectedCrew('');
      }
    }
  };

  return (
    <div className="racers-page">
      <Nav /> 
      <h1 className="racers-title">Speedstorm Racers & Crew</h1>
      <div className="content-container">
        <div className="selections">
          <div className="selection-container">
            <h2>Select Racer</h2>
            <select 
              value={selectedRacer} 
              onChange={(e) => setSelectedRacer(e.target.value)}
              className="selection-dropdown"
            >
              <option value="">Select a Racer</option>
              {racers.map((racer, index) => (
                <option key={index} value={racer.name}>{racer.name}</option>
              ))}
            </select>
            <button 
              onClick={() => handleAddToGotList('Racer')}
              className="add-button"
            >
              Add Racer
            </button>
          </div>
          <div className="selection-container">
            <h2>Select Crew</h2>
            <select 
              value={selectedCrew} 
              onChange={(e) => setSelectedCrew(e.target.value)}
              className="selection-dropdown"
            >
              <option value="">Select a Crew Member</option>
              {crew.map((crewMember, index) => (
                <option key={index} value={crewMember.name}>{crewMember.name}</option>
              ))}
            </select>
            <button 
              onClick={() => handleAddToGotList('Crew')}
              className="add-button"
            >
              Add Crew
            </button>
          </div>
        </div>
        <div className="got-box">
          <div className="got-racers">
            <h2 className="got-title">your racers</h2>
            {gotList.filter(item => item.type === 'Racer').map((item, index) => (
              <ul>
                <li key={index} className="got-item">
                  {item.name}
                </li>
              </ul>
            ))}
          </div>
          <div className="separator"></div>
          <div className="got-crew">
            <h2 className="got-title">your crew</h2>
            {gotList.filter(item => item.type === 'Crew').map((item, index) => (  
              <ul>
                <li key={index} className="got-item">
                  {item.name}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacersPage;