import React from 'react'; 
import './TextField.css'; 


export const TextField: React.FC = () => {

    const textHandler = (e: any) => {
        console.log(e)
    }
    return (
        <div className="container" id="textfield-container">
            <input onChange={textHandler} id="input-name" className="input-field"/>
        </div>
    )
}

