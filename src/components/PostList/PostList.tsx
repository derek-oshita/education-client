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

            <article className="post-container">
                <div className="school-name">
                    <h3>UNR</h3>
                </div>
                
                <p>Bachelor's</p>
                <p>Economics</p>
                <p>2010</p>
                <p>2015</p>
                <p>4.0</p>
                <p>blah blah blah</p>
            </article>

            {posts.map(post => {
                return <PostItem post={post} />; 
            })}
        </div>
    )
}

export default withRouter(PostList); 