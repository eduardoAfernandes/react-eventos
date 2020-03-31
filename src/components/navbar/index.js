import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <span className="navbar-brand text-white font-weight-bold" href="#"><Link className="link-home" to="/">Eventos</Link></span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <i class="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link links" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link links" to="login">Login</Link></li>
                    <li className="nav-item"><Link className="nav-link links" to="register">Cadastrar</Link></li>
                </ul>
                <span class="navbar-text text-light">
                    Olá, {useSelector(state => state.usuarioEmail)}
    </span>
            </div>
        </nav>)
}

export default Navbar;