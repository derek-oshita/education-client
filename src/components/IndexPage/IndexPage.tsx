import React, { useState } from 'react'; 
import ShowName from '../ShowName/ShowName'; 
import PostList from '../PostList/PostList'; 
import Modal from '../Modal/Modal'; 
import ModalContent from '../Modal/ModalContent'; 
import { withRouter, useParams } from 'react-router-dom'; 
import './IndexPage.css'; 
import { toEditorSettings } from 'typescript';

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

const initialPosts: Array<Post> = []; 


const IndexPage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [posts, setPosts] = useState(initialPosts); 

    const params  = useParams<RouteParams>(); 

    // need to figure out how to handle more values
    const addPost = (nameOfSchool: Name, degree: Name, fieldOfStudy: Name, newStartYear: Year, newEndYear: Year, newGrade: Year, newDescriptionField: string) => {
        setPosts([...posts, { nameOfSchool: nameOfSchool, degree: degree,  fieldOfStudy: fieldOfStudy, startYear: newStartYear, endYear: newEndYear, grade: newGrade, descriptionField: newDescriptionField}])
    } 

    return(
        <>
        <div className="index-container">
            <PostList posts={posts}/>
                <div className="table">
                    <ShowName name={params.id}/>
                        <div className="container">
                            <button onClick={() => setModalOpen(true)} className="btn">Create</button>
                        </div>

                        <section className="example" >
                            <Modal modalOpen={modalOpen}>
                                <ModalContent setModalOpen={setModalOpen} addPost={addPost}/>
                            </Modal> 
                        </section>
                </div>
        </div>
        </>
    )
}

export default withRouter(IndexPage); 