import React from 'react';
import './FormActivity.css';
import {Link} from 'react-router-dom';
import loader from '../../img/loader.gif'

export default function FormActivity({paises, errors, handleSubmit, handleChange, handleDuracion, handleClickP, inputs, concat}) {
    
    return (
    <div className="Formulario">
        <h1 className="title">  Nueva Actividad  </h1>
           <div className="form-div">
               <form onSubmit={(e) => handleSubmit(e)}>
        <div className='filtradosIndiv'>
                <label>Ingrese nombre de la actividad:</label>
                <input name='nombre' value={inputs.nombre} type="text" placeholder=" Buceo... " onChange={(e) => { handleChange(e) }} ></input>
                </div>
                <br/>
                {errors.nombre ?  <p className='danger'>{errors.nombre}</p> : ''}
                <br/>
                <div className='filtradosIndiv'>
                <label id='iTemporada'>Seleccione la temporada ideal para la actividad:</label>
                <select id='iTemporada' name='temporada' onChange={(e) => { handleChange(e) }} >
                    <option value=''> -- </option>
                    <option value='Verano'> Verano </option>
                    <option value='Otoño' > Otoño </option>
                    <option value='Invierno' > Invierno </option>
                    <option value='Primavera' > Primavera </option>
                </select>
                </div>
                <br/>
                <div className='filtradosIndiv'>
                <label>Ingrese la dificultad</label>
                <input type="number" name='dificultad' value={inputs.dificultad} min='1' max='5' onChange={(e) => { handleChange(e) }} ></input>
                <br/>
                {errors.dificultad ? <p className='danger'>{errors.dificultad}</p> : ''}
                </div>
                <br/>
                <div className='filtradosIndiv'>
                <label>Ingrese duración en horas:</label>
                
                <input id='hs' name='horas' value={concat.horas} type="number" min='00' max='24' onChange={(e) => { handleDuracion(e) }} />
                <label>hs</label>  

                <input id='min' name='minutos' value={concat.minutos} type="number" min='00' max='59' onChange={(e) => { handleDuracion(e) }} />
                <label>min.</label>                
                <br/>
                {errors.horas ? <p className='danger'>{errors.horas}</p> : ''}
                {errors.minutos ? <p className='danger'>{errors.minutos}</p> : ''}
                </div><br/>
                <div className='filtradosIndiv'>
                    <label >Seleccione el/los paises para dicha actividad:</label>
                    <div className='checkDiv'>
                        {paises ? '': <div className='loaderDiv'><img className='loader' src={loader} alt='Cargando...'/></div>}
                     {
                        paises?.map((p) => {
                            return (<div key={'buttonSelectPais' + p.id} className='checkbox'>

                                <input  type='checkbox' id={'iPaises' + p.id} className='checkk' name={p.nombre} value={p.id}  onClick={handleClickP}/> <label for={'iPaises' + p.id}> {p.nombre} </label>  </div>)
                        })
                    } 
                    
                    </div>
                </div> 
                <br/>
                <div className='paisesDanger'>       
                {inputs.paises.length < 1 ? <p className='danger'> Debe seleccionar algun pais </p> :''}
                </div>

                <button id='submitButton' type="submit" >Agregar</button>

            </form>

            <Link to='/countries'>
                <button >Volver al Home</button>
            </Link>
        </div>
    </div>
    )
} 