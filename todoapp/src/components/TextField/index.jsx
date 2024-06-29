// components/TextField/index.jsx
import React from 'react';
import './TextField.css';

const TextField = ({ titulo, placeholder, required, valor, actualizarValor }) => {
    return (
        <div className="text-field">
            <label>{titulo}</label>
            <input
                type="text"
                placeholder={placeholder}
                required={required}
                value={valor}
                onChange={(e) => actualizarValor(e.target.value)}
            />
        </div>
    );
};

export default TextField;
