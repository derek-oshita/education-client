import React, { useState, ChangeEvent, FormEvent } from 'react'; 
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom'; 

import './CreateName.css'; 


interface CreateNameProps {
    addName: AddName; 
}

const CreateName: React.FC<CreateNameProps & RouteComponentProps> = ({ addName }) => {
    const [ newName, setNewName ] = useState(''); 

    const history = useHistory(); 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        addName(newName); 
        history.push(`/${newName}`); 
    }

    return (
        <div className="container" id="textfield-container">
            <form>
                <input value={newName} onChange={handleChange} id="input-name" className="input-field"/>
                <div className="container">
                    <button className="btn" type="submit" onClick={handleSubmit}>Enter</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(CreateName); 

