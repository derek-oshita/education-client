import React, { useState } from 'react'; 
import CreateName from '../CreateName/CreateName'; 

import { Autocomplete } from '../Autocomplete/Autocomplete'; 
import { getSuggestions, Suggestion } from '../Autocomplete/Suggestion-services'; 

import './Home.css'; 


const renderSuggestion = (suggestion: Suggestion) => {
    return `${suggestion.name}`
}

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
            <Autocomplete getSuggestions={getSuggestions} renderSuggestion={renderSuggestion} onSelect={suggestion => console.log(suggestion)}/>
        </div>
    )
}

export default Home; 
