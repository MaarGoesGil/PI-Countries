
const initialState = {
  paisesDB: null,
  filter: [],
  activities: [],
  paisDetallado: []
}

function paises(state = initialState, action) {

  switch (action.type) {

    case 'INIT':
      return { ...state, paisesDB: action.payload }

    case 'load_Activity':
      let nombres = action.payload.map((e) => { return e.nombre })
      let data = new Set(nombres);
      let activitiesName = [...data];
      return { ...state, activities: activitiesName }

    case 'PAIS_DETALLADO':
      return { ...state, paisDetallado: action.payload }

    case 'FILTER_AZ':
      if(state.filter.length < 1){
        let newfilter = state.paisesDB.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return 1;
          }
          if (a.nombre < b.nombre) {
            return -1;
          }
          return 0;
        });
        return { ...state, filter: newfilter }
      }
      else{
        let newfilter = state.filter.sort(function (a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });
      return { ...state, filter: newfilter }
    }

    case 'FILTER_ZA':
      if(state.filter.length < 1){
        return {
        ...state, filter: state.paisesDB.sort(function (a, b) {
          if (a.nombre < b.nombre) {
            return 1;
          }
          if (a.nombre > b.nombre) {
            return -1;
          }
          return 0;
        })
      }}
      else{
        return {
        ...state, filter: state.filter.sort(function (a, b) {
          if (a.nombre < b.nombre) {
            return 1;
          }
          if (a.nombre > b.nombre) {
            return -1;
          }
          return 0;
        })
      }}

    case 'FILTER_CONTINENTE':
      if (action.payload === 'API') {
        return {...state, filter: state.paisesDB }
      }
      else {
        return {...state, filter: state.paisesDB.filter(p => {
          return p.continente === action.payload }) }
      }

    case 'FILTER_ACTIVIDAD':
      let filterPaises = [];
      state.paisesDB.map(p => {
        for (var i = 0; i < p.activities.length; i++) {
          if (p.activities[i].nombre === action.payload) {
            filterPaises.push(p)
          }
        } return false;
      });
      console.log('filterPaises', filterPaises)
      return { ...state, filter: filterPaises }

    case 'FILTER_POBLACION_MENOR':
      //return state.sort();
      if(state.filter.length < 1){
        return {
        ...state, filter: state.paisesDB.sort(function (a, b) {
          if (a.poblacion > b.poblacion) {
            return 1;
          }
          if (a.poblacion < b.poblacion) {
            return -1;
          }
          return 0;
        })
      }}
      else{return {
        ...state, filter: state.filter.sort(function (a, b) {
          if (a.poblacion > b.poblacion) {
            return 1;
          }
          if (a.poblacion < b.poblacion) {
            return -1;
          }
          return 0;
        })
      }}

    case 'FILTER_POBLACION_MAYOR':
      if(state.filter.length < 1){
      return {
      ...state, filter: state.paisesDB.sort(function (a, b) {
        if (a.poblacion < b.poblacion) {
          return 1;
        }
        if (a.poblacion > b.poblacion) {
          return -1;
        }
        return 0;
      })
    }}
      else{return {
        ...state, filter: state.filter.sort(function (a, b) {
          if (a.poblacion < b.poblacion) {
            return 1;
          }
          if (a.poblacion > b.poblacion) {
            return -1;
          }
          return 0;
        })
      }}

    case 'SEARCH':
      return { ...state, filter: action.payload }

    default:
      return state;
  }
}

export default paises;
