import React, {useState, useRef} from "react";

import { COUNTRIES, OFICIOS } from "../../../shared/constants/Variables";
import { fetchPost } from "../../../api/fetchpost";

import './styles.scss'

const URL_VERIFICAREXISTENCIA = window.location.hostname == 'localhost' ? "http://localhost/servidor-aqv/usuario/verificarexistencia.php" : "https://aqvergowasi.com/oficial/usuario/verificarexistencia.php";
const URL_REGISTRO= window.location.hostname == 'localhost' ? "http://localhost/servidor-aqv/usuario/registro.php" : "https://aqvergowasi.com/oficial/usuario/registro.php";
const URL_LOGIN= window.location.hostname == 'localhost' ? "http://localhost/servidor-aqv/usuario/login.php" : "https://aqvergowasi.com/oficial/usuario/login.php";


const AERegister = () => {
  const [mensaje, setMensaje] = useState("");

  const countries = COUNTRIES;
  const oficios = OFICIOS;

  const RefNombres = useRef(null);
  const RefApellidos = useRef(null);
  const RefPais = useRef(null);
  const RefOcupacion = useRef(null);
  const RefEmail = useRef(null);
  const RefPassword = useRef(null);

  const registrarUsuario = async () => {
    const data = {
      user_nombre: RefNombres.current.value,
      user_apellido: RefApellidos.current.value,
      user_pais: RefPais.current.value,
      user_ocupacion: RefOcupacion.current.value,
      user_email: RefEmail.current.value,
      user_password: RefPassword.current.value,
    };
    const resLoginJson = await fetchPost(URL_VERIFICAREXISTENCIA, data);
    console.log(resLoginJson);

    if (resLoginJson.conectado == false) {
      const respuestaJson = await fetchPost(URL_REGISTRO, data);

      if (respuestaJson.registro == true) {
        const respuestaJsonLog = await fetchPost(URL_LOGIN, data);
        if (respuestaJsonLog.conectado == true) {

          window.location.reload();
        }
      } else {
        console.log(respuestaJson);
      }
    } else {
      setMensaje("El Email ya existía en nuestra base de datos.");
    }
  };
  return (
    <div className="registro_container">
      <div className="form_container">
        <div>
          <label for="nombre">Nombres:</label>
          <input type="text" name="nombre" ref={RefNombres}></input>
        </div>
        <div>
          <label for="apellido">Apellidos:</label>
          <input type="text" name="apellido" ref={RefApellidos}></input>
        </div>
        <div>
          <label for="pais">Pais:</label>
          <select type="text" name="pais" ref={RefPais}>
            {countries.map((e) => (
              <option value={e.name_es}>{e.name_es}</option>
            ))}
          </select>
        </div>
        <div>
          <label for="ocupacion">Ocupación:</label>
          <select type="text" name="ocupacion" ref={RefOcupacion}>
            {oficios.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" ref={RefEmail}></input>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" name="password" ref={RefPassword}></input>
        </div>
      </div>
      <p className="msj">{mensaje}</p>
      <input
        className="submit"
        type="submit"
        value="Registrarme"
        onClick={() => {
          registrarUsuario();
        }}
      ></input>
    </div>
  );
};

export default AERegister;
