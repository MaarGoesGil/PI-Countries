import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { init } from '../../actions/actions';
import FormActivity from '../FormActivity/FormActivity';

/* 
__Ruta de creación de actividad turística__: debe contener
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- [ ] Posibilidad de seleccionar/agregar varios países en simultaneo
- [ ] Botón/Opción para crear una nueva actividad turística
 */

function Activity({ paises, init }) {

  //------ Carga Paises de la Base de datos -------------

  useEffect(() => {
    init()
  }, [])

  // --------------------- Estados ----------------------

  const [concat, setConcat] = useState({
    horas: '', minutos: ''
  });
  const [inputs, setInputs] = useState({
    nombre: '',
    temporada: '',
    dificultad: '',
    duracion: '',
    paises: []
  })
  const [errors, setErrors] = useState({
    'nombre': '',
    'dificultad': '',
    'horas': '',
    'minutos': '',
  })

  // ------------ Funciones para el Formulario -------------------------------

  // ------------ Funcion para testeo de Errores -----------------------------

  function handleErrors(e) {
    if (e.target.name === 'nombre') {
      let destruct = e.target.value.split('');
      if (e.target.value.length < 1 || destruct.includes('1') || destruct.includes('2') || destruct.includes('3') || destruct.includes('4') || destruct.includes('5') || destruct.includes('6') || destruct.includes('7') || destruct.includes('8') || destruct.includes('9') || destruct.includes('0')) {
        setErrors({ ...errors, nombre: 'Debe ingresar un nombre valido' });
      }
      else { setErrors({ ...errors, nombre: '' }) }
    }
    if (e.target.name === 'dificultad') {
      if (e.target.value.length < 1 || e.target.value > 5) {
        setErrors({ ...errors, dificultad: 'Debe ingresar un valor entre 1 - 5' })
      }
      else { setErrors({ ...errors, dificultad: '' }) }
    }

    if (e.target.name === 'horas') {
      if (e.target.value > 23 || e.target.value < 0) {
        setErrors({ ...errors, horas: 'Debe ingresar un valor menor que 24 y mayor a 00' })
      }
      else { setErrors({ ...errors, horas: '' }) }
    }
    if (e.target.name === 'minutos') {
      if (e.target.value >= 60 || e.target.value < 0) {
        setErrors({ ...errors, minutos: 'Debe ingresar un valor menor que 60 y mayor a 00' })
      }
      else { setErrors({ ...errors, minutos: '' }) }
    }
  }

  // ------------ Funcion para el eleccion de paises -------------------------

  function handleClickP(e) {
    e.preventDefault();
    if (e.target.checked === true) { inputs.paises.push(e.target.value) };
    if (e.target.checked === false) { let filtrado = inputs.paises.filter(p => p !== e.target.value); setInputs({ ...inputs, paises: filtrado }) };
  }

  // -------------- Funcion para el Cambio de inputs -------------------------

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    handleErrors(e);
  }


  // ------------- Funcion para la Duracion de Actividad ----------------------


  function handleDuracion(e) {
    handleErrors(e)
    setConcat({ ...concat, [e.target.name]: e.target.value })
    let horas = Object.values(concat);
    horas = horas[0] + 'hs' + horas[1] + 'min';
    setInputs({ ...inputs, duracion: horas })
  }


  // ------------ Submit del Formulario ----------------------


  async function handleSubmit(e) {
    e.preventDefault();

    if (inputs.paises.length === 0) {
      alert('Debe Seleccionar algun pais para dicha actividad' )
    }
    if( errors === {
      'nombre': '',
      'dificultad': '',
      'horas': '',
      'minutos': ''
    }){

      await fetch("http://localhost:3001/activity", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })
        .then(r => r.json())
        .catch(error => { return (error) });

      //------------- Seteos --------------
      setInputs({
        nombre: '',
        temporada: '',
        dificultad: '',
        duracion: '',
        paises: []
      })

      setConcat({
        horas: '',
        minutos: ''
      })

      const a = document.getElementsByClassName('checkbox');
      for (let i = 0; i < a.length; i++) {
        a[i].checked = false
      }

      alert('Actividad agregada')
    }
    
    alert('Complete todos los campos')

  }

  return (

    <FormActivity paises={paises} handleSubmit={handleSubmit} handleChange={handleChange} handleDuracion={handleDuracion} handleClickP={handleClickP} inputs={inputs} concat={concat} errors={errors} />

  )
}

function mapStateToProps(state) {
  return {
    paises: state.paisesDB
  }
}
export default connect(mapStateToProps, { init })(Activity);