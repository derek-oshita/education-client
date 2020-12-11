import React from 'react'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 
import './ShowName.css'; 

interface ShowNameProps {
    name?: string; 
}

const ShowName: React.FC<ShowNameProps & RouteComponentProps> = ({ name }) => {
    return (
        <div>
            <p id="show-name">Education Showwcase for {name}</p>
        </div>
    )
}

export default withRouter(ShowName); 
