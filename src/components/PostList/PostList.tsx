import React, { useState } from 'react'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 
import PostItem from '../PostItem/PostItem'; 
import './PostList.css'; 


interface PostListProps {
    posts: Array<Post>; 
}

const PostList: React.FC<PostListProps & RouteComponentProps> = ({ posts }) => {


    return(
        <div className="sidebar">
            <h2>PostList Component</h2>
            {posts.map(post => {
                return <PostItem post={post} />; 
            })}
        </div>
    )
}

export default withRouter(PostList); 