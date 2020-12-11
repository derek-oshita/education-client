import React, { FormEvent, ChangeEvent, useState }from 'react'; 
import './Modal.css'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

interface AddPostProps {
    addPost: (nameOfSchool: string, degree: string, newStartYear: number ) => void; 
}

const ModalContent: React.FC<ModalContentProps & RouteComponentProps & AddPostProps> = ({ setModalOpen, addPost }) => {
    // newsSchool
    const [newSchool, setNewSchool] = useState('');
    // newDegree
    const [newDegree, setNewDegree] = useState(''); 
    // newStartYear
    const [newStartYear, setNewStartYear] = useState(2000); 


    const handleSchool = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSchool(e.target.value)
    } 

    const handleDegree = (e: ChangeEvent<HTMLInputElement>) => {
        setNewDegree(e.target.value)
    }

    const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.target.value)
        setNewStartYear(num); 
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addPost(newSchool, newDegree, newStartYear); 
        setModalOpen(false); 
    }

    return (
        <div className="modal">
            <p>Add New Education</p>
            {/* FORM STARTS HERE */}
            <form>

                {/* NAME OF SCHOOL */}
                <label htmlFor="newSchool">Name of School: </label>
                <input id="newSchool" type="text" value={newSchool} onChange={handleSchool}/>

                {/* DEGREE */}
                <label htmlFor="degree">Degree: </label>
                <input id="degree" type="text" value={newDegree} onChange={handleDegree}/>


                <input type="number" value={newStartYear} onChange={handleNumberChange} max="2020"/>
                
                {/* BUTTON */}
                <button onClick={handleSubmit} type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}; 

export default withRouter(ModalContent)




