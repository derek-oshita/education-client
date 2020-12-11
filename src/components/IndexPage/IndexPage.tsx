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
    const [modalOpen, setModalOpen] = useState(false)

    const params  = useParams<RouteParams>(); 
    return(
        <div className="index-container">
            <PostList />
            <div className="table">
                <ShowName name={params.id}/>

                {/* OPEN MODAL BUTTON */}
                <div className="container">
                    <button onClick={() => setModalOpen(true)} className="btn">Create</button>
                </div>

            </div>
            <Modal modalOpen={modalOpen}/>
        </div>
    )
}

export default withRouter(IndexPage); 