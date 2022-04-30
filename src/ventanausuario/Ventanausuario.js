import { useState,useEffect } from "react"

import { Login } from "./registro/Login"
import { Registro } from "./login/Registro"

import './ventanausuario.scss'

export function Ventanausuario() {

    const [divLogin, setDivLogin] = useState(false);
    const [logActive, setLogActive] = useState(false);

    return (
        <div className="ventanausuario_container">
            <div className="div_btns">
                <button className={logActive ? "btn_log activador": "btn_log" } onClick={()=>{setDivLogin(true); setLogActive(true)}}>
                    Ingresar
                </button>
                <button className={logActive ? "btn_reg": "btn_reg activadol" }  onClick={()=>{setDivLogin(false); setLogActive(false)}}>
                    Registrarme
                </button>
            </div>
            <div className="div_form">
                {
                    divLogin ? <Login /> : <Registro />
                }
            </div>  
        </div>
    )
}
