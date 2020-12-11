import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'; 
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom'; 

const IndexPage: React.FC = () => {
    console.log(useParams())
    return(
        <ShowName />
    )
}

export default withRouter(IndexPage); 