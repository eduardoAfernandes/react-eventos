import React, { useState } from 'react';
import './register.css';
import firebase from '../../config/firebase';
import 'firebase/auth';
import gifLoading from '../../assets/loading.gif';
import Navbar from '../../components/navbar/index'

function Register() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {
        setMsgTipo(null);
        setCarregando(1);

        if (!email || !senha) {
            setMsgTipo('erro');
            setMsg('Voce precisa informar o email e a senha para prosseguir com o cadastro');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('sucesso');
        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('erro');

            if (erro.code === "auth/email-already-in-use") {
                setMsg("Email já está em uso!")
            } if (erro.code === "auth/invalid-email") {
                setMsg("Formato de email inválido!")
            } if (erro.code === "auth/weak-password") {
                setMsg("Senha deve conter no minimo 6 caracteres")
            }

        });
    }

    return (
        <>
        <Navbar/>
        <div className="form-cadastro">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Senha" />

                {
                    carregando ?       <div className="text-center">
                    <img src={gifLoading} />
                </div>
                :
                <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro" >Cadastrar</button>

                }
          

                <div className="msg-login text-black text-center my-5">
                    {msgTipo === 'sucesso' && <span><strong>WOW!</strong> Usuário cadastrado com sucesso ! &#128526;</span>}
                    {msgTipo === 'erro' && <span><strong>OPS!</strong> {msg} &#128546;</span>}

                </div>

            </form>
        </div>
        </>
    )
}

export default Register;