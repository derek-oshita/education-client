import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

const IndexPage: React.FC = () => {
    return(
        <ShowName />
    )
}

export default withRouter(IndexPage); 