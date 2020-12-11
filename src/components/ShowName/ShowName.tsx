import React from 'react'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

interface ShowNameProps {
    name?: string; 
}

const ShowName: React.FC<ShowNameProps & RouteComponentProps> = ({ name }) => {
    return (
        <div>
            <p>Education Showwcase for {name}</p>
        </div>
    )
}

export default withRouter(ShowName); 
