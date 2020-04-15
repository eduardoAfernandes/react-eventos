import React, { useState, useEffect } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/index';
import EventoCard from '../../components/evento-card';
import firebase from '../../config/firebase'

function Home() {

    const [eventos, setEventos] = useState([]);
    let listaEventos = [];

    useEffect(() => {
        firebase.firestore().collection('eventos').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaEventos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setEventos(listaEventos);
        })
    });

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    {eventos.map(item => <EventoCard key={item.id} img={item.foto} titulo={item.titulo} 
                     detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
                </div>
            </div>
        </>
    )
}


export default Home;