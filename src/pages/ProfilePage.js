import React from 'react';
import Nav from '../components/Nav';
import './ProfilePage.css';
import { useMyContext } from '../Context';

const { racers, crew } = useMyContext();
function ProfilePage() {
    

    return (
        <div>
            <Nav />
            <h1>Profile Page</h1>
            <h2>Racers</h2>
            <ul>
                {racers.map((racer, index) => (
                    <li key={index}>{racer.name}</li>
                ))}
            </ul>
            <h2>Crew</h2>
            <ul>
                {crew.map((crew, index) => (
                    <li key={index}>{crew.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProfilePage;