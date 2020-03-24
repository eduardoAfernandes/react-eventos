import React from 'react';
import './login.css'

function Login() {
    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <img className="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />

                <button className="btn btn-lg btn-login btn-block" type="submit">Entrar</button>

            <div className="msg-login text-white text-center my-5">
                <span><strong>WOW!</strong> Voce está conectado! &#128526;</span> <br></br>
                <span><strong>OPS!</strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>

            </div>


                <div className="opcoes-login mt-2 text-center">
                    <a href="#" className="mx-2">Recuperar Senha</a>
                    <span className="py-2 text-white">&#9828;</span>
                    <a href="#" className="mx-2">Quero Cadastrar</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
