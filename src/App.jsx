import React from 'react';
import useIntialState from './hooks/useIntialState';
import Header from './components/Header';
import EmployeesContent from './components/EmployeesContent';
import ConfirmDelete from './components/ConfirmDelete';
import ModalForm from './components/ModalForm';
import './styles/App.css';

function App() {
  const initialState = useIntialState();
  const { 
    employees, 
    deleteEmployee,
    updateEmployee,
    addEmployee,
  } = initialState; // Destructuring de empleados y de la funcion para eliminartlos.
  
  const [showConfirm, setShowConfirm] = React.useState(false); // Estado para mostrar el modal de confirmacion al eliminar.
  const [showModal, setShowModal] = React.useState(false); // Estado para mostrar el modal de formulario.
  const [employee, setEmployee] = React.useState({}); // Estado para guardar el empleado que se va a editar o a eliminar.

  return (
    <div className="App">
      <Header
        setShowModal={setShowModal}
      />
      { showModal && 
        <ModalForm
          employee={employee}
          setShowModal={setShowModal}
          addEmployee={addEmployee}
          setEmployee={setEmployee}
          updateEmployee={updateEmployee}
        />
      }
      { showConfirm && 
        <ConfirmDelete
          id={employee}
          deleteEmployee={deleteEmployee}
          setShowConfirm={setShowConfirm}
        />
      }
      <EmployeesContent
        employees={employees}
        setEmployee={setEmployee}
        setShowConfirm={setShowConfirm}
        setShowModal={setShowModal}
      />
    </div>
  );
}

export default App;
