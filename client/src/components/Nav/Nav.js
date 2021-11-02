import React from 'react';
import {connect} from 'react-redux';
import { search } from '../../actions/actions';
import icon from '../../img/icon.png';
import './Nav.css'

function Nav({setFilter, search}) {
    function handleChange(e){
        e.preventDefault();
        setFilter('search');
        search(e.target.value);        
    }
    function onclick(e){
        e.target.value = null
    }
    return (
        <>
            <input type="search" className="inputSearch" placeholder="Buscar pais..."
            onChange={handleChange} onClick={onclick} />
                <img className='icono-Nav' src={icon} alt='iconoNav'/>
        </>
    )
}
export default connect(null, {search})(Nav)