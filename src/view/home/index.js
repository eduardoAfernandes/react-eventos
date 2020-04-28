import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Navbar from '../../components/navbar/index';
import EventoCard from '../../components/evento-card';
import firebase from '../../config/firebase'

function Home({match}) {
    const [pesquisa, setPesquisa] = useState('');
    const [eventos, setEventos] = useState([]);
    let listaEventos = [];
    const usuarioEmail = useSelector(state => state.usuarioEmail);


    useEffect(() => {

  
        if(match.params.parametro){
            firebase.firestore().collection('eventos').where('usuario','==',usuarioEmail).get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                   if(doc.data().titulo.indexOf(pesquisa) >= 0)
                   {
                   listaEventos.push({
                       id: doc.id,
                       ...doc.data()
                   })
                   }
               })
       
               setEventos(listaEventos);
           });
           
        }else{
            firebase.firestore().collection('eventos').get().then(async (resultado) => {
                await resultado.docs.forEach(doc => {
                   if(doc.data().titulo.indexOf(pesquisa) >= 0)
                   {                   
                   listaEventos.push({
                       id: doc.id,
                       ...doc.data()
                   })
                   }
               })
       
               setEventos(listaEventos);
           });
        }
               
    
    });


    return (
        <>
            <Navbar />
            <div className="container-fluid">

                <h3 className="text-center font-weight-bold my-3">Eventos Publicados</h3>

                <div className="row my-3 px-3">
                    <input type="text"  onChange={(e) => setPesquisa(e.target.value)} className="form-control text-center" placeholder="Pesquisar evento pelo título..." />
                </div>

                <div className="row">
                    {eventos.map(item => <EventoCard id={item.id} img={item.foto} titulo={item.titulo}
                        detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
                </div>
            </div>
        </>
    )
}


export default Home;