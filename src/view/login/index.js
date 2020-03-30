import React,{ useState } from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {

    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();

    function logar() {
        // alert("Logar");
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado =>{
            alert("Usuario Logado");
        }).catch(erro => {
            alert(erro);
        });
    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" className="form-control my-2" placeholder="Email" autoComplete />
                <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" autoComplete />

                <button onClick={logar} className="btn btn-lg btn-login btn-block" type="button">Logar</button>

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
