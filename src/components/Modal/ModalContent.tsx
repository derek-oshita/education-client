import React, { FormEvent, ChangeEvent, useState }from 'react'; 
import './Modal.css'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 
// import { getSuggestions, Suggestion } from '../Autocomplete/Suggestion-services'; 
// import Autocomplete from '../Autocomplete/Autocomplete'; 

// const renderSuggestion = (suggestion: Suggestion) => {
//     return `${suggestion.name} - ${suggestion.country}`
// }

interface AddPostProps {
    addPost: (nameOfSchool: Name, degree: Name, fieldOfStudy: string, newStartYear: Year, newEndYear: Year, newGrade: number, newDescriptionField: string) => void; 
}



const ModalContent: React.FC<ModalContentProps & RouteComponentProps & AddPostProps> = ({ setModalOpen, addPost }) => {
    // newsSchool
    const [newSchool, setNewSchool] = useState('');
    // newDegree
    const [newDegree, setNewDegree] = useState(''); 
    // newFieldOfStudy
    const [newFieldOfStudy, setNewFieldOfStudy] = useState(''); 
    // newStartYear
    const [newStartYear, setNewStartYear] = useState(2000); 
    // newEndYear 
    const [newEndYear, setNewEndYear] = useState(2020); 
    // newGrade
    const [newGrade, setNewGrade] = useState(0); 
    // newDescriptionField
    const [newDescriptionField, setNewDescriptionField] = useState(''); 

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

    const handleNewGrade = (e: ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.target.value)
        setNewGrade(num); 
    }

    const handleNewDescriptionField = (e: ChangeEvent<HTMLInputElement>) => {
        setNewDescriptionField(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addPost(newSchool, newDegree, newFieldOfStudy, newStartYear, newEndYear, newGrade, newDescriptionField); 
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
                
                <div className="number-field-div">
                {/* START YEAR */}
                <label htmlFor="startYear">Start Year: </label>
                <input id="startYear" type="number" value={newStartYear} onChange={handleNewStartYear} max="2020"/>

                {/* END YEAR */}
                <label htmlFor="endYear">End Year: </label>
                <input id="endYear" type="number" value={newEndYear} onChange={handleNewEndYear} max="2020"/>

                {/* GRADE / GPA */}
                <label htmlFor="grade">GPA: </label>
                <input id="grade" type="number" value={newGrade} onChange={handleNewGrade} max="4"/>
                </div>

                {/* DESCRIPTION FIELD */}
                <div></div>
                <label htmlFor="descriptionField">Description: </label>
                <input id="descriptionField" type="text" value={newDescriptionField} onChange={handleNewDescriptionField}/>
                
                {/* BUTTON */}
                <button onClick={handleSubmit} type="submit" className="btn modal-btn">Submit</button>
            </form>
        </div>
    )
}; 

export default withRouter(ModalContent); 




