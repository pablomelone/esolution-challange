import React from 'react';
import { useState } from 'react';
import { getUser } from '../services/UserService';
import '../styles/Login.css'


export default function Login({setToken}) {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await getUser({
            email,
          password
        });
        setToken(token);
      }


    /* const handleSubmit = (event) => {
        event.preventDefault();
        getUser().then();

        // Si el usuario existe, redirijo a AllPost
        // Si el usuairo no existe, doy un mensaje de error y me quedo en el Login  */
   

    return (
        <div>
            <h3>Bienvenidos de nuevo. Por favor inicie sesión</h3>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="email">
                        <input type="email" onChange={e=> setEmail(e.target.value)} placeholder="Escriba su dirección de correo"/>
                    </label><br/>
                    <label htmlFor="password">
                        <input type="password" onChange={e=> setPassword(e.target.value)} placeholder="Escriba su contraseña"/>
                    </label>
                </fieldset>
                <button>Ingresar</button> <button type="button" onClick={() => {}}>Registrarse</button>
            </form>       
        </div>
    )
}