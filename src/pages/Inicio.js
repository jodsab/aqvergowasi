import React from 'react'
import components from '../components/exportComponents'

import './inicio.scss';

function Inicio() {
    return (
        <div className='inicio_container' >
            <div className='inicio_container2' >

            <components.Portada />
            <div className='cuerpo_container' >
                <components.NuestrosServicios />
                <components.FormacionCapacitacion />
                <components.NuestroEquipo />
                <components.NuestraHistoria />
                <components.Asociacion />
                <components.Novedades />
                
            </div>
            <components.Contacto />
            <components.Footer />
            
            </div>   
        </div>
    )
}

export default Inicio
