import React, {useState} from 'react'
import Logo from '../Logo'

import AnimatedCubeSlider from '../ideas/AnimatedCubeSlider'

//styles
import './portada.scss'

function Portada() {

    const [divLogin, setDivLogin] = useState(false);

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
                    <button /* onClick={()=>{setDivLogin(true)}} */ >COMENZAR</button>
                </div>
            </div>
            <div className='logo_css_container'>
                <Logo />
            </div>
        </div>
    )
}

export default Portada
