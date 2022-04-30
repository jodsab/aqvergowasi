import React from 'react'

//icons
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaBookReader} from 'react-icons/fa'
import {FaToolbox} from 'react-icons/fa'

//styles
import './nuestrosservicios.scss'

function NuestrosServicios() {
    return (
        <div id='servicios' className='servicios_container'>
            <h3>NUESTROS SERVICIOS</h3>
            <div className='servicios_cols'>
                <div className='servicio_col'>
                    <BsFillPeopleFill className='icons' />
                    <h4>Servicios de consultoría</h4>
                    <p>AQV ERGOWASI lo acompaña en la implementación y mejora de la seguridad y salud en el trabajo, ergonomía y gestión de riesgos.</p>
                </div>
                <div className='servicio_col'>
                    <FaBookReader className='icons' />
                    <h4>Formación y Capacitación</h4>
                    <p>AQV ERGOWASI  ofrece formaciones y capacitaciones dirigido a los responsables y administradores de empresas, miembros de los equipos de SST, así como a los trabajadores, con la finalidad de trasmitir las mejores prácticas para la prevención de riesgos.</p>
                </div>
                <div className='servicio_col'>
                    <FaToolbox className='icons' />
                    <h4>Herramientas de gestión</h4>
                    <p>AQV ERGOWASI propone y desarrolla herramientas para la seguridad y salud en el trabajo, ergonomía y gestión de riesgos.</p>
                </div>
            </div>
        </div>
    )
}

export default NuestrosServicios
