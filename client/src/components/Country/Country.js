import React from 'react';
import './Country.css';

export default function Country({ pais }) {
    return (
        <div className="container">
            {
                pais ?
                    <div className="country">
                        <h1>{pais.nombre.toUpperCase()}</h1>
                        <h3>Continente: {pais.continente}</h3>
                        <img src={pais.img} alt={`bandera de ${pais.nombre}`} />
                    </div> :
                    <div className="loader">
                        <img src={`../images/loader.gif`}/>
                    </div>
            }
        </div>
    )
}