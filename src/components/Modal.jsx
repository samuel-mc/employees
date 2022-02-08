import React from 'react';
import '../styles/Modal.css';

const Modal = ({ children }) => (
    <div className="modal">
        <div className="modal__content">
            {children}
        </div>
    </div>
);

export default Modal;
