import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'
import CreateName from '../CreateName/CreateName'; 
import { Link } from 'react-router-dom'; 
// import Button from '../Button/Button'; 
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
            <div className="container">
                <Link to='/index'>
                {/* <Link to = {{
                    pathname: "/index", 
                    state: {
                        name: name
                    }
                }}> */}
                    {/* <Button /> */}
                </Link>
            </div>
            {/* change myName later */}
            {name}
            <ShowName />
        </div>
    )
}

export default Home; 