import React, { useState, useEffect } from 'react';
import Countries from '../Countries/Countries';
import './Home.css';
import loader from '../../img/loader.gif';
import Filters from '../Filters/Filters';
import Nav from '../Nav/Nav';
import { init } from '../../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Home({ paises, paisesFilter, init }) {

  const [filter, setFilter] = useState('API');

  useEffect(() => {
    //llamado a api
    init();
  }, [])
  
  if (paises === null) {
    return (<div className="containerLoader">
      <img className="loadeer" src={loader} alt={'icon loader'} />
    </div>)
  }
  else {
    return (
      <div className='All'>
        <div className="Title-LinkActivity">
          <Link to='/activity'>
            <button>Agregar actividad turistica</button>
          </Link>
            <h1 className='title'>  Paises  </h1>
            
            <Nav setFilter={setFilter} />   
        </div>
      <div className='Lista'>
            <Filters setFilter={setFilter} />  
      </div>
        {paises && filter === 'API' && <Countries paises={paises} />}
        {filter ==='continente' && <Countries paises={paisesFilter} />}
        {filter === 'actividad' && <Countries paises={paisesFilter} />}
        {filter === 'a - z' && <Countries paises={paisesFilter} />}
        {filter === 'z-a' && <Countries paises={paisesFilter} />}
        {filter === 'pobla+' && <Countries paises={paisesFilter} />}
        {filter === 'pob-' && <Countries paises={paisesFilter} />}
        {filter === 'search' && <Countries paises={paisesFilter} />}

      </div>)
  }
}
function mapStateToProps(state) {
  return {
    paises: state.paisesDB,
    paisesFilter: state.filter
  }
}
export default connect(mapStateToProps, { init })(Home)