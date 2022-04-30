import { useEffect, useState } from 'react'

import './perfil.scss'

import { getUserEmail, delenteEmail } from '../../helpers/auth-localstorage'

export function Perfil(props) {

    useEffect(() => {
        
    }, []);

    return (
        <div className='perfil_container'>
            <p className='nombre_usuario'>
            {
                props.usuario
            }
            </p>
            <button className='logout' onClick={()=>{delenteEmail(); window.location.reload()}}>
                Cerrar Sesión
            </button>
        </div>
    )
}
