import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/index';
// React Redux
import { useSelector } from 'react-redux';
import './detalhes-evento.css';
import loadingGif from '../../assets/loading.gif';


export default function DetalhesEvento(props) {
    const [evento, setEvento] = useState({});
    const [urlImg, setUrlImg] = useState({});
    const usuarioLogado = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState(1);

    useEffect(() => {
        if(carregando){        
        firebase.firestore().collection('eventos').doc(props.match.params.id).get().then(resultado => {
            setEvento(resultado.data())
            firebase.firestore().collection('eventos').doc(props.match.params.id).update('visualizacoes',resultado.data().visualizacoes + 1)
            firebase.storage().ref(`imagens/${resultado.data().foto}`).getDownloadURL().then(url => {
                setUrlImg(url)
                setCarregando(0);
            });
        });
    }else{
        firebase.storage().ref(`imagens/${evento.foto}`).getDownloadURL().then(url =>  setUrlImg(url))
    }
    },[])

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                {
                    carregando ?
                        <div className="row">
                            <div className="col-12 mt-5 text-center">
                                <img src={loadingGif} />
                                <h3><strong>Carregando Evento...</strong></h3>
                            </div>
                        </div>
                        :
                        <div>
                            <div className="row">
                                <img src={urlImg} className="img-banner" alt="Banner" />
                                <div className="col-12 text-right mt-1 visualiacoes">
                                    <i class="fas fa-eye"></i> <span>{evento.visualizacoes + 1}</span>
                                </div>
                                <h3 className="mx-auto mt-4"><strong>{evento.titulo}</strong></h3>
                            </div>

                            <div className="row mt-5 d-flex justify-content-around">
                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-ticket-alt fa-2x"></i>
                                    <h5><strong>Tipo</strong></h5>
                                    <span className="mt-3">{evento.titulo}</span>
                                </div>

                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-calendar-alt fa-2x"></i>
                                    <h5><strong>Data</strong></h5>
                                    <span className="mt-3">{evento.data}</span>
                                </div>

                                <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                                    <i className="fas fa-clock fa-2x"></i>
                                    <h5><strong>Hora</strong></h5>
                                    <span className="mt-3">{evento.hora}</span>
                                </div>
                            </div>

                            <div className="row box-detalhes mt-5">
                                <div className="col-12 text-center">
                                    <h5 className="mx-auto mt-4"><strong>Detalhes do Evento</strong></h5>
                                </div>

                                <div className="col-12 text-center">
                                    <p>{evento.detalhes}</p>
                                </div>
                            </div>

                            {
                                usuarioLogado === evento.usuario ?
                                    <Link to="" className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
                                    : ''
                            }
                        </div>
                }
            </div>
        </>
    )
}