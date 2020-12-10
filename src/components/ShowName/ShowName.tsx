import React from 'react'; 
import { withRouter } from 'react-router-dom'; 

interface ShowNameProps {
    name?: string; 
}

// when we have props 

// const ShowName: React.FC<ShowNameProps> = (name) => {
//     return (
//         <div>
//             <h2>ShowName Component</h2>
//             <p>{name}</p>
//         </div>
//     )
// }

const ShowName: React.FC = () => {
    return (
        <div>
            <h2>ShowName Component</h2>
        </div>
    )
}

export default withRouter(ShowName); 
