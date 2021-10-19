import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';
import './Countries.css';
import loader from '../../img/loader.gif';
import Form from '../Form/Form';

export default function Countries() {
  const [state, setState] = useState();
  useEffect(() => {
    fetch(`http://localhost:3001/countries`)
      .then(response => response.json())
      .then(res => {
        setState(res)
      }).catch(error => { console.log(error) })
  }, [])
  if (state) { var paises = state.slice(0, 9) }
  return (
    <div className="container">
      <h1 className='title'>  Paises  </h1>
       <Form />
      {
        paises ?
          <div className="countries">
            {paises.map((p, i) => { return <Country key={i + 'countryID'} pais={p} /> })}
          </div>
          :
          <div className="containerLoader">
            <img className="loader" src={loader} alt={'icon loader'} />
          </div>
      }
    </div>
  )
}