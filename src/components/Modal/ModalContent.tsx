import React, { FormEvent, ChangeEvent, useState }from 'react'; 
import './Modal.css'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

interface AddPostProps {
    addPost: (nameOfSchool: string, newStartYear: number ) => void; 
}

const ModalContent: React.FC<ModalContentProps & RouteComponentProps & AddPostProps> = ({ setModalOpen, addPost }) => {
    // need to consider adding more hooks in order to get all of the information 
    const [newSchool, setNewSchool] = useState('');
    const [newStartYear, setNewStartYear] = useState<number>(0); 

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        // setNewSchool(e.target.value)
        // conditional statement here around the type of value 
        if (typeof e.target.value === 'string') {
            setNewSchool(e.target.value)
        } else if (typeof e.target.value === 'number') {
            setNewStartYear(e.target.value)
        }
    } 

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addPost(newSchool, newStartYear); 
        setModalOpen(false); 
    }

    return (
        <div className="modal">
            <p>Add New Education</p>
            <form>
                <input type="text" value={newSchool} onChange={handleChange}/>
                <input type="text" value={newStartYear}/>
                {/* <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/> */}
                {/* this had setModalOpen(false) */}
                <button onClick={handleSubmit} type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}; 

export default withRouter(ModalContent)

