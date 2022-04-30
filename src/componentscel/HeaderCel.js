import React, {useState} from 'react'
import { Link } from 'react-router-dom';

//icons
import {AiOutlineMenu} from 'react-icons/ai'

//stlyes
import './headercel.scss'

function HeaderCel() {

    const [menuShow, setMenuShow] = useState(false);

    return (
        <div className='navbar_cel_container'>
            <div className='bars_logo_container'>
                <p onClick={()=>setMenuShow(!menuShow)} ><AiOutlineMenu /></p>
                <img src={require('../assets/Logo_1.png').default} />
            </div>
            <div className= {menuShow ? 'menu_display_container show':'menu_display_container'}>
                <ul>
                    <li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>INICIO</p></li>
                    <li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>SERVICIOS</p>
                    <ul>
                            <li onClick={()=>setMenuShow(!menuShow)}>Servicios de consultoría</li>
                            <li onClick={()=>setMenuShow(!menuShow)}>Formación y capacitación</li>
                            <li onClick={()=>setMenuShow(!menuShow)}>Herramientas de gestión</li>
                        </ul>
                    </li>
                    <li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>NOSOTROS</p>
                        <ul>
                            <li onClick={()=>setMenuShow(!menuShow)}>Nuestro equipo</li>
                            <li onClick={()=>setMenuShow(!menuShow)}>Nuestra historia</li>
                            <li onClick={()=>setMenuShow(!menuShow)}>Asociación</li>
                        </ul>
                    </li>
                    <li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>NOVEDADES</p></li>
                    <li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>CONTACTO</p></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderCel
