import React from 'react'; 
import './Modal.css'; 
import { withRouter } from 'react-router-dom'; 

const ModalContent: React.FC = () => {
    return (
        <div className="table">
            <p>Add New Education</p>
            <form>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}; 

export default withRouter(ModalContent)

