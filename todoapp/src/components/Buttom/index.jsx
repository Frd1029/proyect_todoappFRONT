// components/Button/index.jsx
import React from 'react';
import './Buttom.css';

const Button = ({ children }) => {
    return (
        <button type="submit" className="button">
            {children}
        </button>
    );
};

export default Button;
