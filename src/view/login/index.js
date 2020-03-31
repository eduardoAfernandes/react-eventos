import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import { Link, Redirect } from 'react-router-dom';
// React Redux
import { useSelector, useDispatch } from 'react-redux';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const dispatch = useDispatch();

    function logar() {
        // alert("Logar");
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() => {
                // Salva no Store dados do login, caso seja efetuado
                dispatch({ type: 'LOG_IN', usuarioEmail: email })
            }, 2000);
            
        }).catch(erro => {
            setMsgTipo('erro');
        });

    }

    return (
        <div className="login-content d-flex align-items-center">

            {/* Caso usuario esteja logado, efetua o direcionamento abaixo para a tela de Home */}
            {
                useSelector(state => state.usuarioLogado) > 0 ? <Redirect to="/" /> : null

            }
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" autoComplete='true' />
                <input onChange={(e) => setSenha(e.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" autoComplete='true' />

                <button onClick={logar} className="btn btn-lg btn-login btn-block" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Voce está conectado! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>OPS!</strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>}

                </div>


                <div className="opcoes-login mt-2 text-center">
                    <a href="#" className="mx-2">Recuperar Senha</a>
                    <span className="py-2 text-white">&#9828;</span>
                    <Link to="register" className="mx-2">Quero Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
