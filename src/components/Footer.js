import React from 'react'

//icons
import {AiFillYoutube} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {BsLinkedin} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/bi'

//stlyes
import './footer.scss'

function Footer() {
    return (
        <div className='footer_container'>
            <div className='redes'>
                <img src='https://i.postimg.cc/KYf9NKRh/Logo-4.png'></img>
                <div className='rights'>
                    
                    <p> <BiCopyright className='copyright' />AQV ERGOWASI. Todos los derechos reservados</p>
                </div>
            
                <div className='icons'>
                    <p><AiFillYoutube className='icon' /> </p>
                    <p><FaFacebook className='icon' /> </p>
                    <p><RiInstagramFill className='icon' /> </p>
                    <p><BsLinkedin className='icon' /> </p>
                </div>
            </div>
            <div className='footer_real'>
                <p>Contáctanos |</p>
                <p>Términos y condiciones |</p>
                <p>Contactar (PE) +51 962 219 118 |</p>
                <p>Contactar (CA) +1 514 709 6010</p>
            </div>
            <div className='idioma'>
                <img className='banderaesp' src='https://i.postimg.cc/c1gkXY97/espana.png' alt='banderaesp'></img>
                <p>Español</p> 
            </div>

                
        </div>
    )
}

export default Footer
