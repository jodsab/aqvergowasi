import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//styles
import "./formacioncapacitacion.scss";

import { fetchPost } from "../api/fetchpost";
const URL_OBTENER_CURSOS = "https://aqvergowasi.com/oficial/cursos/obtenercursos.php";

function FormacionCapacitacion() {
  const [cursos, setCursos] = useState([]);

  const fetchCursos = async () => {
    const data = {
      "user": "admin",
    };

    const rspJson = await fetchPost(URL_OBTENER_CURSOS, data);
    setCursos(rspJson);
    console.log(rspJson);
  };

  useEffect(async () => {
    await fetchCursos();
  }, []);

  return (
    <div id='cursos' className="formacion_container">
      <div className="contenido_container">
        <h3>NUESTROS CURSOS</h3>
        <div className="cursos_container">
          <div className="div_section_container">
            <h4>Cursos: Capacítate y tu empresa evitará multas</h4>
            <ul className="ul_divs">
              {
              cursos.map(e => (
                <li>
                  <div className="curso_container">
                    <img src={`data:image/jpg;base64,${e.curso_foto}`} alt={e.curso_nombre} />

                    <div className="descripcion">
                      <p className="curso_nombre">{e.curso_nombre}</p>
                      <p className="curso_horas"> Curso: {e.curso_horas} horas académicas</p>
                      <p className="curso_fecha">Disponible: desde {e.curso_apertura}</p>
                    </div>
                  </div>
                  <button><Link to={`/cursos/${e.id_cursos}`}>Más información</Link></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormacionCapacitacion;
