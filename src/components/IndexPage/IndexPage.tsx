import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'; 
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom'; 

interface RouteParams {
    id: string; 
}

const IndexPage: React.FC = () => {
    const params  = useParams<RouteParams>(); 
    return(
        <ShowName name={params.id}/>
    )
}

export default withRouter(IndexPage); 