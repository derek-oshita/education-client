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
            <div className="container postlist-container">
                <h2>Showwcase Your Education</h2>
            </div>

            {posts.map(post => {
                return <PostItem post={post} />; 
            })}
        </div>
    )
}

export default withRouter(PostList); 