import React from 'react'; 
import styled from 'styled-components'; 
import { createPortal } from 'react-dom'; 
import { withRouter, RouteComponentProps } from 'react-router-dom'; 

import './Modal.css'; 


const Wrapper = styled.div`
    positon: absolute; 
    top: 0; 
    left: 0; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    width: 50vw; 
    height: 60vh; 
`

const Modal: React.FC<ModalProps & RouteComponentProps> = ({ modalOpen, children }) => {
    if (!modalOpen) return null; 
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default withRouter(Modal); 