import React, { useState } from 'react'; 
import CreateName from '../CreateName/CreateName'; 

import './Home.css'; 


const Home: React.FC = () => {
    const [name, setName] = useState(''); 
    const addName: AddName = newName => {
        setName(newName)
    }
    return (
        <div>
            <h1 className="home-header animate__animated animate__fadeInDown">Welcome to Education Showwcase</h1>
            <p className="sub-header">Type your name and click "Enter" to begin!</p>
            <CreateName addName={addName}/>
        </div>
    )
}

export default Home; 
