import React from 'react'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

interface PostItemProps {
    post: Post; 
}

const PostItem: React.FC<PostItemProps & RouteComponentProps> = ({ post }) => {
    return(
        <>
        <p>{post.nameOfSchool}</p>
        <p>{post.degree}</p>
        <p>{post.fieldOfStudy}</p>
        <p>{post.startYear}</p>
        <p>{post.endYear}</p>
        <p>{post.grade}</p>
        <p>{post.descriptionField}</p>
        </>
    )
}

export default withRouter(PostItem); 