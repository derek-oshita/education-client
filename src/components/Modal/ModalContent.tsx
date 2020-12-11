import React, { FormEvent, ChangeEvent, useState }from 'react'; 
import './Modal.css'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

interface AddPostProps {
    addPost: (nameOfSchool: string, degree: string, fieldOfStudy: string, newStartYear: number, newEndYear: number ) => void; 
}

const ModalContent: React.FC<ModalContentProps & RouteComponentProps & AddPostProps> = ({ setModalOpen, addPost }) => {
    // newsSchool
    const [newSchool, setNewSchool] = useState('');
    // newDegree
    const [newDegree, setNewDegree] = useState(''); 
    // newFieldOfStudy
    const [newFieldOfStudy, setNewFieldOfStudy] = useState('')
    // newStartYear
    const [newStartYear, setNewStartYear] = useState(2000); 
    // newEndYear 
    const [newEndYear, setNewEndYear] = useState(2020); 


    const handleSchool = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSchool(e.target.value)
    } 

    const handleDegree = (e: ChangeEvent<HTMLInputElement>) => {
        setNewDegree(e.target.value)
    }

    const hanleNewFieldOfStudy = (e: ChangeEvent<HTMLInputElement>) => {
        setNewFieldOfStudy(e.target.value)
    }

    const handleNewStartYear = (e: ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.target.value)
        setNewStartYear(num); 
    }

    const handleNewEndYear = (e: ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.target.value)
        setNewEndYear(num); 
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addPost(newSchool, newDegree, newFieldOfStudy, newStartYear, newEndYear); 
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


                {/* FIELD OF STUDY */}
                <label htmlFor="fieldOfStudy">Major: </label>
                <input id="fieldOfStudy" type="text" value={newFieldOfStudy} onChange={hanleNewFieldOfStudy}/>
                
                {/* START YEAR */}
                <label htmlFor="startYear">Start Year: </label>
                <input id="startYear" type="number" value={newStartYear} onChange={handleNewStartYear} max="2020"/>

                {/* END YEAR */}
                <label htmlFor="endYear">End Year: </label>
                <input id="endYear" type="number" value={newEndYear} onChange={handleNewEndYear} max="2020"/>
                
                {/* BUTTON */}
                <button onClick={handleSubmit} type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}; 

export default withRouter(ModalContent)




