import React from 'react'; 
import { createPortal } from 'react-dom'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 
import './Modal.css'; 
import ModalContent from './ModalContent'; 

const Modal: React.FC<ModalProps & RouteComponentProps> = ({ modalOpen, children }) => {
    if (!modalOpen) return null; 
    
    return createPortal (
        <ModalContent />, 
        document.body
    )
}

export default withRouter(Modal); 