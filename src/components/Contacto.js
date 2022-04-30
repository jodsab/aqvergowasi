import React from 'react'

//icons
import {FaUser, FaBuilding, FaEnvelopeOpenText} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'

//styles
import './contacto.scss'

function Contacto() {
    return (
        <div id='contacto' className='contacto_container'>
            <div className='left_contacto'>
                <h4>INFORMACIÓN DE CONTACTO</h4>
                <p>Para más información nos encuentras en:</p>
                <div className='left_down_contacto'>
                    <div className='contacto_flex'>
                        <p><BsTelephone className='icon_left' /></p>                        
                        <div>
                            <p>(PE) +51 962 219 118</p>
                            <p>(CA) +1 514 709 6010</p>
                        </div>
                    </div>
                    <div className='contacto_flex'>
                    <p><MdEmail className='icon_left' /></p>    
                        <p>info@aqvergowasi.com</p>
                    </div>
                    <img className='logo_msj' src='https://i.postimg.cc/CLpKb05s/Logo-1.png' alt='logo'></img>
                </div>
            </div>
            <div className='formulario_contacto'>
                <h4>¿Tienes alguna pregunta?</h4>
                <h5>Absolveremos las dudas y consultas que tengas, bríndanos tus datos y detalla tu consulta.  </h5>
                <p><FaUser className='icon' /><input placeholder='Nombre' ></input></p>
                <p><FaBuilding className='icon' /><input placeholder='Empresa' ></input></p>
                <p><MdEmail className='icon' /><input placeholder='Email' ></input></p>
                <p><FaEnvelopeOpenText className='icon' /><input placeholder='Asunto' ></input></p>
                <textarea placeholder='Mensaje' ></textarea>
                <button>ENVIAR EMAIL</button>
            </div>
        </div>
    )
}

export default Contacto
