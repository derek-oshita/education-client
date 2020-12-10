import React, { useState } from 'react'; 
// import { TextField } from '../TextField/TextField'; 
import ShowName from '../ShowName/ShowName'
import TextField from '../TextField/TextField'; 
import { NavLink, Link } from 'react-router-dom'; 
import Button from '../Button/Button'; 
import './Home.css'; 

// function Home () {
//     const [name, setName] = useState(''); 
//     return (
//         <div>
//             <h1 className="home-header animate__animated animate__fadeInDown">Welcome to Education Showwcase</h1>
//             <p className="sub-header">Type your name and click "Enter" to begin!</p>
//             {/* <TextField setName={setName}/> */}
//             <TextField />
//             <div className="container">
//                 <Link to='/index'>
//                 {/* <Link to = {{
//                     pathname: "/index", 
//                     state: {
//                         name: name
//                     }
//                 }}> */}
//                     <Button />
//                 </Link>
//             </div>
//         </div>
//     )
// }

const Home: React.FC = () => {
    return (
        <div>
            <h1 className="home-header animate__animated animate__fadeInDown">Welcome to Education Showwcase</h1>
            <p className="sub-header">Type your name and click "Enter" to begin!</p>
            <TextField />
            <div className="container">
                <Link to='/index'>
                {/* <Link to = {{
                    pathname: "/index", 
                    state: {
                        name: name
                    }
                }}> */}
                    <Button />
                </Link>
            </div>
            <ShowName />
        </div>
    )
}

export default Home; 