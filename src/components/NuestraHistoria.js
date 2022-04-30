import React from 'react'

//stlyes
import './nuestrahistoria.scss'

function NuestraHistoria() {
    return (
        <div id='history' className='historia_container' >
            <div className='cuadro'>
                <div className='titlex'>
                    <h4>AQV</h4>
                    <p>“AQV consultación” nace del deseo de compartir mi pasión por la gestión de riesgos, de acompañar a las compañías en el camino hacia un lugar de trabajo seguro y enriquecedor. La capacitación, el reconocimiento, el bienestar, el desarrollo profesional, la salud mental y el empoderamiento en el trabajo son temas que les invito a trabajar juntos para ustedes y por ustedes.  </p>
                </div>
                <img src='https://i.postimg.cc/cJRcXXhK/AQV.jpg'></img>
                <svg className='reverse' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ef3737" fill-opacity="1" d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,186.7C840,213,960,267,1080,288C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
            </div>
            <div className='cuadro cuadro2'>
                <img src='https://i.postimg.cc/7hW1fcHR/ERGOWASI.jpg'></img>
                <div className='titlex'>
                    <h4>ERGOWASI</h4>
                    <p>“ErgoWasi” nace de la idea de acompañar a las organizaciones, a través de la ergonomía, en su camino hacia la mejora de su rendimiento y bienestar en el trabajo. Asimismo, ErgoWasi busca desarrollar temas de investigación para contribuir al desarrollo de la seguridad y salud en el trabajo y ergonomía.</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ef3737" fill-opacity="1" d="M0,64L60,80C120,96,240,128,360,144C480,160,600,160,720,186.7C840,213,960,267,1080,288C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
</svg>
            </div>
        </div>
    )
}

export default NuestraHistoria
