import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'; 
import { withRouter, RouteComponentProps, useParams } from 'react-router-dom'; 
import './IndexPage.css'; 
import PostList from '../PostList/PostList'; 

interface RouteParams {
    id: string; 
}

const IndexPage: React.FC = () => {
    const params  = useParams<RouteParams>(); 
    return(
        // <div className="index-container container">
        <div className="index-container">
            <PostList />
            <div className="table">
                <ShowName name={params.id}/>
                <div className="container">
                    <button className="btn">Create</button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(IndexPage); 