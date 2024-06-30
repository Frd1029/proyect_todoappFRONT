import { useState } from "react"
import './Header.css';
import Button from '../Buttom/index.jsx';

function Header({ toggleFormulario }) {
    return (
        <header className="header">
            <img src="/img/FrelujHeader.png" alt="Org" />
            <div className="buttons">
                <Button className="button-header">Login</Button>
                <Button className="button-header" onClick={console.log("Si sirvo")}>Sign In</Button>
            </div>
        </header>
    );
}

export default Header;
