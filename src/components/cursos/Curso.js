import { useEffect, useState } from "react";
import {BsCheck} from 'react-icons/bs';
import {AiOutlineSafetyCertificate, AiOutlineSchedule} from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi';

import './curso.scss';

export function Curso(props) {
    console.log(props)

    const id_cursos = props.datos.id_cursos;
    const curso_nombre = props.datos.curso_nombre;
    const curso_apertura = props.datos.curso_apertura;
    const curso_descripcion = props.datos.curso_descripcion;
    const curso_foto = props.datos.curso_foto;
    const curso_horas = props.datos.curso_horas;

    useEffect(() => {
        console.log(id_cursos)
    }, []);

    return (
        <div className="curso_container">
            <div className="coloreado_container">
                <div className="contenido_textual">
                    <div className="lado_izquierdo">
                        <div className="texto">
                            <p className="curso_nombre">{curso_nombre}
                            </p>
                            <p className="curso_descripcion">{curso_descripcion}
                            </p>
                        </div>
                        <div className="btn">
                            <button className="btn_inscribirse">
                                <p className="inscribirse">Inscribirse</p>
                                <p className="start">Comienza el 3 de febrero</p>
                            </button>
                            <p className="acceso"><strong>Acceso premium: 15US$/mes</strong></p>
                        </div>
                        <p className="inscritos"><strong>0</strong> ya inscritos</p>
                    </div>
                    <div className="img_div">
                        <img src={`data:image/jpg;base64,${curso_foto}`} alt={curso_nombre} />
                    </div>
                </div>
            </div>
            <div className="aprenderas">
                <div className="izquierda">
                    <p className="queaprenderas">QUÉ APRENDERÁS
                    </p>
                    <div className="checks">
                        <div>                             
                            <p> <BsCheck className="icon" /> Las responsabilidades y roles según el marco normativo peruano para el análisis de riesgos (ISO 31000-2018).</p>           
                        </div>
                        <div>
                            <p> <BsCheck className="icon" /> El proceso de identificación de riesgos que inicia desde la observación, análisis, plan de acción y seguimiento.</p>                       
                        </div>
                        <div>
                            <p> <BsCheck className="icon" /> Diseño y manejo de una herramienta para el análisis del trabajo seguro, previo al inicio de labores.</p>    
                        </div>
                        <div>
                            <p> <BsCheck className="icon" /> Simulación de casos.</p>               
                        </div>
                    </div>
                </div>
                <div className="derecha">
                    <div className="derecha_nose">
                        <div className="cada_div">
                            <AiOutlineSafetyCertificate className="icon" />
                            <div className="text">
                                <strong> Certificado para compartir </strong>
                                <p className="sub">Obtendrás una constancia de participación al finalizar, previa evaluación de competencias.</p>  
                            </div>                   
                        </div>                        
                        <div className="cada_div">
                            <BiWorld className="icon" />
                            <div>
                                <strong> Curso 100% en línea </strong>
                                <p className="sub">Comienza de inmediato y aprende a tu propio ritmo.</p>  
                            </div>                   
                        </div>
                        <div className="cada_div">
                            <AiOutlineSchedule className="icon"/>
                            <div>
                                <strong> Cronograma flexible </strong>
                                <p className="sub">Establece y mantén fechas de entrega flexibles.</p>  
                            </div>                   
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
