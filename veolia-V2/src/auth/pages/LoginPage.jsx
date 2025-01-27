import React from 'react'
import { SelectorSistema } from '../components/SelectorSistema';
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './style.css';

export const LoginPage = () => {
  // Estado para almacenar el correo electrónico y la contraseña ingresados por el usuario
  const navigate = useNavigate();
  const [sisuCorreo, setEmail] = useState('');
  const [sisuPass, setPassword] = useState('');
  const [sistema, setSistema] = useState('');

  // Función para manejar el envío del formulario de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('correo: ',sisuCorreo);
      console.log('pass: ',sisuPass);
      console.log('sistema: ',sistema);
      const idSistema = Number(sistema);
      // Enviar una solicitud HTTP POST al endpoint de inicio de sesión en el backend
      const response = await axios.post('http://localhost:3000/api/auth/login', { sisuCorreo, sisuPass, idSistema: idSistema });

      // Si la solicitud fue exitosa, obtener el token JWT de la respuesta
      const { token } = response.data;

      // Guardar el token en el almacenamiento local (LocalStorage)
      localStorage.setItem('token', token);

      // Configurar Axios para enviar el token en los encabezados de autorización
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      const tokenData = token.split(".")[1];
      const decodedToken = JSON.parse(atob(tokenData));

      if (decodedToken) {
        const usuarioId = decodedToken.sisuId;
        console.log('token id: ',usuarioId);
        const usuario = decodedToken.sisuCorreo;
        console.log('token usuario: ',usuario);     
        const sistema = decodedToken.idSistema;
        console.log('token sistema: ',idSistema);   
      };
      
      if (token){
        navigate('/');
      }
      
      // Redireccionar a la página de inicio o realizar cualquier otra acción necesaria
      // Por ejemplo, puedes usar React Router para redireccionar a otra página
      // history.push('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <>
      <div className='login'>
        <div className='sesion'>
          <img src="../assets/Veolia_sml.png" alt="Veolia" style={{ height: '80px', width: 'auto', marginBottom: '2rem' }} />
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="sisuCorreo">Correo electrónico:</label>
              <input
                type="email"
                id="sisuCorreo"
                value={sisuCorreo}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="sisuPass">Contraseña:</label>
              <input
                type="password"
                id="sisuPass"
                value={sisuPass}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <SelectorSistema usuario={sisuCorreo} sistema={sistema} setSistema={setSistema}/>
            </div>
            <button type="submit">Iniciar sesión</button>
          </form>
        </div>
      </div>
    </>
  );
}
