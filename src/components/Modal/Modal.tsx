import React from 'react'; 
import { createPortal } from 'react-dom'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 
import './Modal.css'; 
import ModalContent from './ModalContent'; 
import styled from 'styled-components'; 

const Wrapper = styled.div`
    positon: absolute; 
    top: 0; 
    left: 0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: 100vw; 
    height: 100vh; 
    background: rgba(0,0,0,0.1); 
`

// with createPortal , document.body it shoves it to the bottom
// without, it forces it to the side???

const Modal: React.FC<ModalProps & RouteComponentProps> = ({ modalOpen, children }) => {
    if (!modalOpen) return null; 
    
    return (
        <Wrapper>
            {/* <ModalContent setModalOpen={() => false }/> */}
            {children}
        </Wrapper>
    )
}

export default withRouter(Modal); 