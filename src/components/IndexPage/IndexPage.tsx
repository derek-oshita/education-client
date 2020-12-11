import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'; 
import PostList from '../PostList/PostList'; 
import Modal from '../Modal/Modal'; 
import ModalContent from '../Modal/ModalContent'; 
import { withRouter, useParams } from 'react-router-dom'; 
import './IndexPage.css'; 

interface RouteParams {
    id: Name; 
}

// consider another element to replace w/ the modal

/* <ShowName name={params.id}/> */

/* <Modal modalOpen={modalOpen}>
<ModalContent setModalOpen={setModalOpen} />
</Modal> */

/* 
<div className="container">
<button onClick={() => setModalOpen(true)} className="btn">Create</button></div>
*/


const IndexPage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const params  = useParams<RouteParams>(); 
    return(
        <>
        <div className="index-container">
            <PostList />
                <div className="table">
                    <ShowName name={params.id}/>
                        <div className="container">
                            <button onClick={() => setModalOpen(true)} className="btn">Create</button>
                        </div>

                        <section className="example" >
                            {/* <ShowName name={params.id}/>
                            <div className="container">
                                <button onClick={() => setModalOpen(true)} className="btn">Create</button>
                            </div> */}
                            <Modal modalOpen={modalOpen}>
                                <ModalContent setModalOpen={setModalOpen} />
                            </Modal> 
                        </section>
                </div>
        </div>
        </>
    )
}

export default withRouter(IndexPage); 