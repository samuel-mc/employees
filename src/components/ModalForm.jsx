import React from 'react';
import Modal from './Modal';

import '../styles/ModalForm.css';

const ModalForm = ({
  employee,
  setShowModal, 
  setEmployee,
  addEmployee,
  updateEmployee
}) => {
  
  const [ newEmployeeState, setNewEmployeeState ] = React.useState(employee || {
    id: '',
    name: '',
    last_name: '',
    phone: '',
    nss: '',
    rfc: '',
  });
  
  const handleCancel = () => {
    setShowModal(false);
    setEmployee({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployeeState({ ...newEmployeeState, [name]: value });
  };

  const verifyForm = () => {
    const { name, last_name, phone, nss, rfc } = newEmployeeState;
    return name && last_name && phone && nss && rfc;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!verifyForm()) {
      alert('Por favor, llene todos los campos.');
    } else {
      if (employee.id) {
        updateEmployee( employee.id, newEmployeeState);
      } else {
        addEmployee(newEmployeeState);
      }
      setShowModal(false);
    }
  };

  return (
  <Modal>
    <div className="modal__header">
      <p>{employee.id ? 'Editar' : 'Agregar'} Empleado</p>
    </div>
    <div className="modal__body">
      <form action="">
        <div className="form__group">
          <label htmlFor="name">Nombre</label>
          <input 
            value={newEmployeeState.name || ''}
            type="text" 
            name="name" 
            id="name"
            onChange={e => handleChange(e)} 
            placeholder="Diego"
          />
        </div>
        <div className="form__group">
          <label htmlFor="last_name">Apellido</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="last_name"
            id="last_name"
            value={newEmployeeState.last_name || ''}
            placeholder="Garcia"
          />
        </div>
        <div className="form__group">
          <label htmlFor="phone">Teléfono</label>
          <input onChange={e => handleChange(e)}
            type="text"
            name="phone"
            id="phone"
            value={newEmployeeState.phone || ''}
            placeholder="55 10 10 10 10"
          />
        </div>
        <div className="form__group">
          <label htmlFor="nss">NSS</label>
          <input
            onChange={e => handleChange(e)}
            type="text" 
            name="nss" 
            id="nss"
            value={newEmployeeState.nss || ''}
            placeholder="96149602474"
          />
        </div>
        <div className="form__group">
          <label htmlFor="rfc">RFC</label>
          <input
            onChange={e => handleChange(e)}
            type="text"
            name="rfc"
            id="rfc"
            value={newEmployeeState.rfc || ''}
            placeholder="MECS123456789"
          />
        </div>
        <div className="form__group form__buttons">
          <button
            type="button"
            className="button button--primary"
            onClick={e => handleSubmit(e)}
          >Guardar</button>
          <button
            type="button"
            className="button button--secondary"
            onClick={handleCancel}
          >Cancelar</button>
        </div>
      </form>
    </div>
  </Modal>

)};

export default ModalForm;
