import React from 'react'; 
import './TextField.css'; 
import { withRouter } from 'react-router-dom'; 


// interface Props {
//     // return string later
//     setName: (name: string) => void; 
// }

const TextField: React.FC = () => {

    const textHandler = (e: any) => {
        // console.log(e.target.value )     
    }
    return (
        <div className="container" id="textfield-container">
            <input onChange={textHandler} id="input-name" className="input-field"/>
        </div>
    )
}

export default withRouter(TextField); 



// function TextField (props) {
//      const textHandler = (e: any) => {
//         props.setName(e.target.value)
//     }
//     return (
//         <div className="container" id="textfield-container">
//             <input onChange={textHandler} id="input-name" className="input-field"/>
//         </div>
//     )   
// }
