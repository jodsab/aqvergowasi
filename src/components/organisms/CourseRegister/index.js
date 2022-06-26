import React, { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { AiOutlineSafetyCertificate, AiOutlineSchedule } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

import './styles.scss'

const CourseRegister = ({ ...props }) => {

  const id_cursos = props.datos.id_cursos;
  const curso_nombre = props.datos.curso_nombre;
  const curso_apertura = props.datos.curso_apertura;
  const curso_descripcion = props.datos.curso_descripcion;
  const curso_foto = props.datos.curso_foto;
  const curso_horas = props.datos.curso_horas;
  return (
    <div className="coloreado_container">
      <div className="contenido_textual">
        <div className="lado_izquierdo">
          <div className="texto">
            <p className="curso_nombre">{curso_nombre}</p>
            <p className="curso_descripcion">{curso_descripcion}</p>
          </div>
          <div className="btn">
            <button className="btn_inscribirse">
              <p className="inscribirse">Inscribirse</p>
              <p className="start">Comienza el 3 de febrero</p>
            </button>
            <p className="acceso">
              <strong>Acceso premium: 15US$/mes</strong>
            </p>
          </div>
          <p className="inscritos">
            <strong>0</strong> ya inscritos
          </p>
        </div>
        <div className="img_div">
          <img src={`data:image/jpg;base64,${curso_foto}`} alt={curso_nombre} />
        </div>
      </div>
    </div>
  );
};

export default CourseRegister;
