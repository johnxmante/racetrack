import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyProvider = ({ children }) => {
    const [racers, setRacers] = useState([]);
    const [crew, setCrew] = useState([]);

    const addRacer = (racer) => {
        setRacers(currentRacers => [...currentRacers, racer]);
    };

    const addCrew = (crew) => {
        setCrew(currentCrew => [...currentCrew, crew]);
    };

    return (
        <MyContext.Provider value= {{racers, crew, addRacer, addCrew}}>
            {children}
        </MyContext.Provider>
    );
}