import React from 'react'; 
import { TextField } from '../TextField/TextField'; 
import Button from '../Button/Button'; 
import './Home.css'; 

function Home () {
    return (
        <div>
            <h1 className="home-header animate__animated animate__fadeInDown">Welcome to Education Showwcase</h1>
            <p className="sub-header">Type your name and click "Enter" to begin!</p>
            <TextField />
            <Button />
        </div>
    )
}

export default Home; 