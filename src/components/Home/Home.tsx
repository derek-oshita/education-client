import React from 'react'; 
import { TextField } from '../TextField/TextField'; 
import { NavLink, Link } from 'react-router-dom'; 
import Button from '../Button/Button'; 
import './Home.css'; 

function Home () {
    console.log('homepage...')
    return (
        <div>
            <h1 className="home-header animate__animated animate__fadeInDown">Welcome to Education Showwcase</h1>
            <p className="sub-header">Type your name and click "Enter" to begin!</p>
            <TextField />
            <Link to='/index'>
                <Button />
            </Link>
        </div>
    )
}

export default Home; 