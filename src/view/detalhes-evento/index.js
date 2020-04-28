import React, { useState } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/index';
// React Redux
import { useSelector } from 'react-redux';
import './detalhes-evento.css';


export default function detalhesEvento() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <img src="https://via.placeholder.com/150x100" className="img-banner" alt="Banner" />
                </div>

                <div className="row mt-5 d-flex justify-content-around">
                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-ticket-alt fa-2x"></i>
                        <h5><strong>Tipo</strong></h5>
                        <span className="mt-3">Festa</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-calendar-alt fa-2x"></i>
                        <h5><strong>Data</strong></h5>
                        <span className="mt-3">10/10/2020</span>
                    </div>

                    <div className="col-md-3 col-sm-12 box-info p-3 my-2">
                        <i className="fas fa-clock fa-2x"></i>
                        <h5><strong>Hora</strong></h5>
                        <span className="mt-3">20:00</span>
                    </div>
                </div>

                <div className="row box-detalhes mt-5">
                    <h5 className="mx-auto"><strong>Detalhes do evento</strong></h5>
                    <p className="text-justify p-3">
                        Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Diuretics paradis num copo é motivis de denguis. Si num tem leite então bota uma pinga aí cumpadi! Per aumento de cachacis, eu reclamis.
    
    Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Suco de cevadiss deixa as pessoas mais interessantis. Pra lá , depois divoltis porris, paradis.
                    </p>
                </div>


                <Link to="" className="btn-editar"><i className="fas fa-pen-square fa-3x"></i></Link>
            </div>
        </>
    )
}