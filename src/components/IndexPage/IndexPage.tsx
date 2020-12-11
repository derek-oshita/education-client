import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'; 
import PostList from '../PostList/PostList'; 
import Modal from '../Modal/Modal'; 
import { withRouter, useParams } from 'react-router-dom'; 
import './IndexPage.css'; 

interface RouteParams {
    id: Name; 
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
            <Modal />
        </div>
    )
}

export default withRouter(IndexPage); 