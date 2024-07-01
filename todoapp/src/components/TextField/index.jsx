// components/TextField/index.jsx
import React from 'react';
import './TextField.css';

//{ title, placeholder, required, valor, updateValue }

const TextField = (props) => {
    const placeholderModified = `${props.placeholder}`

    const handleChange = (e) => {
        props.updateValue(e.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.title}</label>
            <input
                type="text"
                placeholder={placeholderModified}
                required={props.required}
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
};

export default TextField;
