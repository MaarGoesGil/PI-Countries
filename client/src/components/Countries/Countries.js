import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';


export default function Countries({ paises }) {

    useEffect(() => {
        setPaises(paises)},[paises])

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
            <div className="grid">
                { 
                    paisesp.slice(0,10).map(e=> {
                                return <Country key={e.id + 'filter'} pais={e} />
                    })
                }
                
            </div>
            {array?.map((e,i)=>{return (<button className='botonPaginado' key={'paginado'+ i} name={i} onClick={paginado}> {i+1} </button>) }) }
        </div>
    )
}