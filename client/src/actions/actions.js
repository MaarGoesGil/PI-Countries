import axios from 'axios';
export const FILTER_AZ = 'FILTER_AZ';
export const FILTER_ZA = 'FILTER_ZA';
export const FILTER_CONTINENTE = 'FILTER_CONTINENTE';
export const FILTER_ACTIVIDAD = 'FILTER_ACTIVIDAD';
export const FILTER_POBLACION_MAYOR = 'FILTER_POBLACION_MAYOR';
export const FILTER_POBLACION_MENOR = 'FILTER_POBLACION_MENOR';
export const SEARCH = 'SEARCH';
export const INIT = 'INIT';
export const PAIS_DETALLADO = 'PAIS_DETALLADO';
export const load_Activity = 'load_Activity'

export const init = () => {
    return async (dispatch) => {
        try {
            const api = await axios.get('/countries')
            const res = await api.data
            return dispatch({
                type: INIT,
                payload: res
            })
        }
        catch (error) { console.log(error) }
    }
};

export const idPaisDetallado = (idPais) => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`/countries/${idPais}`)
            const res = await api.data
            return dispatch({
                type: PAIS_DETALLADO,
                payload: res
            })
        }
        catch (error) { console.log(error) }
    }
};

export const loadActivity = () => {
    return async (dispatch) => {
        try {
            const api = await axios.get('/activity')
            const res = await api.data
            return dispatch({
                type: load_Activity,
                payload: res
            })
        }
        catch (error) { console.log(error) }
    }
};

export const search = (data) => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`/countries?name=${data}`)
            const res = await api.data
            return dispatch({
                type: SEARCH,
                payload: res, 
            })
        }
        catch (error) { console.log(error) }
    }
};

export const filter_AZ = () => {
    return {
        type: FILTER_AZ,
    };
};

export const filter_ZA = () => {
    return {
        type: FILTER_ZA
    };
};

export const filter_CONTINENTE = (continente) => {
    return {
        type: FILTER_CONTINENTE,
        payload: continente
    };
};

export const filter_ACTIVIDAD = (act) => {
    return {
        type: FILTER_ACTIVIDAD,
        payload: act
    };
};

export const filter_POBLACION_MAYOR = (poblacion) => {
    return {
        type: FILTER_POBLACION_MAYOR,
        payload: poblacion
    };
};

export const filter_POBLACION_MENOR = (poblacion) => {
    return {
        type: FILTER_POBLACION_MENOR,
        payload: poblacion
    };
};
