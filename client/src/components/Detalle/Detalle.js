import React, { useEffect } from 'react';
import './Detalle.css'
import { connect } from 'react-redux';
import { idPaisDetallado } from '../../actions/actions';
import { useParams } from 'react-router-dom';
import bandera from '../../img/bandera.png';
import {Link} from 'react-router-dom';

/* [ ] Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
[ ] Código de país de 3 letras (id)
[ ] Capital
[ ] Subregión
[ ] Área (Mostrarla en km2 o millones de km2)
[ ] Población
[ ] Actividades turísticas con toda su información asociada
*/
function Detalle({ paisDetallado, idPaisDetallado }) {

    const { idPais } = useParams();

    useEffect(() => {
        idPaisDetallado(idPais)
    },[])

    const pais = paisDetallado[0]
    return (
        <div className="paisDetallado">
            {
                pais ?
                    <div className='pais'>   {pais.img ?
                        <div>
                            <img src={pais.img} alt={`Bandera de ${pais.nombre}`} />
                        </div>
                        :
                        <div>
                            <img src={bandera} alt='Sin Bandera' />
                        </div>
                    }

                        <div>
                            <h1 className="title">{pais.nombre.toUpperCase()}</h1>
                            <h4>CCA3: {pais.id}</h4>
                            <h3>CONTINENTE : {pais.continente}</h3>
                            <h4>CAPITAL : {pais.capital}</h4>
                            <p>SUBREGION : {pais.subregion}</p>
                            <p>AREA : {pais.area / 1000000} km2</p>
                            <p>POBLACION : {pais.poblacion}</p>
                            <h3 className="title">ACTIVIDADES</h3>
                            <div className='actividadesDetalle'>
                            {pais.activities.length > 0 ? pais.activities?.map((e, i) => {
                                return (
                                    <div key={i + 'actividades del pais'}>
                                        <h3 >{e.nombre.toUpperCase()}</h3>
                                        <p>DIFICULTAD: {e.dificultad}</p>
                                        <p>DURACION: {e.duracion}</p>
                                        <p>TEMPORADA: {e.temporada}</p>
                                    </div>)
                            }) :''}
                              </div>  
                              {
                                  pais.activities.length === 0 ? <p>No hay actividades agregadas</p> : ''
                                }
                                
                        </div>
                    </div >
                    :
                    <div>
                        <h1>
                            Pais no encontrado
                        </h1>
                    </div>
                    }
            <Link to="/countries">
                <button>Home</button>
            </Link> 
            
        </div>
    )
}
function mapStateToProps(state) {
    return {
        paisDetallado: state.paisDetallado
    }
}

export default connect(mapStateToProps, { idPaisDetallado })(Detalle)
