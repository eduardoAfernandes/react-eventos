import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';



function Navbar() {

    const dispatch = useDispatch();


    const email = useSelector(state => state.usuarioEmail);

    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/"><i class="far fa-smile-wink text-white fa-2x"></i></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                <i class="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">

                {
                    useSelector(state => state.usuarioLogado) > 0 ?

                    // Menu para que esta logado
                        <>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ml-2"><Link className="nav-link links" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link links" to="/create-event">Publicar Evento</Link></li>
                                <li className="nav-item"><Link className="nav-link links" to="">Meus Eventos</Link></li>
                            </ul>                        
                            <div class="btn-group dropleft">
                                <button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {email}
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" onClick={() => dispatch({ type: 'LOG_OUT',})}>Sair</a>
                                </div>
                            </div>
                        </>

                        :
                        // Menu para que esta deslogado
                        <>
                            <ul className="navbar-nav mr-auto">

                                <li className="nav-item ml-2"><Link className="nav-link links" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link links" to="login">Login</Link></li>
                                <li className="nav-item"><Link className="nav-link links" to="register">Cadastrar</Link></li>
                            </ul>

                        </>


                }

            </div>
        </nav>)
}

export default Navbar;