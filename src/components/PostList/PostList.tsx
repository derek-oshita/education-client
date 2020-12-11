import React, { useState } from 'react'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 
import PostItem from '../PostItem/PostItem'; 
import './PostList.css'; 

// type PostItemProps = {
//     nameOfSchool: string; 
//     degree: string; 
//     fieldOfStudy: string; 
//     startYear: number; 
//     endYear: number; 
//     grade: number; 
//     descriptionField: string; 
// }



// const initialPosts: Array<Post> = [
//     {
//         nameOfSchool: 'Nevada', 
//         degree: 'bachelor\'s', 
//         fieldOfStudy: 'International Business', 
//         startYear: 2010, 
//         endYear: 2015, 
//         grade: 4, 
//         descriptionField: 'Mostly binge drinking...'
//     }, 
//     {
//         nameOfSchool: 'General Assembly', 
//         degree: 'Certificate', 
//         fieldOfStudy: 'Computer Science', 
//         startYear: 2020, 
//         endYear: 2020, 
//         grade: 4, 
//         descriptionField: 'SEI 12!'
//     }
// ]

interface PostListProps {
    posts: Array<Post>; 
}

const PostList: React.FC<PostListProps & RouteComponentProps> = ({ posts }) => {
    // const [posts, setPosts] = useState(initialPosts); 

    // const newPost = posts.map( post => {
    //     return {
    //         ...post
    //     }
    // })

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