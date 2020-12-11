import React, { useState, ChangeEvent, FormEvent } from 'react'; 
import './CreateName.css'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 
import Button from '../Button/Button'; 

interface CreateNameProps {
    addName: AddName; 
}

const CreateName: React.FC<CreateNameProps & RouteComponentProps> = ({ addName }) => {
    const [ newName, setNewName ] = useState(''); 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        addName(newName); 
    }

    return (
        <div className="container" id="textfield-container">
            <form>
                {/* <input onChange={nameHandler} id="input-name" className="input-field"/> */}
                <input value={newName} onChange={handleChange} id="input-name" className="input-field"/>
                <div className="container">
                    {/* <Link to='/index'> */}
                    {/* <Link to = {{
                        pathname: "/index", 
                        state: {
                            name: name
                        }
                    }}> */}
                    {/* <Button onClick={handleSubmit} /> */}
                    <button className="btn" type="submit" onClick={handleSubmit} />
                    {/* </Link> */}
                </div>
            </form>
        </div>
    )
}

export default withRouter(CreateName); 

