import React from 'react';
/* 

 • Opciones para filtrar por continente y por tipo de actividad turística

 • Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población

*/
export default function Form() {
    return (
        <div className='container'>
            <div>
                <label> Continente : </label>
                <input type='checkbox' name='filterCont' onClick={()=> { onclick()}}/>
            </div>
            <div>
                <label> Actividad Turistica : </label>
                <input type='checkbox' name='filterActiv' onClick={()=> { onclick()}}/>
            </div>
            <div>
                <label> Orden Alfabetico: </label>
                <input type='checkbox' name='filterAlfa' onClick={()=> { onclick()}}/>
            </div>
            <div>
                <label> Poblacion : </label>
                <input type='checkbox' name='filterPobl' onClick={()=> { onclick()}}/>
            </div>
        </div>
    )
}