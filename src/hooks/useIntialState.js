import { useState } from 'react';

const useIntialState = () => {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'Kellin',
            last_name: 'Quinn',
            phone: '55 10 10 10 10',
            nss: '123456789',
            rfc: 'ABCDEFGHIJKLMN',
        },
    ]);

    const addEmployee = (employee) => {
        employee.id = employees.length + 1;
        setEmployees([...employees, employee]);
    };

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id));
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map(employee => (employee.id === id ? updatedEmployee : employee)));
    };

    return {
        employees,
        addEmployee,
        deleteEmployee,
        updateEmployee
    };
}

export default useIntialState;
