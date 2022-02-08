import React from 'react';
import '../styles/Header.css';

const Header = ({ setShowModal }) =>
(
    <header className="header">
        <h1> Empleados </h1>
        <button 
            type="button" 
            className="button button--add"
            onClick={() => setShowModal(true)}
        > Agregar</button>
    </header>
);


export default Header;
