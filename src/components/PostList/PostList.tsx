import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import './PostList.css'; 

const PostList: React.FC = () => {
    return(
        <div className="sidebar">
            <h2>PostList Component</h2>
        </div>
    )
}

export default withRouter(PostList); 