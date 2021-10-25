import React,{useEffect} from 'react';
import { connect } from "react-redux";
import { filter_ZA, filter_AZ, filter_CONTINENTE, filter_ACTIVIDAD,filter_POBLACION_MENOR, filter_POBLACION_MAYOR,loadActivity } from '../../actions/actions';
import FormFilters from '../FormFilters/FormFilters.js';
/* 

 • Opciones para filtrar por continente y por tipo de actividad turística

 • Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población

*/
function Filters({activities, filter_AZ, filter_ZA, filter_CONTINENTE, filter_POBLACION_MENOR, filter_ACTIVIDAD, filter_POBLACION_MAYOR, setFilter,loadActivity }) {

    useEffect(() => {
        loadActivity()
    },[]);

    function filtrado(e) {
        e.preventDefault();
        if (e.target.name === 'continente') { setFilter('continente');filter_CONTINENTE(e.target.value);  }
        if (e.target.value === 'A-Z') { setFilter('a - z');filter_AZ();  }
        if (e.target.value === 'Z-A') { setFilter('z-a');filter_ZA();  }
        if (e.target.value === 'filterPoblMay') { setFilter('pobla+');filter_POBLACION_MAYOR();  }
        if (e.target.value === 'filterPoblMen') { setFilter('pob-');filter_POBLACION_MENOR();  }
        if (activities?.includes(e.target.value)) { setFilter('actividad') ;filter_ACTIVIDAD(e.target.value);  }
    }

    return (
        <FormFilters filtrado={filtrado}/>
    )
}
function mapStateToProps(state){
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps, { filter_ZA, filter_AZ, filter_CONTINENTE, filter_ACTIVIDAD,filter_POBLACION_MENOR, filter_POBLACION_MAYOR, loadActivity })(Filters)