import React from 'react';
import { useState } from 'react';
import { setUser } from '../services/UserService';
import '../styles/Register.css';

export default function Register({setToken}) {
   
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      const token = await setUser({
        name,
        email,
        password
      });
      setToken(token);
    }
  

    return (
        <div>
            <h2>Bienvenidos. Por favor regístrese aquí.</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">
                        <input type="text" onChange={e => setName(e.target.value)} placeholder="Escriba su nombre"/>
                    </label> <br/>
                    <label htmlFor="email">
                        <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Escriba su dirección de correo"/>
                    </label> <br/>
                    <label htmlFor="password">
                        <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Escriba su contraseña"/>
                    </label>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}