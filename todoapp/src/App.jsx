import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/index.jsx';
import Header from './components/Header/index.jsx';

function App() {
    const [mostrarFormulario, setMostrarFormulario] = useState(true); // Estado para controlar la visibilidad del formulario

    const registrarUsuario = (datos) => {
        console.log('Datos recibidos:', datos);
    };

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
        console.log(mostrarFormulario) // Invierte el estado actual de mostrarFormulario
    };

    return (
        <div>
            <Header toggleFormulario={toggleFormulario} />
            {mostrarFormulario && <Form registrarUsuario={registrarUsuario} />}
        </div>
    );
}

export default App;
