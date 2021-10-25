import React, { useEffect } from 'react';
import './Detalle.css'
import { connect } from 'react-redux';
import { idPaisDetallado } from '../../actions/actions';
import { useParams } from 'react-router-dom';
import bandera from '../../img/bandera.png';

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
    }, [])
    console.log(paisDetallado[0], 'paisDetall')
    const pais = paisDetallado[0]
    return (
        <div className="paisDetallado">
            {
                pais ?
                    <div>   {pais.img ?
                        <div>
                            <img src={pais.img} alt={`Bandera de ${pais.nombre}`} />
                        </div>
                        :
                        <div>
                            <img src={bandera} alt='Sin Bandera' />
                        </div>
                    }

                        <div>
                            <h1>{pais.nombre.toUpperCase()}</h1>
                            <h4>Cca3: {pais.id}</h4>
                            <h3>Continente : {pais.continente}</h3>
                            <h4>Capital : {pais.capital}</h4>
                            <p>Subregion : {pais.subregion}</p>
                            <p>Area : {pais.area / 1000000} km2</p>
                            <p>Poblacion : {pais.poblacion}</p>
                            <h3>Actividades</h3>
                            <div className='actividadesDetalle'>
                            {pais.activities.length > 0 ? pais.activities?.map((e, i) => {
                                return (
                                    <div>
                                        <h3 key={i + 'actividades del pais'}>{e.nombre}</h3>
                                        <p>dificultad: {e.dificultad}</p>
                                        <p>duracion: {e.duracion}</p>
                                        <p>temporada: {e.temporada}</p>
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
        </div>
    )
}
function mapStateToProps(state) {
    return {
        paisDetallado: state.paisDetallado
    }
}

export default connect(mapStateToProps, { idPaisDetallado })(Detalle)
