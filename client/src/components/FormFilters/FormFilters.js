import React from 'react';
import { connect } from 'react-redux';
import './FormFilters.css';

function FormFilters({ activities, filtrado }) {

  return (
    <form>
      <div className='form-filters'>
        <div>
          <label id='iContinente'> Continente: </label>
          <select id='iContinente' defaultValue='API' name='continente' onChange={(e) => filtrado(e)} >
            <option value='API' > Todos </option>
            <option value='Africa' > Africa </option>
            <option value='Antarctica' > Antarctica </option>
            <option value='Asia' > Asia </option>
            <option value='Europe' > Europe </option>
            <option value='North America' > North America </option>
            <option value='Oceania' > Oceania </option>
            <option value='South America' > South America </option>
          </select>
        </div>
        
        <div>
          <label id='idActivity'> Actividad Turistica: </label>
          <select id='idActivity' onChange={(e) => filtrado(e)} >            
          <option value='API' > Todos </option>
            {activities.map((act, i) => { return <option key={i + 'activ.'} value={act} > {act} </option> })}
          </select>
        </div>

        <div>
          <label id='idAlfa' > Orden Alfabetico: </label>
          <select id='idAlfa' name='Alfa' onChange={(e) => filtrado(e)} >
            
            <option value='API' > Todos </option>
            <option value='A-Z' > A-Z </option>
            <option value='Z-A' > Z-A </option>
          </select>
        </div>

        <div>
          <label id='idPoblacion'> Poblacion: </label>
          <select id='idPoblacion' name='Poblacion' onChange={(e) => filtrado(e)} >            
            <option value='API' > Todos </option>
            <option value='filterPoblMay' > Mayor </option>
            <option value='filterPoblMen' > Menor </option>
          </select>
        </div>
        
      </div>
    </form>
  )
}
function mapStateToProps(state) {
  return {
    activities: state.activities
  }

}

export default connect(mapStateToProps, null)(FormFilters)