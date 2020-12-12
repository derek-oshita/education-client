import React from 'react'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

import './PostItem.css'; 

interface PostItemProps {
    post: Post; 
}

const PostItem: React.FC<PostItemProps & RouteComponentProps> = ({ post }) => {
    return(
        <article className="post-container">
            <div className="school-name">
                <h3>{post.nameOfSchool}</h3>
            </div>
            <p>{post.degree}</p>
            <p>{post.fieldOfStudy}</p>
            <p>{post.startYear}</p>
            <p>{post.endYear}</p>
            <p>{post.grade}</p>
            <p>{post.descriptionField}</p>
        </article>
    )
}

export default withRouter(PostItem); 