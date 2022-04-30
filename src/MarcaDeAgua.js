import React from 'react'

import './marcadeagua.scss'

function MarcaDeAgua() {
    return (
        <div className='marcadeagua'>
            <img src={require('./assets/marcadeagua/marcadeaguaizquierda.png').default} alt='marca de agua' />
        </div>
    )
}

export default MarcaDeAgua
