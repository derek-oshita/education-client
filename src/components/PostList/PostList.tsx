import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
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



const posts: Array<Post> = [
    {
        nameOfSchool: 'Nevada', 
        degree: 'bachelor\'s', 
        fieldOfStudy: 'International Business', 
        startYear: 2010, 
        endYear: 2015, 
        grade: 4, 
        descriptionField: 'Mostly binge drinking...'
    }, 
    {
        nameOfSchool: 'General Assembly', 
        degree: 'Certificate', 
        fieldOfStudy: 'Computer Science', 
        startYear: 2020, 
        endYear: 2020, 
        grade: 4, 
        descriptionField: 'SEI 12!'
    }
]

const PostList: React.FC = () => {
    return(
        <div className="sidebar">
            <h2>PostList Component</h2>
            <PostItem post={posts[0]}/>
        </div>
    )
}

export default withRouter(PostList); 