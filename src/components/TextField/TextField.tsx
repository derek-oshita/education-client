import React from 'react'; 
import './TextField.css'; 

export const TextField: React.FC = () => {
    // const [name, setName] = useState(); 

    return (
        <div className="container" id="textfield-container">
            <input id="input-name" className="input-field"/>
        </div>
    )
}

