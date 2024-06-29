// App.jsx
import React from 'react';
import './App.css';
import Form from './components/Form/index.jsx';
import Header from './components/Header/index.jsx';

function App() {
    const registrarUsuario = (datos) => {
        console.log('Datos recibidos:', datos);
    };

    return (
        <div>
            <Header />
            <Form registrarUsuario={registrarUsuario} />
        </div>
    );
}

export default App;
