import { useRef, useState, useEffect } from 'react'

import './login.scss'
import { fetchPost } from '../../api/fetchpost';

import { setEmailUser } from '../../helpers/auth-localstorage';

const URL_LOGIN= window.location.hostname == 'localhost' ? "http://localhost/servidor-aqv/usuario/login.php" : "https://www.aqvergowasi.com/oficial/usuario/login.php";

export function Login() {

    const RefEmail = useRef(null);
    const RefPassword = useRef(null);

    const entrarUsuario = async () => {

        const data = {
            "user_email": RefEmail.current.value,
            "user_password": RefPassword.current.value
        }

        const respuestaJson = await fetchPost(URL_LOGIN, data);

        if(respuestaJson.conectado === true){
            setEmailUser(respuestaJson.email);
            window.location.reload();
        }

        console.log(respuestaJson);
    }

    return (
        <div className='login_container'>
            <div className='form_container'>
                <div>
                    <label for='email'>Email: 
                    </label>
                    <input type='email' name='email' ref={RefEmail} >
                    </input>
                </div>
                <div>
                    <label for='password'>Contraseña: 
                    </label>
                    <input type='password' name='password' ref={RefPassword}>
                    </input>
                </div>

            </div>
            <input className='submit' type='submit' value='Ingresar' onClick={()=>{entrarUsuario()}} >
            </input>
        </div>
    )
}
