import React, {useState} from 'react'
import {Link} from 'react-scroll'

//icons
import {MdOutlineArrowDropDown} from 'react-icons/md'

//styles
import './styles.scss'

function Navbar() {

    const [showsublista, setShowSubLista] = useState(false);
    const [showsublista2, setShowSubLista2] = useState(false);

    return (
      <div className='navbar_container'>
          <div className='ul_container'>
            <ul className='listaPrincipal'>
            <Link  to="home" spy={true} smooth={true} offset={-150}><li>INCIO</li></Link>
            <Link  to="servicios" spy={true} smooth={true} offset={-150}><li onMouseEnter={()=> setShowSubLista(true)} onMouseLeave={()=> setShowSubLista(false)} >
                  <p>
                    SERVICIOS 
                  </p>
              </li>
              </Link>
              <Link  to="cursos" spy={true} smooth={true} offset={-150}><li>CURSOS</li></Link>
              <Link  to="us" spy={true} smooth={true} offset={-150}><li>NOSOTROS</li></Link>
              <Link  to="novedades" spy={true} smooth={true} offset={-150}><li onMouseEnter={()=> setShowSubLista2(true)} onMouseLeave={()=> setShowSubLista2(false)} >
                  <p>
                    NOVEDADES 
                    <MdOutlineArrowDropDown />
                  </p>
                  <div className={showsublista2 ? 'divsublista show' : 'divsublista' }>
                      <ul>
                          <li>Blog</li>
                          <li>Articulos y publicaciones</li>
                      </ul>
                  </div> 
              </li>
              </Link>
              <Link  to="contacto" spy={true} smooth={true} offset={-150}><li>CONTACTO</li></Link>
            </ul>
          </div>
      </div>
    );
}

export default Navbar