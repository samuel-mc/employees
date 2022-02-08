import React from 'react';
import Modal from './Modal';

const ConfirmDelete = ({ id, deleteEmployee, setShowConfirm }) => {
    
    const handleDelete = () => {
        deleteEmployee(id);
        setShowConfirm(false);
    };

    return (
        <Modal>
            <div className="modal__header">
                <p>¿Estás Seguro?</p>
            </div>
            <div className="modal__body">
                <button className="button button--primary" type="button"onClick={handleDelete}>Sí</button>
                <button className="button button--secondary" onClick={() => setShowConfirm(false)}>No</button>
            </div>
        </Modal>
    );
}

export default ConfirmDelete;