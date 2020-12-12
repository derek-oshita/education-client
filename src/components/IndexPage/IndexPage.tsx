import React, { useState } from 'react'; 
import { withRouter, useParams } from 'react-router-dom'; 

import ShowName from '../ShowName/ShowName'; 
import PostList from '../PostList/PostList'; 
import Modal from '../Modal/Modal'; 
import ModalContent from '../Modal/ModalContent'; 

import './IndexPage.css'; 


interface RouteParams {
    id: Name; 
}

const initialPosts: Array<Post> = []; 

const IndexPage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const [posts, setPosts] = useState(initialPosts); 
    const params  = useParams<RouteParams>(); 


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