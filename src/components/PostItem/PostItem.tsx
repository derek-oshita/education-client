import React from 'react'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

import './PostItem.css'; 

interface PostItemProps {
    post: Post; 
}

const PostItem: React.FC<PostItemProps & RouteComponentProps> = ({ post }) => {
    return(
        <article className="post-container animate__animated animate__fadeIn">
            <div className="school-name">
                <h3>{post.nameOfSchool}</h3>
            </div>
            <div className="credentials-container">
                <p><strong>{post.degree} in {post.fieldOfStudy}</strong></p>
            </div>
            <p>{post.startYear} - {post.endYear} || {post.grade} <strong>GPA</strong> </p>
            <p>Details: {post.descriptionField}</p>
        </article>
    )
}

export default withRouter(PostItem); 