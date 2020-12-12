import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import ShowName from '../ShowName/ShowName'
import CreateName from '../CreateName/CreateName'; 
import { Autocomplete } from '../Autocomplete/Autocomplete'; 
// import { getSuggestions, Suggestion } from '../Autocomplete/Suggestion-services'; 
// import Button from '../Button/Button'; 
import './Home.css'; 


// const renderSuggestion = (suggestion: Suggestion) => {
//     // return `${suggestion.name} - ${suggestion.country}`
//     return `${suggestion.name}`

// }


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


            <Autocomplete />
        </div>
    )
}

export default Home; 