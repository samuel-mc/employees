import React from 'react';
import ConfirmDelete from './ConfirmDelete';
import '../styles/EmployeesContent.css';

const EmployeesContent = ({ employees, setShowConfirm, setEmployee, setShowModal }) => {

  const handleDelete = (id) => {
    setEmployee(id);
    setShowConfirm(true);
  };

  const handleEdit = (employee) => {
    setEmployee(employee);
    setShowModal(true)
  };

  return (
    <main className="content">
      {
        employees.length > 0 
        ?
          <table className="content__table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>NSS</th>
                <th>RFC</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.name} {employee.last_name}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.nss}</td>
                  <td>{employee.rfc}</td>
                  <td>
                    <button
                      className="button button--delete"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="button"
                      type="button"
                      onClick={() => handleEdit(employee)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        :
          <div className="content__empty">
            <p className="empty__message">No hay empleados registrados</p>
          </div>
      }
    </main>
  );
};

export default EmployeesContent;
