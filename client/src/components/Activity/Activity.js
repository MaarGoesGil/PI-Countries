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
- [ ] Botón/Opción para crear una nueva actividad turística */


function Activity({ paises, init }) {

  // ------ Carga Paises de la Base de datos -------------

  useEffect(() => {
    init()
  }, [])

  // --------------------- Estados ----------------------

  const [concat, setConcat] = useState({
    horas: 0, minutos: 0
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
        setErrors({ ...errors, dificultad: 'Debe ingresar un valor entre 1 - 5' });
      }
      else { setErrors({ ...errors, dificultad: '' }) }
    }

    // --------- Inputs de Horas y minutos ---------------

    if (e.target.name === 'horas') {
      if (e.target.value.length < 1 || e.target.value > 23 || e.target.value < 0) {
        setErrors({ ...errors, horas: 'Debe ingresar un valor menor de 24 y mayor a 00' });
      }
      else { setErrors({ ...errors, horas: '' }) }
    }
    if (e.target.name === 'minutos') {
      if (e.target.value >= 60 || e.target.value < 0) {
        setErrors({ ...errors, minutos: 'Debe ingresar un valor menor de 60 y mayor a 00' })
      }
      else if(parseInt(e.target.value) === 0 && parseInt(concat.horas) === 0){
        setErrors({ ...errors, minutos: 'Debe ingresar un horario para la actividad' })
      }
      else { setErrors({ ...errors, minutos: '' })  }
    };

  }

  // ------------ Funcion para eleccion de paises -------------------------

  function handleClickP(e) {
    if (e.target.checked === true) {
      inputs.paises.push(e.target.value)
      setInputs({ ...inputs })
    }
    else {
      let filtrado = inputs.paises.filter(p => p !== e.target.value)
      setInputs({ ...inputs, paises: filtrado });
    };
  }

  // -------------- Funcion para el Cambio de inputs -------------------------

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    handleErrors(e);
  }


  // ------------- Funcion para la Duracion de Actividad ----------------------


  function handleDuracion(e) {  
      setConcat({ ...concat, [e.target.name]: e.target.value });       
      handleErrors(e);
  }

  // ------------ Submit del Formulario ----------------------



  async function handleSubmit(e) {
    setInputs({...inputs, duracion: concat.horas + ' hs ' + concat.minutos + ' min '});
    if ((inputs.nombre === '' ||
      inputs.temporada === '' ||
      inputs.dificultad === '' ||
      inputs.duracion === ''
    ) || inputs.paises.length < 1) {
      alert('Complete todos los campos')
      e.preventDefault()
    }
    else {      
      e.preventDefault();

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

      const a = document.getElementsByClassName('checkk');
      for (let i = 0; i < a.length; i++) {
        a[i].checked = false
      }

      alert('Actividad agregada')
    }
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