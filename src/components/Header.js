import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {AiOutlineMenu} from 'react-icons/ai'

import { getUserEmail } from '../helpers/auth-localstorage'

//Icons
import {MdAttachEmail} from 'react-icons/md'
import {BsTelephone} from 'react-icons/bs'
import {FaRegUser} from 'react-icons/fa'

//Styles
import './header.scss'
import ModalUserTemplate from './organisms/ModalUserTemplate'

function Header() {

    const [divLogin, setDivLogin] = useState(false);
    const [divPerfil, setDivPerfil] = useState(false);
    const [conectado, setConectado] = useState(false);
    const [nombre, setNombre] = useState('')
    const [menuShow, setMenuShow] = useState(false);

    useEffect(() => {
        if (typeof getUserEmail() !== 'undefined' && getUserEmail() !== null){
            setConectado(true);
            setNombre(getUserEmail())
        }
    }, []);

    return (
        <div>
        <div className='flex headercontainer'>
            <div>
                <Link to='/'>
                    <img src={require('../assets/Logo_1.png').default} alt='logo' className='img_logo' />
                </Link>
            </div>
            <div className='contactox'>
                <div className='flex flex1'>
                    <div className='flex flex2'>
                        <MdAttachEmail className='icons' />
                        <p>info@aqvergowasi.com</p>
                    </div>
                    <div className='flex flex3'>
                        <BsTelephone className='icons' />
                        <div>
                            <p>(PE) +51 962 219 118</p>
                            <p>(CA) +1 514 709 6010</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    {
                        conectado ? 
                        <button className='div_nombre' onClick={()=>{setDivPerfil(true)}} >
                            <p className='icons'>
                                <FaUser className='icon' />
                            </p>
                            <p className='p_nombre'>
                                {
                                    nombre
                                }
                            </p>
                        </button> 
                        : 
                        <button className='textuser' onClick={()=>{setDivLogin(true)}}><FaRegUser className='icons user' />Registrarme</button>
                    }                    
                    
                </div>
            </div>
            {
                conectado ? 
            <div className={divPerfil ? 'div_perfil_modal show': 'div_perfil_modal'}>
                <div className='ventanareal'>
                    <div className='div_perfil' onClick={()=>{setDivPerfil(false)}} >

                    </div>
                    <button className='close_btn' onClick={()=>{setDivPerfil(false)}} >
                        <AiOutlineCloseCircle />
                    </button>
                </div>
            </div>
            :
            false
            }
            <div className={divLogin ? 'div_login_modal show': 'div_login_modal'}>
                <div className='ventanareal'>
                <ModalUserTemplate />
                    <button className='close_btn' onClick={()=>{setDivLogin(false)}} >
                        <AiOutlineCloseCircle />
                    </button>
                </div>
            </div>
        </div>
            <div className='navbar_cel_container'>
                <div className='bars_logo_container'>
                    <p onClick={()=>setMenuShow(!menuShow)} ><AiOutlineMenu /></p>
                    <a href='https://www.aqvergowasi.com'>
                        <img src={require('../assets/Logo_1.png').default} alt='logo' className='img_logo' />
                    </a>
                </div>
                <div className= {menuShow ? 'menu_display_container show':'menu_display_container'}>
                    <ul>
                        <Link  to="home" spy={true} smooth={true} offset={-150}><li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>INICIO</p></li></Link>
                        <Link  to="servicios" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>SERVICIOS</p></li></Link>
                        <Link  to="cursos" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>CURSOS</p></li></Link>
                        <Link  to="us" spy={true} smooth={true} offset={-60}>
                            <li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>NOSOTROS</p>
                                <ul>
                                    <Link  to="us" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}>Nuestro equipo</li></Link>
                                    <Link  to="history" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}>Nuestra historia</li></Link>
                                    <Link  to="aqv" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}>Asociación</li></Link>
                                </ul>
                            </li>
                        </Link>
                        <Link  to="novedades" spy={true} smooth={true} offset={-60}>
                            <li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>NOVEDADES</p>
                                <ul>
                                    <Link  to="novedades" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}>Blog</li></Link>
                                    <Link  to="novedades" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}>Articulos</li></Link>
                                </ul>
                            </li>
                        </Link>
                        
                        <Link  to="contacto" spy={true} smooth={true} offset={-60}><li onClick={()=>setMenuShow(!menuShow)}><p className='title2'>CONTACTO</p></li></Link>
                    </ul>
                </div>
                <div className='flexdibujo'>
                    {
                        conectado ? 
                        <button className='div_nombre' onClick={()=>{setDivPerfil(true)}} >
                            <p className='icons'>
                                <FaUser className='icon' />
                            </p>
                            <p className='p_nombre'>
                                {
                                    nombre
                                }
                            </p>
                        </button> 
                        : 
                        <button className='textuser2' onClick={()=>{setDivLogin(true)}}><FaRegUser className='icons user' />Registrarme</button>
                    }                    
                    {
                conectado ? 
            <div className={divPerfil ? 'div_perfil_modal show': 'div_perfil_modal'}>
                <div className='ventanareal'>
                    <div className='div_perfil' >
                        

                    </div>
                    <button className='close_btn' onClick={()=>{setDivPerfil(false)}} >
                        <AiOutlineCloseCircle />
                    </button>
                </div>
            </div>
            :
            false
            }
            <div className={divLogin ? 'div_login_modal show': 'div_login_modal'}>
                <div className='ventanareal'>
                <ModalUserTemplate />
                    <button className='close_btn' onClick={()=>{setDivLogin(false)}} >
                        <AiOutlineCloseCircle />
                    </button>
                </div>
            </div>
                </div>
            </div>
            </div>
    )
}

export default Header
