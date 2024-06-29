import React from 'react';
import './Header.css';
import Button from '../Buttom/index.jsx';

function Header() {
    return (
        <header className="header">
            <img src="/img/FrelujHeader.png" alt="Org" />
            <div className="buttons">
                <Button className="buttom-header">Login</Button>
                <Button className="buttom-header">Sign In</Button>
            </div>
        </header>
    );
}

export default Header;
