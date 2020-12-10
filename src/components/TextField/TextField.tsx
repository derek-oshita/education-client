import React from 'react'; 
import './TextField.css'; 


interface Props {
    // return string later
    setName: (name: string) => void; 
}

export const TextField: React.FC<Props> = (setName) => {

    const textHandler = (e: any) => {
        console.log(e.target.value )
    }
    return (
        <div className="container" id="textfield-container">
            <input onChange={textHandler} id="input-name" className="input-field"/>
        </div>
    )
}

