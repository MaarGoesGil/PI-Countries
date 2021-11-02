import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

export default function Country({ pais }) {
    if (!pais){
        return (        
            <div className="country">
                <div className="country-id">
                    <h1>No se encontro el pais</h1>
                </div>
            </div>
            )
    }
    else {
        return (

        <Link to={`/countries/${pais.id}`} key={'LinkToId' + pais.id}>
            <div className="country">
            <div className="country-id">
                    <h1>{pais?.nombre.toUpperCase()}</h1>
                    <h3>Continente: {pais.continente}</h3>
                    {pais.img ?
                        <div className="container-img">
                            <img src={pais.img} alt={`bandera de ${pais.nombre}`} />
                        </div>
                        :
                        <div className="loader">
                            <img src={`../images/loader.gif`} alt='Loader' />
                        </div>
                    }
                </div>
            </div>
        </Link> 

    )}
}

