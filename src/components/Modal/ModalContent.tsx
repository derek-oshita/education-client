import React from 'react'; 
import './Modal.css'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

const ModalContent: React.FC<ModalContentProps & RouteComponentProps> = ({ setModalOpen }) => {
    return (
        <div className="modal">
            <p>Add New Education</p>
            <form>
                <button onClick={() => setModalOpen(false)} type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}; 

export default withRouter(ModalContent)

