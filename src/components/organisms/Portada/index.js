import React from 'react'

import Logo from '../../molecules/AELogo'

import AnimatedCubeSlider from '../../../ideas/AnimatedCubeSlider'

//styles
import './styles.scss'

function Portada() {

    return (
        <div id='home' className='portada_container'>
            <div className='presentacion'>
                <AnimatedCubeSlider />
                <div className='msj_presentacion'>
                    <h1>AQV ERGOWASI</h1>
                    <p>
                        Te ayudaremos a contribuir al
                        bienestar de los trabajadores y a la
                        optimización de resultados
                    </p>
                    <button>COMENZAR</button>
                </div>
            </div>
            <div className='logo_css_container'>
                <Logo />
            </div>
        </div>
    )
}

export default Portada
