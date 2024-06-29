// components/Form/index.jsx
import React, { useState } from 'react';
import './Form.css';
import TextField from '../TextField/index.jsx';
import Button from '../Buttom/index.jsx';

const Form = ({ registrarUsuario }) => {
    const [nombre, actualizarNombre] = useState('');
    const [apellidos, actualizarApellidos] = useState('');
    const [correo, actualizarCorreo] = useState('');
    const [celular, actualizarCelular] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            apellidos,
            correo,
            celular
        };
        registrarUsuario(datosAEnviar);
    };

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario con tus datos.</h2>
                <TextField
                    titulo="Nombres"
                    placeholder="Ingresar nombres"
                    required={true}
                    valor={nombre}
                    actualizarValor={actualizarNombre}
                />
                <TextField
                    titulo="Apellidos"
                    placeholder="Ingresar apellidos"
                    required={true}
                    valor={apellidos}
                    actualizarValor={actualizarApellidos}
                />
                <TextField
                    titulo="Correo Electrónico"
                    placeholder="Ingresar correo electrónico"
                    required={true}
                    valor={correo}
                    actualizarValor={actualizarCorreo}
                />
                <TextField
                    titulo="Celular"
                    placeholder="Ingresar celular"
                    required={true}
                    valor={celular}
                    actualizarValor={actualizarCelular}
                />
                <Button>Enviar</Button>
            </form>
        </section>
    );
};

export default Form;
