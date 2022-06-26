import React from 'react'
import { BsCheck } from "react-icons/bs";
import { AiOutlineSafetyCertificate, AiOutlineSchedule } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

import './styles.scss'

const CourseInfo = ({props}) => {
  return (
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
  )
}

export default CourseInfo