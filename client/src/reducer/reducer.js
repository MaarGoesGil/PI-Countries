
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

    case 'loadActivity':
      let nombres = action.payload.map((e)=>{return e.nombre})
      let data = new Set(nombres);
      let activitiesName = [...data];
      return { ...state, activities: activitiesName }

    case 'PAIS_DETALLADO':
        return { ...state, paisDetallado: action.payload }

    case 'FILTER_AZ':
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

    case 'FILTER_ZA':
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
      }

    case 'FILTER_CONTINENTE':
      return { ...state, filter: state.paisesDB.filter(p => { return p.continente === action.payload }) }

    case 'FILTER_ACTIVIDAD':
        const filterPaises = state.paisesDB.filter(p => {
          for(var i = 0; i < p.activities.length; i++) {
          if(p.activities[i].nombre===action.payload){return true}
          return false          
          }
        });
      return { ...state, filter: filterPaises}

    case 'FILTER_POBLACION_MENOR':
      //return state.sort();
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
      }

    case 'FILTER_POBLACION_MAYOR':
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
      }

    case 'SEARCH':
      return { ...state, filter: action.payload }

    default:
      return state;
  }
}

export default paises;
