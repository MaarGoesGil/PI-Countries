import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';
import flag from '../../img/bandera.png';


export default function Countries({ paises }) {
    useEffect(() => {
        setPaises(paises)
    }, [paises])

    const [paisesp, setPaises]= useState(paises)
    var start = 0; 
    var array = [];
    var swap = true;
    var i = 10;

    function DIVIDIR(p,a,b) {
        array.push(p.slice(a,b));
    }; 

    while(swap===true){
        DIVIDIR(paises,start,i,swap)
        start=start+10;
        i=i+10;
        if(start>paises.length-1){swap=false;}
    }  

    function paginado(e){
        e.preventDefault();        
        setPaises(array[e.target.name])
    }

    return (
        <div className="container-grid">


{/*  --------- No hay paises -------  */}

        { paises.length < 1 && <div className='NotCountries'>
            <h1>No se encontraron paises</h1>
            <img src={flag} alt='NotCountries'/>
        </div>

        }
           

{/*  --------- Paises filtrados -------  */}
        <div className="grid">
                {
                paisesp.length > 0 && paisesp.slice(0,10).map(e=> {
                                return <Country key={e.id + 'filter'} pais={e} />
                    }) 
                }
                
{/*  --------- Primeros 10 paises -------  */}

                { 
                paisesp.length < 0 && paises.slice(0,10).map(e=> {
                        return <Country key={e.id + 'filter'} pais={e} /> })
                }
                
            </div>
            
{/*  --------- Paginado de paises -------  */}

            {array?.map((e,i)=>{return (<button className='botonPaginado' key={'paginado'+ i} name={i} onClick={paginado}> {i+1} </button>) }) }
        </div>
    )
}