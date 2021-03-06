import React, { useState, useEffect } from 'react';
import './evento-card.css';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';
import { useSelector, useDispatch } from 'react-redux';
import loadingGif from '../../assets/loading.gif';


export default function EventoCard({ id, img, titulo, detalhes, visualizacoes }) {

    const [urlImagem, setUrlImagem] = useState();
    const [carregando, setCarregando] = useState(1);


    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => {
            setUrlImagem(url)
            setCarregando(0);
        });
    },[urlImagem]);

    return (
            <div className="col-md-3 col-sm-12 mt-4">
                {
                    carregando ?
                    <img src={loadingGif} />
                    :
                <img src={urlImagem} className="card-img-top img-cartao" alt="Imagem do Evento" />
                }
                <div className="card-body">
                    <h5>{titulo}</h5>
                    <hr></hr>
                    <p className="card-text text-justify">
                        {detalhes}
                    </p>

                    <div className="row rodape-card d-flex align-items-center">
                        <div className="col-6">
                            <Link to={`/show-event/` + id} className="btn btn-sm btn-detalhes">+ detalhes</Link>
                        </div>

                        <div className="col-6 text-right">
                            <i class="fas fa-eye"></i><span> {visualizacoes} </span>
                        </div>
                </div>
            </div>
        </div>
    )
}