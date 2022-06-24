import React from 'react'

import './styles.scss'

function Asociacion() {
    return (
        <div id='aqv' className='asociacion_container'>
            <div className='asociacion'>
                <h4>AQV & ERGOWASI</h4>
                <p>En el mundo globalizado de hoy en día, <strong>AQV & ERGOWASI</strong> se unen para contribuir al bienestar de los trabajadores y para la obtención de mejores resultados en las organizaciones en materia de seguridad y salud en el trabajo. Ambas empresas comparten valores y principios que permite su sinergia.</p>
                <p>En <strong>AQV & ERGOWASI</strong> nos dedicamos al desarrollo de lugares de trabajo seguros y saludables, a través de los servicios de consultoría, formación y capacitación y diseño de herramientas de gestión en seguridad y salud en el trabajo, ergonomía y gestión de riesgos. Además, buscamos crear espacios de interacción para compartir experiencias a nivel mundial en temas relacionados a la seguridad y salud en el trabajo.</p>
            </div>
            <h4 className='Nuestro_valores'>Nuestros valores</h4>
            <ul className='lista_valores'>
                <li><strong>Trasnparencia</strong> <p>Garantizamos a nuestros clientes y socios estratégicos el manejo de la información acorde a la realidad que les permita tomar las mejores decisiones.</p></li>
                <li><strong>Compromiso</strong> <p>En nuestro equipo de trabajo nos enfocamos en brindar el mejor servicio a nuestros clientes, así como la dedicación que ponemos en cada actividad que desarrollamos en búsqueda de lograr mejores resultados.</p></li>
                <li><strong>Respeto</strong><p>Nuestras actividades están diseñadas para reconocer y tomar en consideración el aporte de nuestros clientes y socios estratégicos, además nuestros servicios están orientados a reducir nuestro impacto al medio ambiente.</p></li>
                <li><strong>Ética</strong> <p>Nuestra esencia es actuar de manera íntegra con espíritu de servicio que genere confianza con nuestros clientes y socios estratégicos.</p></li>
                <li><strong>Credibilidad</strong> <p>Nuestro interés en generar relaciones de confianza está sustentadas en la coherencia entre lo que decimos y hacemos, esto permitirá construir relaciones genuinas a largo plazo con nuestros clientes y socios estratégicos.</p></li>
            </ul>
        </div>
    )
}

export default Asociacion
