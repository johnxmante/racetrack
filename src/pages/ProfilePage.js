import React from 'react';
import Nav from '../components/Nav';
import './ProfilePage.css';
import { useMyContext } from '../Context';

function ProfilePage() {
    const { racers, crew } = useMyContext();
    const addedRacers = racers.filter(racer => racer.added);
    const addedCrew = crew.filter(crew => crew.added);
    
    console.log('Racers:', racers);
    console.log('Added Racers:', addedRacers);
    console.log('Crew:', crew);
    console.log('Added Crew:', addedCrew);
    
   

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>Racers</h2>
            <ul>
                {addedRacers.map((racer, index) => (
                    <li key={index}>{racer.name}</li>
                ))}
            </ul>
            <h2>Crew</h2>
            <ul>
                {addedCrew.map((crew, index) => (
                    <li key={index}>{crew.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProfilePage;